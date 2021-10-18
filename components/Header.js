import { useState, useEffect } from 'react'
import { Flex, Button, Box } from '@chakra-ui/react'
import Link from 'next/link'

import { Logo } from 'components'
import { header } from '../contents'

const { navs } = header
const MOBILE_WIDTH = 768

const NavStyle = {
  transition: 'background-color 300ms ease',
  willChange: 'backround-color',
}

const Header = ({ bgColor = 'black', showHeaderActions = true }) => {
  const [addBgColor, setAddBgColor] = useState(false)

  function handleScroll() {
    const { scrollY, innerHeight } = window

    if (scrollY > innerHeight * 1.5) {
      setAddBgColor(true)
    } else {
      setAddBgColor(false)
    }
  }

  useEffect(() => {
    if (window && window.innerWidth < MOBILE_WIDTH) {
      window.removeEventListener('scroll', handleScroll)
    } else {
      if (showHeaderActions) {
        window.addEventListener('scroll', handleScroll)
      }
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [showHeaderActions])

  return (
    <Flex
      as="header"
      position="fixed"
      width="100%"
      justifyContent="center"
      backgroundColor={bgColor}
      minH="80px"
      zIndex="15"
    >
      <Flex
        w="100%"
        maxW="1330px"
        padding={['0 32px', '0 32px', '0 45px']}
        alignItems="center"
        justifyContent="space-between"
      >
        <Link href="/" passHref>
          <Box
            width={['85px', '85px', '85px', '85px', '110px']}
            style={{ cursor: 'pointer' }}
          >
            <Logo isLight={bgColor !== 'white'} />
          </Box>
        </Link>

        {showHeaderActions ? (
          <>
            {navs.map(({ type, label, href, ...props }) => (
              <Button
                key={label}
                as={type === 'link' ? 'a' : 'button'}
                borderRadius="6px"
                backgroundColor={[
                  '#00c9b6',
                  '#00c9b6',
                  `${addBgColor ? 'rgb(0, 220, 200)' : '#ffffff'}`,
                ]}
                color={['#fff', '#fff', '#000']}
                fontWeight="500"
                fontSize={['15px', '15px', '17px']}
                height={['40px', '40px', '54px']}
                width={['120px', '120px', '160px']}
                lineHeight="1.4"
                _hover={{ fontWeight: 500 }}
                href={href}
                style={NavStyle}
                {...props}
              >
                {label}
              </Button>
            ))}
          </>
        ) : null}
      </Flex>
    </Flex>
  )
}

export default Header
