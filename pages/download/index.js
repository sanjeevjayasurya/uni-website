import { Button } from '@chakra-ui/react'

import {
  SEO,
  About,
  Layout,
  Visa,
  OpenForBeta,
  LandingHero,
  HeroTitle,
  HeroSubtitle,
  Message,
  AboutForm,
} from 'components'
import { CardFeatures } from 'components/CardFeatures'
import { landingHero } from 'contents/landingHero'

export default function DownloadPage() {
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
        <Button
          as="a"
          w="200px"
          h="56px"
          fontSize="15px"
          variant="outline"
          p="0px"
          mb={['20px', '0', '0', '0']}
          bgColor="#fff"
          color='#000'
          fontWeight='600'
          target={`_blank`}
          href={landingHero.downloadLink}
          className="google-btn-3"
          _hover={{ bg  : '#45454a', color: '#00dcc8' }}
        >
          {landingHero.downloadLabel}
        </Button>
      </LandingHero>
      <OpenForBeta showCaption={false} />
      <CardFeatures />
      <Visa showDetails={false} />
      <About isDark />
      <AboutForm formName="download"/>
    </Layout>
  )
}
