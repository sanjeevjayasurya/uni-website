import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
    @font-face {
      font-family: 'Matter';
      src: local('Matter'),
        url('/fonts/Matter-Bold.woff2') format('woff2'),
        url('/fonts/Matter-Bold.woff') format('woff'),
        url('/fonts/Matter-Bold.otf') format('opentype');
      font-weight: 700;
      font-display: swap;
    }
  
    @font-face {
      font-family: 'Matter';
      src: local('Matter'),
        url('/fonts/Matter-Medium.woff2') format('woff2'),
        url('/fonts/Matter-Medium.woff') format('woff'),
        url('/fonts/Matter-Medium.otf') format('opentype');
      font-weight: 500;
      font-display: swap;
    }
  
    @font-face {
      font-family: 'Matter';
      src: local('Matter'),
        url('/fonts/Matter-Regular.woff2') format('woff2'),
        url('/fonts/Matter-Regular.woff') format('woff'),
        url('/fonts/Matter-Regular.otf') format('opentype');
      font-weight: 400;
      font-display: swap;
    }
    `}
  />
)
export default Fonts
