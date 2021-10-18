import Link from 'next/link'
import {
  SEO,
  Layout,
  HeroTitle,
  HeroSubtitle,
  HeroFullBackground,
} from 'components'

export default function ErrorPage() {
  return (
    <Layout showHeaderActions={false}>
      <SEO title="Uni Cards | 404 Page not found" />
      <HeroFullBackground noVideo>
        <HeroTitle>Page not found</HeroTitle>
        <HeroSubtitle>
          <h3 style={{ marginBottom: 16 }}>
            {`The page you are looking for doesn't exist or has been moved.`}
          </h3>
        <Link href="/" passHref>
            <span style={{ color: '#00dcc8', textDecoration: 'underline' }}>
              Home
            </span>
          </Link>
        </HeroSubtitle>
      </HeroFullBackground>
    </Layout>
  )
}
