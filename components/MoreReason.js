import { Flex, Heading, Text } from "@chakra-ui/layout";
import { moreReason } from "contents";
const MoreReason = () => (
  <Flex w="100%" flexDir="column" alignItems="center" bgColor="#f2f4f8;">
    <Flex
      w="100%"
      maxW="1330px"
      p={["80px 15px", "80px 45px", "180px 45px", "220px 45px"]}
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      <Heading
        bgGradient="linear(to-r, #01dcc8 0%, #3adb91 100%)"
        bgClip="text"
        fontSize={["3em", "3em", "6xl", "7xl"]}
        fontWeight="medium"
        mb={["20px"]}
      >
        {moreReason.title}
      </Heading>
      <Text
        w={["95%", "95%", "70%", "70%"]}
        fontSize={["24px", "24px", "24px", "30px"]}
        fontWeight="500"
      >
        {moreReason.description}
      </Text>
    </Flex>
  </Flex>
);

export default MoreReason;
