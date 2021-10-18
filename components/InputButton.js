import { Button, Flex, Text } from '@chakra-ui/react'
import Styled from '@emotion/styled'
import { betaApply } from 'contents'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { buildFormData, submitForm, testMobileNumber } from 'utils/formUtils'

const Container = Styled.div`
  display: flex;
  width: 100%;
  min-width: 460px;
  &.dark {
    background-color: transparent;
    padding: 0;
    border: 1px solid #fff;
    border-radius: 8px;
  }

  @media screen and (max-width: 767px) {
    min-width: 0;
  }
`

const StyledInput = Styled.input`
	background-color: #28282A;
	color: #fff;
	outline: none;
	padding: 16px;
	font-size: 18px;
	line-height: 32px;
  flex: 1;

  &::placeholder {
    color: #f1f1f1 !important;
  }

  @media screen and (max-width: 640px) {
    padding: 8px 12px !important;
    font-size:16px;
    line-height:1.5;
  }

  &.dark {
    background-color: #fff;
    color: #212121;
    border-radius: 6px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;

    &::placeholder {
      color: #000 !important;
    }

    @media screen and (max-width: 640px) {
      padding: 8px 12px !important;
    }
  
  }
`

const StyledButton = Styled(Button)`
  color: #000;
  background-color: #fff;
  border-radius: 12px;
  padding: 9px 15px;
  outline: none;
  font-weight: 500;
  transition: color 300ms ease, background-color 300ms ease;
  height: inherit;
  &.dark {
    color: #fff;
    background-color: #000;
    border-radius: 8px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;

    &:hover {
      background-color: #00dcc8;
      color: #000;
    }
  }
`

const Mobile = Styled.span`
  display: none;

  @media screen and (max-width: 767px) {
    display: inline-block;
  }
`

const Desktop = Styled.span`
  display: inline-block;

  @media screen and (max-width: 767px) {
    display: none;
  }
`

const propTypes = {
  variant: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
}

const defaultProps = {
  variant: 'basic',
}

export function InputButton({
  variant = 'basic',
  placeholder = 'Enter Phone Number',
  label = 'Get Beta Access',
  formName = 'landingpage',
}) {
  const [number, setNumber] = useState('')
  const [valid, setValid] = useState(true)
  const form = submitForm()
  const { isLoading, isError, isSuccess } = form

  function onSubmit(event) {
    event.preventDefault()
    if (!testMobileNumber(number)) {
      setValid(false)
    } else {
      const formData = buildFormData({ phone: number }, formName)
      form.mutate(formData)
    }
  }

  function handleChange(event) {
    const { value } = event.target
    if (!valid) setValid(true)
    if (value.length <= 10) setNumber(event.target.value)
  }

  return (
    <Flex flexDir="column">
      {isSuccess && !isLoading ? (
        <Text color="white">{betaApply.submitMessage}</Text>
      ) : (
        <Container className={variant}>
          <StyledInput
            placeholder={placeholder}
            type="number"
            className={variant}
            required
            value={number}
            onChange={handleChange}
          />
          <StyledButton
            isLoading={isLoading}
            disabled={isLoading}
            onClick={onSubmit}
            className={variant}
            type="submit"
          >
            <Desktop>{label}</Desktop>
            <Mobile>Submit</Mobile>
          </StyledButton>
        </Container>
      )}

      {!valid && (
        <Text mt="20px" color="white">
          Please enter a valid phone number.
        </Text>
      )}
      {isError && !isLoading && valid && (
        <Text mt="20px" color="white">
          {betaApply.errorMessage}
        </Text>
      )}
    </Flex>
  )
}

InputButton.propTypes = propTypes
InputButton.defaultProps = defaultProps
