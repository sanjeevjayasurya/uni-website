import { Box, Flex, Heading, Text } from '@chakra-ui/layout'
import { chakra } from '@chakra-ui/system'
import { Tabs, TabList, TabPanels, TabPanel } from '@chakra-ui/tabs'
import React from 'react'
import { useTab } from '@chakra-ui/tabs'
import { reasonToLove } from 'contents'
import { Message } from './Message'
import { MotionImage, MotionHeading, MotionText } from 'components'

const { statuses } = reasonToLove

const Transparency = () => {
  const [tabIndex, setTabIndex] = React.useState(0)
  const StyledTab = chakra('button', { themeKey: 'Tabs.Tab' })

  // eslint-disable-next-line react/display-name
  const CustomTab = React.forwardRef((props, _ref) => {
    const tabProps = useTab(props)
    const isSelected = !!tabProps['aria-selected']
    return (
      <StyledTab {...tabProps}>
        <Box
          bgColor={isSelected ? 'white' : 'gray'}
          height="4px"
          width="58px"
          borderRadius="5px"
          mr="20px"
          transition="background-color 250ms ease"
        ></Box>
        {tabProps.children}
      </StyledTab>
    )
  })

  return (
    <Tabs
      onChange={(index) => setTabIndex(index)}
      size="sm"
      defaultIndex={0}
      variant="unstyled"
      isLazy={true}
      h="auto"
      w="100%"
      bg="black"
    >
      <Flex
        justifyContent="center"
        p={[
          '80px 15px 50px',
          '80px 15px 50px',
          '120px 45px 60px',
          '200px 29px 100px',
        ]}
        color="white"
        textAlign={['center', 'center', 'left']}
        alignItems={['center', 'center', 'flex-start', 'flex-start']}
        maxW="1270px"
        margin="auto"
        h={['700px', '700px', '500px', '700px']}
        id="transparency"
        flexDir={['column', 'column', 'row']}
      >
        <Box
          w={['', '', '80%', '50%']}
          minH={['250px', '250px', '250px', '285px']}
          maxH={['', '', '250px', '320px']}
          position="relative"
        >
          <TabPanels>
            {statuses.map((status, index) => {
              return (
                <TabPanel
                  key={index}
                  p={['', '', '0px']}
                  h={['150px', '150px', '', '']}
                >
                  <MotionHeading
                    as="h2"
                    w={['100%', '90%']}
                    fontSize={['36px', '36px', '50px', '64px']}
                    fontWeight="500"
                    lineHeight="1"
                    m={[
                      'auto auto 20px auto',
                      'auto auto 20px auto',
                      '0 0 20px 0',
                    ]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                  >
                    {status.title}
                  </MotionHeading>

                  <MotionText
                    w={['100%', '100%', '80%']}
                    m={[
                      '0px auto 30px',
                      '0px auto 30px',
                      '0px 0px 50px 0px',
                      '0px 0px 50px 0px',
                    ]}
                    color="gray"
                    fontSize={['18px', '18px', '18px', '18px']}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                  >
                    <Message message={status.message} />
                  </MotionText>
                </TabPanel>
              )
            })}
          </TabPanels>
          <TabList
            justifyContent={['center', 'center', 'left']}
            position={['', '', 'absolute']}
            left="0"
            bottom="0"
            m={['20px 0px']}
          >
            <CustomTab name="transparency-tab1"></CustomTab>
            <CustomTab name="transparency-tab2"></CustomTab>
            <CustomTab name="transparency-tab3"></CustomTab>
          </TabList>
        </Box>
        <Box>
          <TabPanels
            h={['250px', '250px', '', '']}
            p="0"
            alignContent="center"
            justifyContent="center"
          >
            {statuses.map((status) => {
              return (
                <TabPanel p="0" key={status.title}>
                  <MotionImage
                    margin="auto"
                    p="0"
                    w={['200px', '200px', '300px']}
                    h="auto"
                    src={status.img}
                    transform="scale(1.1)"
                    alt=""
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    loading="lazy"
                  ></MotionImage>
                </TabPanel>
              )
            })}
          </TabPanels>
        </Box>
      </Flex>
    </Tabs>
  )
}

export default Transparency
