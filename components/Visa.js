import { Text, Heading } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

import { visa } from 'contents'
import { MotionBox, MotionFlex, TagComponent } from 'components'
import { Message } from './Message'

const Visa = ({ showDetails = true }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true })

  const container1 = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0.5,
      },
    },
  }

  const container2 = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
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
    <MotionBox
      w="100%"
      bg="#f2f4f8"
      ref={ref}
    >
      <MotionFlex
        flexDir="column"
        margin="auto"
        w="100%"
        maxW="1330px"
        p={['80px 15px', '80px 15px', '100px 45px 140px', '140px 15px']}
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <MotionBox>
          <Text mb={['24px']} fontSize={['16px']} color="#8D8D95">
            {visa.topText}
          </Text>
          <Image
            margin="auto"
            src="/images/visa.svg"
            alt="visa logo"
            mb={['24px']}
            w={['75px','75px','110px','150px']}
            loading='lazy'
          />
          <Heading
            fontSize={['22px', '26px', '26px', '32px']}
            fontWeight={700}
            mb={['24px']}
            w={['85%', '85%', '70%']}
            m="0px auto 24px"
          >
            <Message as="p" message={visa.heading} />
          </Heading>
        </MotionBox>

        {showDetails ? (
          <MotionFlex
            margin={['80px auto 19px', '80px auto 19px', '80px auto 19px']}
            flexDir={['column', 'column', 'row']}
            w="100%"
          >
            <MotionFlex
              w={['auto', 'auto', '50%', '40%']}
              justifyContent={['center', 'center', 'space-around', 'flex-end']}
              variants={container1}
              animate={controls}
            >
              <Image
                src="/images/ScanQR.svg"
                alt="QR Code"
                w={['160px', '160px', '170px', '260px']}
                h={['auto']}
                loading='lazy'
              />
            </MotionFlex>
            <MotionFlex
              textAlign={['center', 'center', 'left', 'left']}
              justifyContent={['center', 'center', 'center', 'flex-start']}
              mt={['50px']}
              marginLeft={['0px', '0px', '0px', '110px']}
              flexDir="column"
              w={['auto', 'auto', '50%']}
              variants={container2}
              animate={controls}
            >
              <MotionBox>
                <TagComponent type="primary">{visa.comingSoon}</TagComponent>
              </MotionBox>
              <MotionBox>
                <Heading
                  as="h3"
                  mb={['15px']}
                  fontSize={['26px', '26px', '26px', '32px']}
                  w={['auto', 'auto', 'auto', '80%']}
                  fontWeight='500'
                >
                  {visa.scan}
                </Heading>
              </MotionBox>
              <Text
                m={['0px auto 40px', '0px auto 40px', '0px 0px 40px']}
                fontSize={['18px']}
                w={['100%', '70%', 'auto', '80%']}
              >
                {visa.feature}
              </Text>
            </MotionFlex>
          </MotionFlex>
        ) : null}
      </MotionFlex>
    </MotionBox>
  )
}

export default Visa
