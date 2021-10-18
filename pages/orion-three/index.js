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
import HeroOrionThree from 'components/HeroOrionThree'

export default function Home() {
  return (
    <Layout>
      <SEO />
      <HeroOrionThree />
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
