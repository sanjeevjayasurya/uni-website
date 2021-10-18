import { Box } from '@chakra-ui/layout'
import { Image, Flex, Heading, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

import Fonts from './Fonts'

const About = dynamic(() => import('./About'))
const Footer = dynamic(() => import('./Footer'))
const Header = dynamic(() => import('./Header'))
const Hero = dynamic(() => import('./Hero'))
const Layout = dynamic(() => import('./Layout'))
const SEO = dynamic(() => import('./SEO'))
const MoreReason = dynamic(() => import('./MoreReason'))
const Transparency = dynamic(() => import('./Transparency'))
const Visa = dynamic(() => import('./Visa'))
const ScrollAnimation = dynamic(() => import('./ScrollAnimation'))

export * from './Container'
export * from './Message'
export * from './SplitIntoEMI'
export * from './Tag'
export * from './JoiningFees'
export * from './PayinThree'
export * from './Rewards'
export * from './OpenForBeta'
export * from './StyledComponents'
export * from './InputButton'
export * from './HeroFullBackground'
export * from './LandingHero'
export * from './Message'
export * from './AboutForm'
export * from './CouponAppliedModal'
export * from './ButtonCTA'
export * from './ApplyModal'
export * from './Logo'
export * from './icons'
export * from './VideoModal'
export * from './hooks'
export * from './Blog'

export const MotionBox = motion(Box)
export const MotionImage = motion(Image)
export const MotionFlex = motion(Flex)
export const MotionHeading = motion(Heading)
export const MotionText = motion(Text)

export {
  About,
  Fonts,
  Footer,
  Header,
  Hero,
  Layout,
  SEO,
  Transparency,
  MoreReason,
  Visa,
  ScrollAnimation,
}
