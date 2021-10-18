import { Header, Footer } from 'components'
import Styled from '@emotion/styled'

const StyledLayout = Styled.div`
  position: static;
  display: block;
  overflow: visible;
  width: 100%;
  max-width: 100vw;
`

export default function Layout({
  useWhiteHeader = false,
  showHeaderActions = true,
  children,
}) {
  return (
    <StyledLayout>
      <style global jsx>{`
        @media only screen and (max-width: 480px) {
          html {
            display: table;
          }
        }
      `}</style>

      {useWhiteHeader ? (
        <Header
          bgColor="white"
          buttonBgColor="black"
          showHeaderActions={showHeaderActions}
        />
      ) : (
        <Header showHeaderActions={showHeaderActions} />
      )}
      <main>{children}</main>
      <Footer />
    </StyledLayout>
  )
}
