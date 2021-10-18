import Styled from '@emotion/styled'

import { Container } from './Container'

const Screen = Styled.div`
	width: 100vw;
	height: 100vh;
	background: #000;
	color: #fff;
`

const Content = Styled.div`
	display: flex;
	justify-content: space-between;
	height: 100vh;
	align-items: center;

	@media screen and (max-width: 640px) {
		flex-direction: column-reverse;
		justify-content: center;
		align-items: center;
	}
`

const Item = Styled.div`
	width: 40%;
	flex: 1;

	@media screen and (max-width: 640px) {
		width: 100%;
	}

`

export const TwoColumnLayout = ({ leftContent, rightContent, ...props }) => {
  return (
    <Screen>
      <Container {...props}>
        <Content>
          <Item>{leftContent}</Item>
          <Item>{rightContent}</Item>
        </Content>
      </Container>
    </Screen>
  )
}
