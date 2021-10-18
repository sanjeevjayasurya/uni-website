import { Button } from '@chakra-ui/react'

export const ButtonCTA = ({ isDark = false, children, ...others }) => (
  <Button
    width="240px"
    h="56px"
    fontSize="15px"
    variant="outline"
    bgColor={isDark ? '#000' : '#fff'}
    color={isDark ? '#fff' : '#000'}
    fill={isDark ? '#fff' : '#000'}
    fontWeight="500"
    _hover={{ bg: '#45454a', color: '#00dcc8', fill: '#00dcc8' }}
    {...others}
  >
    {children}
  </Button>
)
