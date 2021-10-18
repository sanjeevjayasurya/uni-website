import { Flex, Heading, Text } from '@chakra-ui/layout'
import { openBeta } from '../contents'
import { Message } from './Message'

export function OpenForBeta({ showCaption = true, ...props }) {
  const { caption, header, charges } = openBeta
  return (
    <Flex
      w="100%"
      flexDir="column"
      alignItems="center"
      id="open-for-beta"
      {...props}
    >
      <Flex
        w="100%"
        maxW="1330px"
        p={['110px 15px', '110px 45px', '200px 45px']}
        alignItems={['', '', '', 'flex-end']}
        flexDir={['column', 'column', 'column', 'row']}
        justifyContent={['', '', '', 'center']}
      >
        <Flex
          flexWrap="nowrap"
          mr="11vw"
          flexDir="column"
          justifyContent={['', '', '', 'center']}
        >
          {showCaption ? (
            <Text
              color="#8d8d95"
              fontSize={['14px', '14px', '20px']}
              lineHeight="160%"
              fontWeight="400"
              marginBottom="20px"
            >
              {caption}
            </Text>
          ) : null}
          <Heading
            bgGradient="linear(96.57deg, #00DCC8 19.83%, #2BE3A1 84.64%)"
            bgClip="text"
            fontSize={['3.25em', '3.25em', '3.75em', '5.5em']}
            fontWeight="medium"
            mb={['20px', '40px', '40px', '40px']}
          >
            {header.map((text, key) => {
              return (
                <Text lineHeight="1" key={key} w={'100%'}>
                  {text}
                </Text>
              )
            })}
          </Heading>
        </Flex>
        <Flex
          justifyContent={['', '', '', 'center']}
          fontSize={['20px', '20px', '22px']}
          lineHeight="140%"
          fontWeight="300"
          marginBottom={['0', '0', '0', '58px']}
          maxWidth={'324px'}
        >
          <Message as={'p'} message={charges} />
        </Flex>
      </Flex>
    </Flex>
  )
}
