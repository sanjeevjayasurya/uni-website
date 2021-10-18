import { useEffect } from 'react'
import { Text } from '@chakra-ui/layout'
import { Box, Flex, Heading } from '@chakra-ui/react'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'

import {
  Container,
  MotionBox,
  MotionImage,
  MotionFlex,
  TagComponent,
} from 'components'

import { emis } from 'contents'
import { AnimationComponentDivider } from './StyledComponents'

const { status, title, description } = emis

export const SplitInEMI = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: false })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.75,
      },
    },
  }

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
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
            flexDirection={['column', 'column', 'row-reverse', 'row-reverse']}
            alignItems="center"
          >
            <MotionBox
              width={['100%', '100%', '50%']}
              pl={[0, 0, '38px', '185px']}
            >
              <TagComponent>{status}</TagComponent>
              <Heading fontWeight="500" py="16px" fontSize="28px">
                {title}
              </Heading>
              <Text fontWeight="300" width="75%">
                {description}
              </Text>
            </MotionBox>

            <MotionBox width={['100%', '100%', '50%']} pt="32px">
              <MotionFlex variants={container} animate={controls}>
                {['6', '9', '12', '18'].map((emi) => (
                  <MotionImage
                    key={emi}
                    src={`/images/${emi}.svg`}
                    alt={`${emi} months`}
                    width={['60px', '80px', '26%', '100%']}
                    pr="8px"
                    variants={item}
                  />
                ))}
              </MotionFlex>
            </MotionBox>
          </Flex>
        </Container>
      </MotionBox>
    </>
  )
}
