import { useEffect, useState } from 'react'
import { Flex } from '@chakra-ui/react'
import { useRouter } from 'next/router'

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
  ButtonCTA,
  ApplyModal,
  CouponApplied,
} from 'components'
import { CardFeatures } from 'components/CardFeatures'
import { gpaylanding } from 'contents/landingPages'

export default function DownloadPage() {
  const router = useRouter()
  const { gpaycoupon } = router.query

  const [isCoupounApplied, setIsCoupounApplied] = useState(gpaycoupon)

  const [isApplyFormOpen, setIsApplyFormOpen] = useState(false)

  const toggleApplyForm = () => setIsApplyFormOpen((v) => !v)

  useEffect(() => {
    if (gpaycoupon) {
      setIsCoupounApplied(true)
    }
  }, [gpaycoupon])

  const toggleAppliedCoupon = () => {
    setIsCoupounApplied((v) => !v)
  }

  return (
    <Layout showHeaderActions={false}>
      <SEO />
      {isApplyFormOpen ? <ApplyModal onClose={toggleApplyForm} /> : null}
      <HeroFullBackground>
        <HeroTitle>
          <Message>{gpaylanding.title}</Message>
        </HeroTitle>
        <HeroSubtitle>
          <Message>{gpaylanding.subtitle}</Message>

          <Flex
            wrap="wrap"
            mt={8}
            justifyContent="center"
            alignItems="center"
            flexDirection={['column', 'column', 'row']}
          >
            <ButtonCTA
              width={200}
              mr={[0, 0, '16px']}
              mb={['16px', '16px', 0]}
              onClick={toggleApplyForm}
            >
              {gpaylanding.redeemLabel}
            </ButtonCTA>
            {/* <ButtonCTA as="a" isDark width={200} href="#openForBeta">
              {gpaylanding.learnMoreLabel}
            </ButtonCTA> */}
          </Flex>
        </HeroSubtitle>
      </HeroFullBackground>

      {isCoupounApplied ? (
        <CouponApplied onClose={toggleAppliedCoupon} />
      ) : null}

      <OpenForBeta showCaption={false} id="openForBeta" />
      <CardFeatures />
      <Visa showDetails={false} />
      <About isDark />
      <AboutForm formName="gpay_landing" />
    </Layout>
  )
}
