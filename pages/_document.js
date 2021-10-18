import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'

import { GTM_ID } from 'lib/gtm'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <link
            rel="preload"
            href="/fonts/Matter-Medium.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
          {/* <!-- [if lt IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js" type="text/javascript"></script><![endif] --> */}
        </Head>
        <body style={{ margin: '0 !important', padding: '0 !important' }}>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                const sScriptSrc = "https://onelink-uni.s3.ap-south-1.amazonaws.com/onelink.js"
                loadScript(sScriptSrc);

                function loadScript(sScriptSrc) {
                    var oHead = document.getElementsByTagName("HEAD")[0];
                    var oScript = document.createElement('script');
                    oScript.type = 'text/javascript';
                    oScript.src = sScriptSrc;
                    oHead.appendChild(oScript);
                    oScript.onload = loadedCallback;
                }

                function loadedCallback() {
                  console.log('onelink-init')
                    
                  const onelinkGenerator =  new window.AF.OneLinkUrlGenerator(
                    {
                    oneLinkURL: "https://unicards.onelink.me/KRuW/",
                    pidKeysList: ['utm_source'],
                    campaignKeysList: ['utm_campaign'],
                    gclIdParam: 'glcid'
                  });
                  onelinkGenerator.setCustomParameter("utm_medium","utm_medium");
                  onelinkGenerator.setCustomParameter("utm_content","utm_content");
                  onelinkGenerator.setCustomParameter("utm_term","utm_term");
                
                  const url = onelinkGenerator.generateUrl();

                  // onelink is generated
                    if (url) {
                      // header button
                        const headerButton = document.querySelector('.google-btn-3')
                        if(headerButton) headerButton.setAttribute("href", url)

                      // footer button  
                        const footerButton = document.querySelector('.google-btn-2')
                        if(footerButton) footerButton.setAttribute("href", url)
                        
                        console.log('onelink-smart-script success');
                        console.log('onelink-dynamic-url:');
                        console.log(url);
                    } else {
                      console.log('onelink-smart-script failed');
                  }
                }`,
            }}
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `(function() {
              window.onload = (event) => {
                const queryString = new URL(window.location).search
            
                document.querySelectorAll('.apply_btn').forEach((link) => {
                  if (link.href &&
                    (link.href.startsWith('/') ||
                    link.href.startsWith('.') ||
                    (link.href.startsWith('http') &&
                    link.href.includes(window.location.hostname)))
                  ) {
                    var current = link.href
                    link.href = current + queryString
                  }
                })
              }
            })();`,
            }}
          />
          {/* Make Color mode to persists when you refresh the page. */}
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
