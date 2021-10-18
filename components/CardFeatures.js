import { Box, Flex, Image, Heading, Text } from '@chakra-ui/react'
import { Container } from './Container'
import Styled from '@emotion/styled'

const StyledHeader = Styled(Heading)`
  font-size: 2.25rem;

  @media screen and (max-width: 768px) {
    font-size: 1.875rem;
  }
`

const StyledContent = Styled(Text)`
  font-size: 1.125rem;
  padding: 35px;
  
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    padding: 24px;
  }
`

export const CardFeatures = () => {
  return (
    <Box bg="black" padding="80px 0" color="white">
      <Container style={{ padding: '2em' }}>
        <Flex
          flexDirection={['column', 'column', 'row', 'row']}
          alignItems="center"
        >
          <Box width={['100%']} flexDirection={['column']}>
            <StyledHeader textAlign="center" as="h3">
              Pay in 3 parts
            </StyledHeader>
            <StyledContent
              height="100px"
              textAlign="center"
              color="hsla(0, 0%, 100%, 0.8)"
              margin="20px 0px 40px 0px"
            >
              Pay for anything & everything and just pay 1/3rd every month.
              Nothing more, not even a rupee.
            </StyledContent>
            <Box margin="80px 40px">
              <Image
                margin="0 auto"
                width="90%"
                src={`/images/pay_in_3.svg`}
                alt="Pay in 3"
                loading="lazy"
              />
            </Box>
          </Box>
          <Box width={['100%']} flexDirection={['column']} alignItems="center">
            <StyledHeader textAlign="center" as="h3">
              1% Rewards
            </StyledHeader>
            <StyledContent
              padding="35px"
              height="100px"
              textAlign="center"
              color="hsla(0, 0%, 100%, 0.8)"
              margin="20px 0px 40px 0px"
            >
              Choose to pay in full, post the 30 days free credit period & enjoy
              1% rewards in the form of cashback.
            </StyledContent>

            <Box margin="80px 40px">
              <Image
                margin="0 auto"
                width="90%"
                src={`/images/cashback_image.svg`}
                alt="Cashback"
                loading="lazy"
              />
            </Box>
          </Box>
          <Box width={['100%']} flexDirection={['column']} alignItems="center">
            <StyledHeader textAlign="center" as="h3">
              No joining fee
            </StyledHeader>
            <StyledContent
              padding="35px"
              height="100px"
              textAlign="center"
              color="hsla(0, 0%, 100%, 0.8)"
              margin="20px 0px 40px 0px"
            >
              Yes, you read that right. There is no joining fees or annual
              charges for our Beta customers.
            </StyledContent>
            <Box margin="80px 40px">
              <Image
                margin="0 auto"
                width="90%"
                src={`/images/joining_fee.svg`}
                alt="Joining Fee"
                loading="lazy"
              />
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}
