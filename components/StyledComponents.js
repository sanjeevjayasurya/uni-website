import { Button as ButtonComponent } from '@chakra-ui/react'
import Styled from '@emotion/styled'

export const Button = Styled(ButtonComponent)`
	padding: 12px 16px;
	border-radius: 6px;
`
export const HeroTitle = Styled.h1`
	color: #fff;
	font-weight: 700;
	font-size: 72px;

	@media screen and (max-width: 991px) {
		font-size: 40px;
	}

	@media screen and (max-width: 767px) {
		font-size: 30px;
	}
`

export const HeroSubtitle = Styled.div`
	position: relative;
	z-index: 4;
	margin-top: 30px;
	margin-right: 0px;
	margin-bottom: 48px;
	justify-content: flex-start;
	color: #8d8d95;
	font-size: 19px;
	line-height: 140%;
	font-weight: 400;
	width: 70vw;
	max-width: 460px;

	@media screen and (max-width: 991px) {
		margin-bottom: 30px;
		z-index: 5;
		margin-top: 20px;
		color: #d5d5da;
		font-size: 18px;
		line-height: 150%;
	}

	@media screen and (max-width: 767px) {
		font-size: 16px;
	}
`

// Use prop for color and margin
export const Divider = Styled.div`
	width: 100%;
	height: 0.5px;
	margin-bottom: 80px;
	background-color: #8d8d95; 
	opacity: 0.5;
}
`
export const AnimationComponentDivider = Styled.hr`
	width: 80%;
	height: 0.8px; 
	background-color: #4E5460;
	margin: auto;
	@media only screen and (max-width: 480px){
		width: 90%;
	}
`
