import axios from 'axios'
import { useMutation } from 'react-query'

const UTM_KEYS = ['utm_source', 'utm_campaign']
export const generateRandomNumber = () => {
  const rand = Math.random() * 100000000
  return rand.toFixed()
}

export const buildFormData = (data, formName) => {
  const url = window.location.href
  const utm_params = {}
  const urlParams = new URLSearchParams(window.location.search)

  for (const [key, value] of urlParams) {
    if (UTM_KEYS.includes(key)) {
      utm_params[key] = value
    }
  }

  return {
    ...data,
    utm_params: url,
    form_name: formName,
    event_name: 'WEBSITE_LEAD_EVENT',
    ...utm_params,
  }
}

export function leadSubmitDataLayerEvent({
  event = 'LeadSubmit',
  leadId = generateRandomNumber(),
  product = 'Card',
  formLocation = 'apply_form',
}) {
  window.dataLayer = window.dataLayer || []

  window.dataLayer.push({
    event: event,
    LeadID: leadId,
    Product: product,
    formLocation,
  })

  console.log('lead submit event', formLocation)
}

export function submitForm() {
  const mutation = useMutation(
    (data = {}) => {
      return axios.post(
        process.env.NEXT_PUBLIC_LEADSQUARE_API,
        JSON.stringify(data),
        {
          headers: {
            'content-type': 'application/json',
          },
        }
      )
    },
    {
      onSuccess: (_, variables) => {
        leadSubmitDataLayerEvent({ formLocation: variables.form_name })
      },
      onError: () => {
        console.log('some error occurred')
      },
    }
  )
  return mutation
}

export const testMobileNumber = (number) => {
  const phoneNumberRegex = /[6-9]{1}[0-9]{9}/
  return number.length == 10 && phoneNumberRegex.test(number)
}

export const MIN_NAME_LENGTH = 2

export const REGEX = {
  NAME: /^[A-Za-z\s]+$/,
  PHONE: /[6-9]{1}[0-9]{9}/,
  PAN: /[A-Z, a-z]{5}[0-9]{4}[A-Z, a-z]{1}/,
  EMAIL:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
}
