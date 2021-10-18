import { useEffect } from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'

import { Container, MotionBox, MotionImage } from 'components'
import { rewards } from 'contents'
import { AnimationComponentDivider } from './StyledComponents'

export const Rewards = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: false })

  const container1 = {
    hidden: { opacity: 1 },
    show: {
      opacity: 0,
      transition: {
        duration: 1.5,
      },
    },
  }
  const container2 = {
    hidden: {
      opacity: 1,
      marginLeft: '1%',
      marginTop: '1%',
    },
    show: {
      opacity: 0,
      marginLeft: '0%',
      marginTop: '0%',
      transition: {
        duration: 1.5,
      },
    },
  }
  const container3 = {
    hidden: {
      opacity: 1,
      marginLeft: '-1%',
      marginTop: '1%',
    },
    show: {
      opacity: 0,
      marginLeft: '0%',
      marginTop: '0%',
      transition: {
        duration: 1.5,
      },
    },
  }
  const payFull = {
    hidden: { opacity: 0, scale: 0 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1.5,
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
        <Container style={{ padding: '2em' }}>
          <Flex
            flexDirection={['column', 'column', 'column', 'row']}
            alignItems="center"
          >
            <Flex>
              <MotionBox width={['100%', '100%', '100%', '80%', '50%']}>
                <Heading as="h3"> {rewards.title}</Heading>
                <Flex
                  alignItems="center"
                  flexDir="column"
                  color="hsla(0, 0%, 100%, 0.8)"
                  margin="20px 0px 40px 0px"
                >
                  <Text fontSize="xl">{rewards.description}</Text>
                </Flex>
              </MotionBox>
            </Flex>
            <Flex>
              <MotionBox
                width={['100%']}
                padding={['12em 9em', '12em 9em', '21em 16em', '16em']}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <MotionImage
                  variants={payFull}
                  animate={controls}
                  height={['25em', '25em', '35em', '35em']}
                  position="absolute"
                  // TODO - replace with a svg image
                  src={`/images/confetti.png`}
                  loading="lazy"
                  alt=""
                />

                <MotionImage
                  variants={payFull}
                  animate={controls}
                  height={['16em', '16em', '22em', '22em']}
                  position="absolute"
                  src={`/images/gradient_circle.svg`}
                  loading="lazy"
                  alt=""
                />

                <MotionBox
                  style={{ position: 'absolute' }}
                  variants={payFull}
                  animate={controls}
                >
                  <Text fontSize="3xl" color="black">
                    <strong>
                      {rewards.rewardsPercent} <br /> {rewards.rewards}
                    </strong>
                  </Text>
                </MotionBox>

                <MotionImage
                  variants={container1}
                  animate={controls}
                  height={['15em', '15em', '20em', '20em']}
                  position="absolute"
                  src={`/images/top_chart.svg`}
                  alt=""
                />
                <MotionImage
                  variants={container2}
                  animate={controls}
                  height={['15em', '15em', '20em', '20em']}
                  position="absolute"
                  src={`/images/right_chart.svg`}
                  alt=""
                />
                <MotionImage
                  variants={container3}
                  animate={controls}
                  height={['15em', '15em', '20em', '20em']}
                  position="absolute"
                  src={`/images/left_chart.svg`}
                  alt=""
                />
              </MotionBox>
            </Flex>
          </Flex>
        </Container>
      </MotionBox>
    </>
  )
}
