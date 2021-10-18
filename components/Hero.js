import { useState, useEffect, useRef } from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/layout'
import styled from '@emotion/styled'

import { Message, Button, VideoModal, useMediaQuery } from 'components'
import { hero } from '../contents'
import style from './Hero.module.css'
const { title, subtitle, actions } = hero

const Video = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: -2;
`

const MuteButtonContainer = styled.div`
  position: absolute;
  z-index: 100;
  width: 100%;
  height: calc((100% - 80px));

  div {
    width: 100%;
    height: 100%;
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 20px;

    @media screen and (max-width: 765px) {
      flex-direction: row;
      align-items: flex-start;
    }
  }
`

const MuteUnmuteButton = ({ toggleAudio, isMuted, ...props }) => (
  <button onClick={toggleAudio} {...props}>
    <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle
        cx="20"
        cy="20"
        r="19.75"
        fill="#000"
        fillOpacity=".47"
        stroke="url(#a)"
        strokeWidth=".5"
      />

      {!isMuted ? (
        <>
          <path
            d="M23.535 16.466a5 5 0 0 1 0 7.072m2.829-9.9a9 9 0 0 1 0 12.728m-12.778-3.364H12a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h1.586l4.707-4.707c.63-.63 1.707-.184 1.707.707v14c0 .89-1.077 1.337-1.707.707l-4.707-4.707Z"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient
              id="a"
              x1="45"
              y1="-11"
              x2="-8.5"
              y2="23.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6FFCC9" />
              <stop offset="1" stopColor="#FCFCFC" stopOpacity=".2" />
            </linearGradient>
          </defs>
        </>
      ) : (
        <>
          <path
            d="m25 22.002 2-2m0 0 2-2m-2 2-2-2m2 2 2 2m-15.414 1H12a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h1.586l4.707-4.707c.63-.63 1.707-.184 1.707.707v14c0 .89-1.077 1.337-1.707.707l-4.707-4.707Z"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient
              id="a"
              x1="45"
              y1="-11"
              x2="-8.5"
              y2="23.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF685F" />
              <stop offset="1" stopColor="#FCFCFC" stopOpacity=".2" />
            </linearGradient>
          </defs>
        </>
      )}
    </svg>
  </button>
)

const Hero = () => {
  const [openModal, setOpenModal] = useState(false)
  const [isMuted, setMuted] = useState(true)
  const [loadVideo, setLoadVideo] = useState(false)
  const vidRef = useRef(null)

  const isMobile = useMediaQuery('(max-width: 765px)')

  const triggerAction = (action) => () => {
    if (action) {
      setOpenModal(true)
      setMuted(true)
    }
  }

  const toggleModal = () => setOpenModal((v) => !v)

  const toggleAudio = () => {
    setMuted((v) => !v)
  }

  useEffect(() => {
    setTimeout(() => {
      setLoadVideo(true)
    }, 10)
  }, [])

  useEffect(() => {
    if (vidRef && vidRef.current) {
      vidRef.current.load()
    }
  }, [isMobile])

  return (
    <Flex
      id="hero"
      w="100%"
      h="100vh"
      bgColor="black"
      zIndex="0"
      color="white"
      position="relative"
      alignItems={['flex-end', 'flex-end', 'center', 'center']}
      justifyContent={['flex-end', 'flex-end', 'normal', 'normal']}
    >
      <div
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          zIndex: 0,
          paddingTop: 80,
        }}
      >
        <div
          className={style.original}
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            zIndex: 2,
          }}
        ></div>
        <div
          className={style.videoBackground}
          style={{
            position: 'absolute',
            height: 'calc((100% - 80px))',
            width: '100%',
          }}
        ></div>

        {loadVideo ? (
          <>
            <MuteButtonContainer>
              <div>
                <MuteUnmuteButton
                  toggleAudio={toggleAudio}
                  isMuted={isMuted}
                  style={{ borderColor: isMuted ? '#FB7A7A' : '#51d27d' }}
                />
              </div>
            </MuteButtonContainer>
            <Video
              autoPlay
              loop
              muted={isMuted}
              playsInline
              disablePictureInPicture
              ref={vidRef}
            >
              <source
                src={`/videos/samurai/${isMobile ? 'mobile' : 'desktop'}.webm`}
                type="video/webm"
              />
              <source
                src={`/videos/samurai/${isMobile ? 'mobile' : 'desktop'}.mp4`}
                type="video/mp4"
              />
            </Video>
          </>
        ) : null}
      </div>

      <Box
        w="100%"
        maxW="1330px"
        zIndex="1"
        margin={['0px 0px 30px', '0px 0px 30px', 'auto', 'auto']}
      >
        <Flex p={['0 15px', '0 15px', '0 30px']} flexDir="column" h="100%">
          <Heading
            as="h1"
            fontSize={['36px', '36px', '40px', '7xl']}
            fontWeight="500"
            display={['block', 'block', 'block', 'block']}
            className={style.heading}
          >
            <Message message={title} />
          </Heading>
          <Text
            fontSize={['lg', 'lg', 'lg', 'xl']}
            mt="20px"
            mb={['35px', '35px', '48px', '48px']}
          >
            <Message message={subtitle} />
          </Text>

          <Flex className="hero-actions">
            {actions.map(({ label, type, link, action = '', ...props }) => (
              <Button
                as="a"
                color="black"
                h={['52px', '58px', '58px', '64px']}
                fontSize={['16px', '15px', '14px', '18px']}
                margin="4px 20px 0 0"
                fontWeight="500"
                zIndex="100"
                href={link}
                key={label}
                onClick={triggerAction(action)}
                {...props}
              >
                {label}
              </Button>
            ))}
          </Flex>
        </Flex>
      </Box>

      {openModal ? <VideoModal onClose={toggleModal} /> : null}
    </Flex>
  )
}

export default Hero
