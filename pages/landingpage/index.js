import dynamic from 'next/dynamic'

import {
  SEO,
  About,
  Layout,
  Visa,
  OpenForBeta,
  LandingHero,
  HeroTitle,
  HeroSubtitle,
  InputButton,
  Message,
  AboutForm,
} from 'components'
import { CardFeatures } from 'components/CardFeatures'
import { landingHero } from 'contents/landingHero'

export default function LandingPage() {
  return (
    <Layout showHeaderActions={false}>
      <SEO />
      <LandingHero>
        <HeroTitle>
          <Message message={landingHero.title} />
        </HeroTitle>
        <HeroSubtitle>
          <Message>{landingHero.subtitle}</Message>
        </HeroSubtitle>
        <InputButton formName="landing_page" variant="dark" />
      </LandingHero>
      <OpenForBeta showCaption={false} />
      <CardFeatures />
      <Visa showDetails={false} />
      <About isDark />
      <AboutForm formName="landing_page"/>
    </Layout>
  )
}
