import { Flex, Text } from '@chakra-ui/layout'
import { Button, Heading, Input, Box } from '@chakra-ui/react'
import Link from 'next/link'
import { SEO, Header, PlayStoreIcon, AppStoreIcon } from '../components'

import { footerContent, betaApply } from '../contents'
import { Controller, useForm } from 'react-hook-form'
import { buildFormData, submitForm, REGEX } from 'utils/formUtils'
import { useState } from 'react'
const { applyFormFields } = betaApply
const { links } = footerContent.download

const Style = {
  text: {
    fontSize: '15px',
    fontWeight: '400',
    marginTop: '10px',
  },
  input: {
    borderStyle: 'none none solid',
    borderWidth: '1px',
    borderColor: '#000 #000 rgba(141, 141, 149, 0.31)',
    marginTop: '8px',
  },
  button: {
    color: '#fff',
    background: 'black',
    width: '100%',
    height: '56px',
    fontWeight: 700,
  },
  playStoreButton: {
    background: 'black',
    color: '#fff',
    width: '200px',
    height: '56px',
    paddingRight: '45px',
    paddingLeft: '45px',
  },
  appStoreBtn: {
    marginLeft: 16,
  },
  arrowImage: {
    marginTop: '20px',
    cursor: 'pointer',
  },
  titleCaption: {
    padding: '20px 0px',
  },
  applicationForm: {
    display: 'flex',
    flexDirection: 'row',
    maxWidth: '700px',
    position: 'relative',
    height: 'inherit',
  },
}

