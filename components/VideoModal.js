import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Button,
  AspectRatio,
} from '@chakra-ui/react'
import Styled from '@emotion/styled'

const StyledModalOverlay = Styled(ModalOverlay)`
  width: 100% !important;
  height: 100% !important;
  background: rgba(0,0,0,0.8);
`

const StyledIFrame = Styled.iframe`
	width: 100%;
`

const StyledContent = Styled(ModalContent)`
	width: 100%;
	margin: 0;
	position: relative;
	padding-top: 40px;
	background: #000;
`

const ActionButton = Styled(Button)`
	width: 80px;
	position: absolute;
	right: 20px;
	top: 0;
	color: #fff;
	background: transparent;
	z-index: 1000;
	font-size: 20px;
	outline: none;
  transition: all 0.5s ease-in;

	&:hover {
		background: transparent;
	}

  @media screen and (max-width: 640px) {
    font-size: 16px;
    width: 54px;
    height: 32px;
  }
`

const StyledBody = Styled(ModalBody)`
	padding: 0;
`

export function VideoModal({ onClose }) {
  return (
    <Modal
      isOpen
      isCentered
      size="6xl"
      motionPreset="slideInBottom"
      onClose={onClose}
    >
      <StyledModalOverlay />
      <StyledContent>
        <ActionButton onClick={onClose}>Close X</ActionButton>
        <StyledBody>
          <AspectRatio ratio={16 / 9}>
            <StyledIFrame
              src="https://www.youtube.com/embed/QtGpZ7mbpyU"
              title="Win the battle with Uni card | The Ultimate Weapon"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></StyledIFrame>
          </AspectRatio>
        </StyledBody>
      </StyledContent>
    </Modal>
  )
}
