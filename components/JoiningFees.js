import { useEffect } from 'react'
import { Text } from '@chakra-ui/layout'
import { Flex, Heading, Box, Image } from '@chakra-ui/react'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'

import { Container, MotionBox, TagComponent, MotionImage } from 'components'
import { joiningFees } from 'contents'

import style from './JoiningFees.module.css'

const {
  status,
  title,
  description,
  images: { cover, banner },
} = joiningFees

export const JoiningFees = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: false })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
  }

  const bannerAnimation = {
    hidden: { opacity: 0, scale: 0, y: 50 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
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
    <MotionBox
      bg="black"
      padding="80px 0"
      color="white"
      ref={ref}
      height="860px"
      display="flex"
      alignItems="center"
    >
      <Container>
        <Flex
          flexDirection={['column', 'column', 'row', 'row']}
          alignItems="center"
        >
          <MotionBox
            width={['100%', '100%', '50%']}
            pl={[0, 0, '64px']}
            variants={container}
            animate={controls}
            display={['flex', 'flex', 'block']}
            flexDirection={['column', 'column', 'row']}
            justifyContent={['center', 'center', 'flex-start']}
            alignItems={['center']}
          >
            <TagComponent type="secondary">{status}</TagComponent>
            <Heading fontWeight="500" py="16px" fontSize="28px">
              {title}
            </Heading>
            <Text fontWeight="300" width={['75%', '60%', '75%']}>
              {description}
            </Text>
          </MotionBox>

          <Box
            className={style['image-container']}
            width={['100%', '100%', '40%']}
            display="flex"
            justifyContent="center"
            marginTop={['40px', '40px', 0]}
          >
            <Image
              src={cover}
              alt=""
              className={style.cover}
              width={['180px', '230px', '270px']}
              loading="lazy"
            />
            <MotionImage
              src={banner}
              alt="Joining banner"
              position="absolute"
              width={['160px', '200px', '220px']}
              top={['200px', '200px', '236px', '236px']}
              variants={bannerAnimation}
              animate={controls}
              loading="lazy"
            />
          </Box>
        </Flex>
      </Container>
    </MotionBox>
  )
}
