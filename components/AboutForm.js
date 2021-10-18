import { Box, Flex } from '@chakra-ui/react'

import { Divider, InputButton } from 'components'

export const AboutForm = ({ formName }) => {
  return (
    <Box bg="#000">
      <Flex
        textAlign="center"
        w="auto"
        maxW="1270px"
        p={['0 15px 60px', '0 15px 80px', '0 15px 120px']}
        flexDirection="column"
        alignItems="center"
        margin="auto"
      >
        <Divider />
        <Flex maxW="540px">
          <InputButton formName={formName} variant="dark" />
        </Flex>
      </Flex>
    </Box>
  )
}
