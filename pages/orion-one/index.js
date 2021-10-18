import dynamic from 'next/dynamic'

import {
  SEO,
  Hero,
  About,
  Transparency,
  Layout,
  MoreReason,
  Visa,
  SplitInEMI,
  JoiningFees,
  PayinThree,
  Rewards,
  OpenForBeta,
  ScrollAnimation,
} from 'components'
import { HeroTemplateVertical } from 'components/HeroTemplateVertical'

export default function Home() {
  return (
    <Layout>
      <SEO />
      <HeroTemplateVertical />
      <OpenForBeta />
      <PayinThree />
      <Rewards />
      <SplitInEMI />
      <JoiningFees />
      <Visa />
      <ScrollAnimation />
      <MoreReason />
      <Transparency />
      <About />
    </Layout>
  )
}
