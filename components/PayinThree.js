import { useEffect } from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'

import { Container, MotionBox, MotionImage, MotionFlex } from 'components'
import { payIn3 } from '../contents'
import { AnimationComponentDivider } from './StyledComponents'

export const PayinThree = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: false })

  const container = {
    hidden: { opacity: 0, x: '50%' },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 2,
      },
    },
  }

  const container3 = {
    hidden: { opacity: 0, x: '-50%' },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 2,
      },
    },
  }

  const payInthree = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 3,
      },
    },
  }

  const container2 = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 2.5,
      },
    },
  }

  const payInFull = {
    hidden: { opacity: 1 },
    show: {
      opacity: 0,
      transition: {
        delay: 1,
      },
    },
  }

  useEffect(() => {
    if (inView) {
      controls.start('show')
    }

    if (!inView) {
      controls.start('hidden')
    }
  }, [controls, inView])

  return (
    <>
      <MotionBox bg="black" padding="80px 0" color="white" ref={ref}>
        <Container>
          <Flex
            alignItems={['left', 'left', 'center', 'center']}
            flexDir="column"
          >
            <Heading as="h3"> {payIn3.title}</Heading>
            <Flex
              alignItems={['left', 'left', 'center', 'center']}
              flexDir="column"
              style={{
                color: 'hsla(0, 0%, 100%, 0.8)',
                margin: '20px 0px 40px 0px',
              }}
            >
              <Text fontSize="xl">{payIn3.description}</Text>
              <Text fontSize="xl">{payIn3.caption}</Text>
            </Flex>
          </Flex>

          <Flex alignItems="center" justifyContent="space-around">
            <MotionBox variants={container} animate={controls} id="pay-card-1">
              <MotionFlex>
                <MotionImage
                  height="95%"
                  paddingTop="14px"
                  position="absolute"
                  paddingLeft={['9px', '9px', '18px', '18px']}
                  src={`/images/bill_part1.svg`}
                  pr="20px"
                  alt="Bill part 1"
                />
                <MotionImage width="90%" src={`/images/card_bg.svg`} alt="" />
              </MotionFlex>
            </MotionBox>

            <MotionBox style={{ position: 'relative' }}>
              <MotionFlex>
                <MotionImage
                  variants={container2}
                  animate={controls}
                  height="95%"
                  paddingTop="14px"
                  position="absolute"
                  src={`/images/bill_part2.svg`}
                  pr="20px"
                  alt="Bill part 2"
                />
                <MotionImage
                  animate={controls}
                  variants={payInFull}
                  height="95%"
                  paddingTop="14px"
                  position="absolute"
                  src={`/images/bill_full.svg`}
                  pr="20px"
                  alt="Bill in full"
                />
                <MotionImage width="90%" src={`/images/card_bg.svg`} alt="" />
              </MotionFlex>
            </MotionBox>

            <MotionBox variants={container3} animate={controls}>
              <MotionFlex>
                <MotionImage
                  variants={payInthree}
                  animate={controls}
                  height="95%"
                  paddingTop="14px"
                  position="absolute"
                  src={`/images/bill_part3.svg`}
                  pr="20px"
                  alt="Bill part 3"
                />
                <MotionImage width="90%" src={`/images/card_bg.svg`} alt="" />
              </MotionFlex>
            </MotionBox>
          </Flex>
        </Container>
      </MotionBox>
    </>
  )
}
