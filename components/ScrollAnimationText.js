import { Text } from '@chakra-ui/react'
import style from './ScrollAnimation.module.css'

export const ScrollAnimationtext = ({ children, id, ...rest}) => {
  return (
    <Text
      as="h1"
      id={id}
      fontSize={['28px', '4.6vw', '4.6vw', '4.3vw', '4.3vw', '3vw']}
      className={`${style.text} ${style.h1}`}
      {...rest}
    >
      {children}
    </Text>
  )
}

export const GradientText = ({ children, id, ...rest }) => {
  return (
    <Text
      as="h1"
      id={id}
      fontSize={['28px', '4.6vw', '4.6vw', '4.6vw', '4.6vw', '3vw']}
      className="uni-gradient-primary"
      fontWeight="700"
      lineHeight="110%"
      letterSpacing="-2px"
      mr="20px"
      {...rest}
    >
      {children}
    </Text>
  )
}
