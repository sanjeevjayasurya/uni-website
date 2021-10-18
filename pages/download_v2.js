import { Button } from '@chakra-ui/react'

import {
  SEO,
  About,
  Layout,
  Visa,
  OpenForBeta,
  HeroTitle,
  HeroSubtitle,
  Message,
  AboutForm,
  HeroFullBackground,
} from 'components'
import { CardFeatures } from 'components/CardFeatures'
import { download } from 'contents/landingPages'

export default function DownloadPage() {

  return (
    <Layout showHeaderActions={false}>
      <SEO />
      <HeroFullBackground>
        <HeroTitle>
          <Message>{download.title}</Message>
        </HeroTitle>
        <HeroSubtitle>
          <Message>{download.subtitle}</Message>
        </HeroSubtitle>
        <Button
          as="a"
          width="240px"
          h="56px"
          fontSize="15px"
          variant="outline"
          bgColor="#fff"
          color="#000"
          fontWeight="500"
          target={`_blank`}
          href={download.href}
          _hover={{ bg: '#45454a', color: '#00dcc8' }}
        >
          {download.downloadLabel}
        </Button>
      </HeroFullBackground>

      <OpenForBeta showCaption={false} />
      <CardFeatures />
      <Visa showDetails={false} />
      <About isDark />
      <AboutForm formName="download_v2"/>
    </Layout>
  )
}
