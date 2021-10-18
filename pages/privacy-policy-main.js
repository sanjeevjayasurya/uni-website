import { Flex, Heading, Text } from '@chakra-ui/layout'
import { Message, Layout, SEO } from 'components'
import { Container } from '../components/Container'
import { OldPrivacyContent } from '../contents'

export default function PrivacyPolicy() {
  const { introduction, termsAndPolicy, headerTitle } = OldPrivacyContent;
  return (
    <Layout useWhiteHeader showHeaderActions={false}>
      <SEO title={headerTitle} />
      <Flex
        w="100%"
        h={['35em']}
        backgroundImage="url(/images/privacy_background.png)"
        backgroundPosition={['60% 50%', '50% 50%']}
        backgroundSize="cover"
        color="white"
        position="relative"
        alignItems={['flex-end', 'flex-end', 'center', 'center']}
        justifyContent={['flex-end', 'flex-end', 'normal', 'normal']}
      >
        {getHeader(headerTitle)}
      </Flex>
      <Container
        style={{
          lineHeight: '150%',
          fontWeight: '300',
        }}
      >
        {introduction.map((item, key) => {
          return (
            <>
              <Text size="xl" key={key}>
                {item}
              </Text>
              <br />
            </>
          )
        })}

        {termsAndPolicy.map((category, key) => {
          const { title, description = [], body, hasHtml = false } = category
          return (
            <div
              key={key}
              style={{
                marginTop: '50px',
                marginBottom: '60px',
              }}
            >
              <Heading size={title.size || 'md'}>{title.label}</Heading>
              <br />
              {description.length > 0 && (
                <div
                  style={{
                    marginBottom: '40px',
                  }}
                >
                  {description.map((descr, index) => {
                    if (hasHtml) {
                      return (
                        <Text key={descr}>
                          <Message
                            as={'ol'}
                            size="xl"
                            key={index}
                            message={descr}
                          />
                        </Text>
                      )
                    } else {
                      return (
                        <Text size="xl" key={index}>
                          {descr}
                        </Text>
                      )
                    }
                  })}
                </div>
              )}
              {body && (
                <body.type
                  style={{
                    width: '85%',
                    marginBottom: '20px',
                    marginLeft: '40px',
                  }}
                >
                  {body.data.map((item, num) => {
                    return (
                      <Message
                        as={'li'}
                        style={{
                          marginBottom: '20px',
                        }}
                        message={item}
                        key={num}
                      />
                    )
                  })}
                </body.type>
              )}
            </div>
          )
        })}
      </Container>
    </Layout>
  )
}

function getHeader(headerTitle) {
  return (
    <Container>
      <Heading
        as="h3"
        fontSize={['4xl', '5xl', '6xl']}
        width={['100%', '100%', '60%', '60%']}
      >
        {headerTitle}
      </Heading>
    </Container>
  )
}
