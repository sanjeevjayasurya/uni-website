// import React from 'react'
// import Layout from '../components/Layout'
// // import DynamicComponent from '../components/DynamicComponent'

// // import { useStoryblok } from '../utils/storyblok'

// export default function Page404({ preview }) {
//   const enableBridge = true // load the storyblok bridge everywhere
//   // const enableBridge = preview; // load only inside preview mode
//   // const storyLoaded = useStoryblok(null, enableBridge)

//   let content = <h1>Not found</h1>
//   // if (storyLoaded && storyLoaded.content)
//   //   content = <DynamicComponent blok={storyLoaded.content} />

//   return <Layout>{content}</Layout>
// }

// // export async function getStaticProps({ preview = false }) {
// //   return {
// //     props: {
// //       preview,
// //     },
// //   }
// // }

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