export default function Apply() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [isSubmitTouched, setIsSubmitTouched] = useState(false)
  const form = submitForm()
  const { isLoading, isError, isSuccess } = form

  const onSubmit = (data) => {
    const formData = buildFormData(data, 'apply_form')
    form.mutate(formData)
  }

  const hasErrors = (errors) => {
    return Object.keys(errors).length > 0
  }

  return (
    <>
      <SEO title={betaApply.seoTitle} />
      <Box
        w="100vw"
        h="100vh"
        position="fixed"
        className="apply-background apply-container"
      >
        <Link href="/" passHref>
          <Box
            zIndex="100"
            display={['block', 'block', 'none']}
            position="absolute"
            right="0"
            w="20px"
            h="20px"
            margin="30px"
            cursor="pointer"
          >
            <svg
              width="18"
              height="18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 8.914L0 1.414 1.414 0l7.5 7.5 7.5-7.5 1.414 1.414-7.5 7.5 7.5 7.5-1.414 1.414-7.5-7.5-7.5 7.5L0 16.414l7.5-7.5z"
                fill="#fff"
              />
            </svg>
          </Box>
        </Link>
        <Header showHeaderActions={false} bgColor="transparent" />

        <Box
          position="relative"
          width="100%"
          justifyContent="center"
          minH="80px"
          zIndex="-15"
        ></Box>
        <Box
          w={['100%', '100%', '93%']}
          h={['100%', '100%']}
          bgColor="white"
          overflowY={['scroll']}
        >
          <Flex
            flexDirection={['column', 'column', 'column', 'row']}
            style={{
              width: '93%',
              maxWidth: '1280px',
              margin: '0 auto',
              marginBottom: 64,
            }}
          >
            <div className="application-form" style={Style.applicationForm}>
              <Box
                position="relative"
                padding={[
                  '3.125em 0',
                  '3.125em 0em',
                  '5em 0 0 0',
                  '5em 0 0 0',
                  '6em 0 0 5em',
                ]}
              >
                <Link href="/" passHref>
                  <Box
                    display={['none', 'none', 'block']}
                    h="31px"
                    maxW="56px"
                    style={Style.arrowImage}
                  >
                    <svg
                      width="56"
                      height="31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 15.5h54m-54 0L7.512 22M1 15.5L7.512 9"
                        stroke="#000"
                        strokeWidth="1.5"
                        strokeLinecap="square"
                        strokeLinejoin="bevel"
                      />
                    </svg>
                  </Box>
                </Link>
              </Box>
              {isSuccess && !isLoading ? (
                <Text fontSize="2xl" style={{ padding: '4em' }}>
                  {betaApply.submitMessage}
                </Text>
              ) : (
                <Flex
                  flexDirection="column"
                  padding={['3.125em 1em', '3.125em 2em', '4.75em 3em 2em']}
                >
                  <Heading
                    as="h1"
                    fontSize={['40px', '40px', '40px', '48px']}
                    fontWeight="500"
                  >
                    {betaApply.heading}
                  </Heading>

                  <Text
                    style={Style.titleCaption}
                    fontSize={['18px', '18px', '18px', '20px']}
                  >
                    {betaApply.caption}
                  </Text>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                      name="phone"
                      control={control}
                      defaultValue=""
                      rules={{
                        required: true,
                        maxLength: 10,
                        minLength: 10,
                        pattern: REGEX.PHONE,
                      }}
                      render={({ field }) => (
                        <>
                          <Text style={Style.text}>
                            {applyFormFields[1].label}
                          </Text>
                          <Input
                            {...field}
                            style={Style.input}
                            placeholder="XXXXXXXXXX"
                            disabled={isLoading}
                            maxLength={10}
                          />
                        </>
                      )}
                    />
                    {errors.phone?.type === 'required' && (
                      <Text size="xs" style={{ color: 'red' }}>
                        {applyFormFields[1].errors.required}
                      </Text>
                    )}
                    {(errors.phone?.type === 'pattern' ||
                      errors.phone?.type === 'minLength' ||
                      errors.phone?.type === 'maxLength') && (
                      <Text size="xs" style={{ color: 'red' }}>
                        {applyFormFields[1].errors.invalid}
                      </Text>
                    )}
                    <Controller
                      name="name"
                      control={control}
                      rules={{
                        pattern: REGEX.NAME,
                        maxLength: 64,
                      }}
                      defaultValue=""
                      render={({ field }) => (
                        <Box mt="10px">
                          <Text display="inline" style={Style.text}>
                            {applyFormFields[0].label}
                          </Text>
                          {isSubmitTouched && (
                            <Text
                              ml="8px"
                              display="inline"
                              color="rgb(163,174,190)"
                            >
                              ( optional )
                            </Text>
                          )}
                          <Input
                            {...field}
                            style={Style.input}
                            disabled={isLoading}
                            placeholder="Full Name"
                          />
                        </Box>
                      )}
                    />
                    {errors.name?.type === 'pattern' && (
                      <Text size="xs" style={{ color: 'red' }}>
                        {applyFormFields[0].errors.specialCharacterError}
                      </Text>
                    )}
                    {errors.name?.type === 'maxLength' && (
                      <Text size="xs" style={{ color: 'red' }}>
                        {applyFormFields[0].errors.maxLength}
                      </Text>
                    )}
                    <Controller
                      name="email"
                      control={control}
                      rules={{
                        pattern: REGEX.EMAIL,
                      }}
                      defaultValue=""
                      render={({ field }) => (
                        <Box mt="10px">
                          <Text style={Style.text} display="inline">
                            {applyFormFields[2].label}
                          </Text>
                          {isSubmitTouched && (
                            <Text
                              ml="8px"
                              display="inline"
                              color="rgb(163,174,190)"
                            >
                              ( optional )
                            </Text>
                          )}

                          <Input
                            {...field}
                            type="email"
                            style={Style.input}
                            disabled={isLoading}
                            placeholder="email@example.com"
                          />
                        </Box>
                      )}
                    />
                    {errors.email?.type === 'pattern' && (
                      <Text size="xs" style={{ color: 'red' }}>
                        {applyFormFields[2].errors.invalid}
                      </Text>
                    )}
                    <Text
                      style={
                        (Style.text, { color: '#8d8d95', padding: '10px 0px' })
                      }
                      fontSize="sm"
                    >
                      {betaApply.nextStep}
                    </Text>
                    <Button
                      isLoading={isLoading}
                      disabled={isLoading || hasErrors(errors)}
                      loadingText="Applying"
                      type="submit"
                      style={Style.button}
                      onClick={() => setIsSubmitTouched(true)}
                    >
                      Apply Now
                    </Button>
                  </form>
                  {isError && !isLoading && (
                    <Text size="xs" style={{ color: 'red' }}>
                      {betaApply.errorMessage}
                    </Text>
                  )}
                </Flex>
              )}
            </div>

            <Flex
              className="play-store space"
              alignItems={['center', 'center', 'center', 'flex-start']}
              justifyContent={[
                'space-around',
                'space-around',
                'space-around',
                'flex-start',
              ]}
              flexDirection={['row', 'row', 'row', 'column']}
              bgColor={['#F2F4F8', '#F2F4F8', '#F2F4F8', '#fff']}
              padding={[
                '60px 0 120px 20px',
                '60px 0 120px 20px',
                '60px 0 60px 20px',
                '6em 2em 2em',
              ]}
              flexWrap={['wrap', 'wrap', 'wrap', 'nowrap']}
            >
              <Heading
                as="h6"
                fontSize={['22px', '22px', '32px', '32px']}
                fontWeight="500"
                style={{ paddingBottom: '20px' }}
              >
                {betaApply.download}
              </Heading>

              <Flex direction={['column', 'row']}>
                <Button
                  as="a"
                  href={links[0].href}
                  alt="google-play-store-link"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="google-btn-3"
                  style={Style.playStoreButton}
                >
                  <PlayStoreIcon mr={2} />
                  <span>{betaApply.playStore}</span>
                </Button>

                <Button
                  as="a"
                  href={links[1].href}
                  alt="apple-app-store-link"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="apple-btn-3"
                  style={Style.playStoreButton}
                  ml={[0, '16px']}
                  mt={['16px', 0]}
                >
                  <AppStoreIcon mr={2} />
                  <span>{betaApply.appStore}</span>
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </>
  )
}
