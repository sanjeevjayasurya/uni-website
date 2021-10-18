import { useEffect, useRef } from 'react'
import { Flex, Text } from '@chakra-ui/layout'
import { Box, Image } from '@chakra-ui/react'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import { Container } from './Container'
import style from './ScrollAnimation.module.css'
import { spends } from '../contents'
import { GradientText, ScrollAnimationtext } from './ScrollAnimationText'

gsap.registerPlugin(ScrollTrigger)

const activeDot = {
  height: 30,
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
}

const inactiveDot = {
  height: 10,
  backgroundColor: 'hsla(0, 0%, 100%, 0.2)',
}

const { intro, emergency, groceries, fashion, party } = spends

export const ScrollAnimation = () => {
  const ref = useRef(null)

  useEffect(() => {
    const current = ref.current
    gsap.set(
      '#emergency-bill, #emergency-bill-img, #pay_in_3_static, #groceries, #groceries-img, #pay_in_3_static1, #for-fashion, #for-fashion-img, #pay_in_3_static2, #throw-party-text, #throw-party-img',
      { opacity: 0 }
    )
    gsap.set(
      '#emergency-bill-img, #groceries-img, #for-fashion-img, #throw-party-img',
      { y: 100 }
    )

    const tl = gsap.timeline({
      defaults: { ease: 'expo.inOut' },
      scrollTrigger: {
        trigger: current.querySelector('#scroll_container'),
        toggleActions: 'play none none reverse',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5,
        snap: 'labels',
      },
    })

    tl.add('groceries', 1)
      .to('#spend_anywhere', { opacity: 0 }, 'groceries')
      .to('#pay_in_3_part1', { opacity: 0 }, 'groceries')
      .to('#dot1', inactiveDot, 'groceries')
      .to('#dot2', activeDot, 'groceries')
      .to('#pay_in_3_static', { opacity: 1 }, 'groceries')
      .to('#groceries', { opacity: 1 }, 'groceries')
      .to('#groceries-img', { opacity: 1, y: 0 }, 'groceries')

      .add('emergency', 2)
      .to('#groceries', { opacity: 0 }, 'emergency')
      .to('#groceries-img', { opacity: 0 }, 'emergency')
      .to('#pay_in_3_static', { opacity: 0 }, 'emergency')
      .to('#dot2', inactiveDot, 'emergency')
      .to('#dot3', activeDot, 'emergency')
      .to('#pay_in_3_static1', { opacity: 1 }, 'emergency')
      .to('#emergency-bill', { opacity: 1 }, 'emergency')
      .to('#emergency-bill-img', { opacity: 1, y: 0 }, 'emergency')

      .add('fashion', 3)
      .to('#emergency-bill', { opacity: 0 }, 'fashion')
      .to('#emergency-bill-img', { opacity: 0 }, 'fashion')
      .to('#pay_in_3_static1', { opacity: 0 }, 'fashion')
      .to('#dot3', inactiveDot, 'fashion')
      .to('#dot4', activeDot, 'fashion')
      .to('#pay_in_3_static2', { opacity: 1 }, 'fashion')
      .to('#for-fashion', { opacity: 1 }, 'fashion')
      .to('#for-fashion-img', { opacity: 1, y: 0 }, 'fashion')

      .add('party', 4)
      .to('#pay_in_3_static2', { opacity: 0 }, 'party')
      .to('#for-fashion', { opacity: 0 }, 'party')
      .to('#for-fashion-img', { opacity: 0 }, 'party')
      .to('#dot4', inactiveDot, 'party')
      .to('#dot5', activeDot, 'party')
      .to('#throw-party-text', { opacity: 1 }, 'party')
      .to('#throw-party-img', { opacity: 1, y: 0 }, 'party')

      .add('end')
  }, [])

  return (
    <Flex bgColor="#0e0e0e" color="white" ref={ref} position="static">
      <div
        id="scroll_container"
        style={{
          position: 'relative',
          height: '500vh',
          padding: 15,
          margin: '0 auto',
          width: '100%',
        }}
      >
        <div
          style={{
            position: 'sticky',
            top: 0,
            height: '100vh',
          }}
        >
          <div className={style['pagination-container']}>
            <div className={style['slider-pagination']}>
              <div
                id="dot1"
                className={`${style.dot} ${style.dot1}`}
                style={{ willChange: 'background, width, height' }}
              ></div>
              <div
                id="dot2"
                className={`${style.dot} ${style.dot2}`}
                style={{ willChange: 'background, width, height' }}
              ></div>
              <div
                id="dot3"
                className={`${style.dot} ${style.dot3}`}
                style={{ willChange: 'background, width, height' }}
              ></div>
              <div
                id="dot4"
                className={`${style.dot} ${style.dot4}`}
                style={{ willChange: 'background, width, height' }}
              ></div>
              <div
                id="dot5"
                className={`${style.dot} ${style.dot5}`}
                style={{ willChange: 'background, width, height' }}
              ></div>
            </div>
          </div>
          <Box>
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              alignContent="center"
              height="100vh"
              position="static"
            >
              <Text
                as="h1"
                id="spend_anywhere"
                fontSize={['32px', '5vw', '4.6vw', '4.6vw', '4.6vw', '3vw']}
                textAlign="center"
                lineHeight="110%"
                mb={['18px', '20px', '20px']}
              >
                {intro.title}
              </Text>
              <GradientText id="pay_in_3_part1">Pay 1/3rd</GradientText>
            </Flex>
          </Box>

          <Container>
            <Flex
              flexDirection={['column', 'row', 'row', 'row']}
              justifyContent="center"
              alignItems="center"
              height="100vh"
              className={style.section}
            >
              <GradientText id="pay_in_3_static">Pay 1/3rd</GradientText>

              <ScrollAnimationtext id="groceries">
                {groceries.title}
              </ScrollAnimationtext>
              <Image
                id="groceries-img"
                src={groceries.bgImg}
                position="absolute"
                alt="Grocery bag"
                height="400px"
                width="400px"
                loading="lazy"
              />
            </Flex>
          </Container>

          <Container>
            <Flex
              flexDirection={['column', 'row', 'row', 'row']}
              justifyContent="center"
              alignItems="center"
              height="100vh"
              className={style.section}
            >
              <GradientText id="pay_in_3_static1">Pay 1/3rd</GradientText>
              <ScrollAnimationtext id="emergency-bill">
                {emergency.title}
              </ScrollAnimationtext>
              <Image
                id="emergency-bill-img"
                src={emergency.bgImg}
                alt="Bill with POS"
                position="absolute"
                height="400px"
                width="400px"
                loading="lazy"
              />
            </Flex>
          </Container>

          <Container>
            <Flex
              flexDirection={['column', 'row', 'row', 'row']}
              justifyContent="center"
              alignItems="center"
              height="100vh"
              className={style.section}
            >
              <GradientText id="pay_in_3_static2">Pay 1/3rd</GradientText>
              <ScrollAnimationtext id="for-fashion">
                {fashion.title}
              </ScrollAnimationtext>
              <Image
                id="for-fashion-img"
                src={fashion.bgImg}
                alt="Shoping Bag"
                position="absolute"
                height="530px"
                width="530px"
                loading="lazy"
              />
            </Flex>
          </Container>

          <Container>
            <Flex
              justifyContent="center"
              alignItems="center"
              height="100vh"
              className={style.section}
            >
              <GradientText
                zIndex="2"
                textAlign="center"
                id="throw-party-text"
                fontSize={['28px', '4.6vw', '4.6vw', '3.5vw', '3.5vw', '3vw']}
              >
                Or even throw a party &#38; just <br />
                Pay 1/3rd every month.
              </GradientText>
              <Image
                id="throw-party-img"
                src={party.bgImg}
                alt="part Glasses"
                position="absolute"
                height="400px"
                width="400px"
                loading="lazy"
              />
            </Flex>
          </Container>
        </div>
      </div>
    </Flex>
  )
}

export default ScrollAnimation
