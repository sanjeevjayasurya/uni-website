import Styled from '@emotion/styled'

const Container = Styled.div`
	position: relative;
	display: flex;
	overflow: hidden;
	height: 100vh;
	justify-content: center;
	align-items: center;
	background-color: #000;
	opacity: 1;

	background-image: url("/images/landing_hero_desktop.png");
	background-position: 65% 0%;
	background-size: cover;
	background-repeat: no-repeat;

	@media screen and (max-width: 479px) {
		background-image: url("/images/landing_hero_mobile.png");
		background-position: 50% 50%;
		background-size: contain;
	}
`

const ContentWrapper = Styled.div`
	display: flex;
	width: 100vw;
	height: 100vh;
	max-width: none;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 767px) {
		overflow: visible;
		height: 550px;
		justify-content: center;
		align-items: flex-start;
	}

	@media screen and (max-width: 479px) {
		height: auto;
		max-width: none;
		padding-bottom: 0px;
	}
}
`

const Content = Styled.div`
	display: flex;
	width: 100%;
	max-width: 1330px;
	padding-right: 30px;
	padding-left: 30px;
	justify-content: space-between;
	align-items: center;

	@media screen and (max-width: 767px) {
		overflow: hidden;
		width: 100vw;
		padding-right: 25px;
		padding-left: 25px;
		flex-direction: column;
	}
`

const LandingContent = Styled.div`
	position: relative;

	@media screen and (max-width: 991px) {
		width: auto;
		margin-top: 100px;
		padding-left: 20px;
	}
	
	@media screen and (max-width: 767px) {
		position: absolute;
		left: 0%;
		top: auto;
		right: 0%;
		bottom: 0%;
		display: flex;
		margin-top: 0px;
		margin-left: 0px;
		padding: 30px 25px 40px;
		flex-direction: column;
		align-items: flex-start;
		background-image: linear-gradient(180deg, transparent, #000 57%);
	}
`

export const LandingHero = ({ children }) => {
  return (
    <Container>
      <ContentWrapper>
        <Content>
          <LandingContent>{children}</LandingContent>
        </Content>
      </ContentWrapper>
    </Container>
  )
}
