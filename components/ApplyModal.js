import { useEffect, useState } from 'react'
import Styled from '@emotion/styled'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Text,
  Button,
  Input,
  Flex,
} from '@chakra-ui/react'

import { Message } from 'components'
import { applyForm } from 'contents/modal'
import { buildFormData, submitForm, testMobileNumber } from 'utils/formUtils'
import style from './ApplyModal.module.css'

const formName = 'gapy_landing_form'
const COUPON_CODE_REGEX = /\d{3}[A-Z]{1}\d{4}[A-Z]{1}\d{5}[A-Z]{2}/

const StyledModalOverlay = Styled(ModalOverlay)`
  width: 100% !important;
  height: 100% !important;
`

const StyledModalContent = Styled(ModalContent)`
	width: 100%;
	max-width: 730px;
  border-radius: 12px;
  max-height: 480px;
  background: #fff;

	@media screen and (max-width: 640px) {
    width: 100%;
    height:100%;
		max-width: 365px;
    max-height: 590px;
	}

	header {
		padding: 0;
		
		 span {
			font-size: 1.875rem;
			line-height: 1.2;

			@media (max-width: 479px) {
				font-size: 1.5rem;
			}
		}
	}
`

const StyledModalBody = Styled(ModalBody)`
	display: flex;
	flex-wrap: wrap;
	padding: 0;

	@media screen and (max-width: 640px) {
		flex-direction: column;
		max-width: 365px;
	}

`

const StyledContent = Styled.div`
	flex:1;
	padding: 24px 48px 18px 50px;

  @media screen and (max-width: 640px) {
    padding: 32px;
  }

  @media screen and (max-width: 480px) {
    padding: 24px;
  }
`

const PhoneNumberField = Styled.div`
  display: flex;
  align-items: center;
`

const StyledCountryCode = Styled.span`
  line-height: 28px;
  border-bottom: 1px solid rgb(226, 232, 240);
`

const PhoneNumber = Styled(Input)`
  flex: 1;
  margin-left: 16px;
`

const BGImage = Styled.div`
	background-image: url("/images/gapy_desktop_bg.png");
	background-size: cover;
	background-repeat: no-repeat;
  border-bottom-right-radius: 12px;
  border-top-right-radius: 12px;
	width: 348px;
	height: 480px;

	@media screen and (max-width: 640px) {
		background-image: url("/images/gpay_mobile.png");
		width: 100%;
		max-width: 365px;
		max-height: 170px;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
	}
`

const Error = Styled(Text)`
  color: red;
  font-size: 14px;
  text-align: center;
`

const StyledLabel = Styled.label`
  font-size: 10px;
  line-height: 1.3;
`

const ApplyButton = Styled(Button)`
  background: transparent;
  font-weight: 400;
  text-decoration: underline;
  color: #8D8D95;
  outline: none;

  &:hover, 
  &:active, 
  &:focus {
    background: transparent;
    outline: none;
  }
`

const InputWrapper = Styled(Flex)`
  border-bottom: 1px solid rgb(226, 232, 240);
`

const Step1 = ({ content, handleSubmit, form: { isLoading, isError } }) => {
  const [{ name = '', phone = '', couponCode = '' }, setData] = useState({})
  const [couponApplied, setCouponApplied] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target

    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleFormSubmit = () => {
    handleSubmit({ name, phone })
  }

  return (
    <>
      <Text fontSize={24} lineHeight={1.2} fontWeight={400} mb={6} mt={4}>
        {content.title}
      </Text>
      <Text fontSize={14} lineHeight={1.3} fontWeight={400} color={'#8D8D95'}>
        {content.subtitle}
      </Text>

      <Flex direction="column" pt={6}>
        <StyledLabel htmlFor="name">Coupon Code</StyledLabel>
        <InputWrapper>
          <Input
            id="couponCode"
            name="couponCode"
            variant="flushed"
            placeholder="Coupon Code"
            onChange={handleChange}
            value={couponCode}
            autoFocus
            borderBottom="none"
            className={style.input}
            disabled={couponApplied}
          />
          {couponApplied ? (
            <Flex
              className={`positive-color ${style['apply-action']}`}
              alignItems="center"
            >
              <svg
                width="11"
                height="9"
                viewBox="0 0 11 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.89402 8.02446C2.67437 8.0215 2.45826 7.96868 2.262 7.86999C2.06575 7.77129 1.89448 7.6293 1.76113 7.45474L0.161367 5.63613C0.0434596 5.48974 -0.0133907 5.30349 0.00266919 5.11621C0.0187291 4.92893 0.10646 4.75508 0.247569 4.63091C0.388678 4.50673 0.572273 4.44182 0.760074 4.4497C0.947875 4.45758 1.12539 4.53765 1.25559 4.67321L2.75469 6.37948C2.77136 6.39842 2.79179 6.4137 2.81467 6.42435C2.83755 6.43499 2.8624 6.44077 2.88763 6.44132C2.91286 6.44187 2.93794 6.43718 2.96126 6.42754C2.98459 6.41789 3.00566 6.40352 3.02314 6.38531L8.93197 0.226996C8.99797 0.157543 9.07701 0.101771 9.16457 0.062863C9.25213 0.0239555 9.34649 0.00267497 9.44228 0.000236366C9.53806 -0.00220224 9.63338 0.0142488 9.72281 0.0486504C9.81223 0.083052 9.89401 0.13473 9.96346 0.200735C10.0329 0.266739 10.0887 0.345777 10.1276 0.433335C10.1665 0.520894 10.1878 0.615259 10.1902 0.711042C10.1927 0.806825 10.1762 0.90215 10.1418 0.991575C10.1074 1.081 10.0557 1.16277 9.98972 1.23223L4.00648 7.52987C3.86951 7.68986 3.69857 7.81728 3.50612 7.90284C3.31367 7.9884 3.10456 8.02995 2.89402 8.02446Z"
                  fill="#31B4A1"
                />
              </svg>
              Applied
            </Flex>
          ) : (
            <ApplyButton
              onClick={() => {
                setCouponApplied(true)
              }}
              className={style['apply-action']}
              disabled={!couponCode || !COUPON_CODE_REGEX.test(couponCode)}
            >
              Apply
            </ApplyButton>
          )}
        </InputWrapper>
        {couponCode && !COUPON_CODE_REGEX.test(couponCode) && (
          <Error>Please enter valid coupon.</Error>
        )}
      </Flex>

      <Flex direction="column" pt={6}>
        <StyledLabel htmlFor="name">Full Name</StyledLabel>
        <Input
          id="name"
          name="name"
          variant="flushed"
          placeholder="Your Name"
          onChange={handleChange}
          value={name}
          className={style.input}
        />
      </Flex>

      <Flex direction="column" pt={6}>
        <StyledLabel htmlFor="phone-number">Phone Number</StyledLabel>
        <PhoneNumberField>
          <StyledCountryCode>🇮🇳 +91</StyledCountryCode>
          <PhoneNumber
            id="phone-number"
            name="phone"
            variant="flushed"
            placeholder="Your Phone Number"
            value={phone}
            onChange={handleChange}
            className={`${style.input} flex-1`}
          />
        </PhoneNumberField>
      </Flex>

      <div
        style={{
          marginTop: 24,
        }}
      >
        <Button
          isFullWidth
          bgColor="#000"
          color="#fff"
          borderRadius={12}
          fontWeight="unset"
          disabled={
            // name.trim().length < MIN_NAME_LENGTH ||
            !testMobileNumber(phone) || isLoading
          }
          _hover={{ color: '#00DCC8' }}
          onClick={handleFormSubmit}
          isLoading={isLoading}
          loadingText="Submitting"
        >
          {content.ctaLabel}
        </Button>
        {isError && !isLoading && <Error>{applyForm.errorMessage}</Error>}
      </div>
    </>
  )
}

