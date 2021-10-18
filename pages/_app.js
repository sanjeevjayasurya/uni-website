import { useState, useEffect } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useRouter } from 'next/router'
import Script from 'next/script'

import Fonts from '../components/Fonts'
import theme from '../theme'
import { GTM_ID, pageview } from 'lib/gtm'

import '../style.css'

export function reportWebVitals(vitals) {
  const { id, name, label, value } = vitals

  if (label === 'web-vital' && window && window.dataLayer) {
    // Use `window.gtag` if you initialized Google Analytics as this example:
    // https://github.com/vercel/next.js/blob/canary/examples/with-google-analytics/pages/_document.js
    window.dataLayer.push({
      event: 'web-vitals',
      event_category: 'Web Vitals',
      page: location.pathname,
      name,
      value: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
      event_label: id, // id unique to current page load
      non_interaction: true, // avoids affecting bounce rate.
    })
  }
}

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeComplete', pageview)
    return () => {
      router.events.off('routeChangeComplete', pageview)
    }
  }, [router.events])

  const [queryClient] = useState(() => new QueryClient())

  return (
    <>
      {/* Google Tag Manager - Global base code */}
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${GTM_ID}');
          `,
        }}
      />
      <QueryClientProvider client={queryClient}>
        <ChakraProvider resetCSS theme={theme}>
          <Fonts />
          <Component {...pageProps} key={router.route} />
        </ChakraProvider>
      </QueryClientProvider>
    </>
  )
}

export default MyApp