const Step2 = ({ content }) => (
  <>
    <Text fontSize={24} lineHeight={1.2} fontWeight={400} mb={6} mt={4}>
      {content.title}
    </Text>
    <Text fontSize={14} lineHeight={1.3} fontWeight={400} color={'#8D8D95'}>
      <Message>{content.subtitle}</Message>
    </Text>

    <div
      style={{
        marginTop: 88,
      }}
    >
      <Button
        as="a"
        isFullWidth
        bgColor="#000"
        color="#fff"
        borderRadius={12}
        fontWeight="unset"
        _hover={{ color: '#00DCC8' }}
        {...content.link}
      >
        {content.ctaLabel}
      </Button>
    </div>
  </>
)

export function ApplyModal({ onClose }) {
  const [currentState, setCurrentState] = useState(0)
  const content = applyForm.states[currentState || 0]

  const nextStep = () => setCurrentState((v) => v + 1)
  const prevStep = () => setCurrentState((v) => v - 1)

  const form = submitForm()

  const handleSubmit = (data) => {
    const formData = buildFormData(data, formName)
    form.mutate(formData)
  }

  // Show congratulations on success
  useEffect(() => {
    if (form.isSuccess) {
      setCurrentState(1)
    }
  }, [form.isSuccess])

  const getCurrentStep = () => {
    let Component = Step1

    switch (currentState) {
      case 0:
        Component = Step1
        break

      case 1:
        Component = Step2
        break

      default:
        Component = Step1
        break
    }

    return (
      <Component
        content={content}
        onClose={onClose}
        nextStep={nextStep}
        handleSubmit={handleSubmit}
        form={form}
      />
    )
  }

  return (
    <Modal isOpen isCentered closeOnEsc={false}>
      <StyledModalOverlay />
      <StyledModalContent>
        <StyledModalBody>
          <StyledContent>
            {content.showClose ? (
              <button onClick={onClose}>
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.507 15.84l-3.96-3.96a.295.295 0 010-.417l3.96-3.96a1.179 1.179 0 10-1.667-1.667l-3.96 3.96a.295.295 0 01-.417 0l-3.96-3.96a1.179 1.179 0 00-1.667 1.667l3.96 3.96a.295.295 0 010 .417l-3.96 3.96a1.179 1.179 0 101.667 1.667l3.96-3.96a.295.295 0 01.417 0l3.96 3.96a1.179 1.179 0 101.667-1.667z"
                    fill="#020203"
                  />
                </svg>
              </button>
            ) : (
              <button onClick={currentState === 0 ? onClose : prevStep}>
                <svg
                  width="24"
                  height="15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.3 14.692c-.43.415-1.12.41-1.543-.012L.313 8.252a1.058 1.058 0 010-1.504L6.757.32A1.105 1.105 0 018.299.308c.43.415.435 1.093.013 1.515L3.696 6.43h19.213c.603 0 1.091.48 1.091 1.071 0 .592-.488 1.071-1.09 1.071H3.695l4.616 4.606c.422.422.417 1.1-.013 1.515z"
                    fill="#000"
                  />
                </svg>
              </button>
            )}
            {getCurrentStep()}
          </StyledContent>

          <BGImage />
        </StyledModalBody>
      </StyledModalContent>
    </Modal>
  )
}
