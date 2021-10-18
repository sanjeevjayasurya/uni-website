import Styled from '@emotion/styled'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
} from '@chakra-ui/react'

import { couponApplied } from 'contents/modal'

const StyledModalContent = Styled(ModalContent)`
	width: 90vw;
	max-width: 365px;
	padding: 40px;

  @media screen and (max-width: 480px) {
    padding: 24px;
  }

	header {
		padding: 0;
		
		 span {
			font-size: 1.875rem;
			line-height: 1.2;

			@media (max-width: 479px) {
				font-size: 1.5rem;
			}
		}
	}
`

const StyledModalBody = Styled(ModalBody)`
	padding: 10px 0;
	color: #8D8D95;
	font-size: 18px;
	line-height: 21.5px;
`

const StyledModalFooter = Styled(ModalFooter)`
	justify-content: center;
	padding: 0;
	padding-top:16px
`

const ColoredBorder = Styled.div`
	margin-top: 24px;
`

const StyledButton = Styled(Button)`
	width: 100%;
	background: #000000;
	border-radius: 12px;
	color: #ffffff;
	font-size: 0.875rem;

	:hover {
		background: #0D9C8E;
	}

	:focus {
		outline: none;
	}
`

export function CouponApplied({ onClose }) {
  return (
    <Modal isOpen isCentered size="xs" closeOnEsc={false}>
      <ModalOverlay />
      <StyledModalContent>
        <ModalHeader>
          <svg
            width="51"
            height="50"
            viewBox="0 0 51 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.6914 0.81042C30.7562 -0.747304 33.7243 0.0315583 34.8858 2.36814C35.6601 4.05568 37.4668 4.96435 39.2735 4.70473C41.8546 4.3153 44.1775 6.39226 44.0484 8.98847C44.0484 10.8058 45.2099 12.4933 46.8876 13.1424C49.3395 14.0511 50.3719 16.9069 49.2105 19.2435C48.3071 20.8012 48.5652 22.8782 49.8557 24.1763C51.6624 26.1234 51.2753 29.1091 49.0814 30.6668C47.5328 31.7053 46.8876 33.5226 47.2747 35.34C47.92 37.9362 46.2423 40.4026 43.6613 40.6622C41.8546 40.792 40.306 42.2199 39.9188 43.9074C39.2735 46.5036 36.5635 47.9316 34.2406 46.8931C32.5629 46.244 30.6271 46.6335 29.4657 48.0614C27.788 50.0085 24.6908 50.0085 23.0131 48.0614C21.8517 46.6335 19.9159 46.244 18.2382 46.8931C15.7863 47.8018 13.0762 46.3738 12.56 43.9074C12.1728 42.0901 10.6242 40.792 8.8175 40.6622C6.23648 40.4026 4.42976 37.8064 5.20407 35.34C5.72027 33.5226 4.94597 31.7053 3.39735 30.6668C1.20349 29.2389 0.816332 26.1234 2.62305 24.1763C3.91356 22.8782 4.04261 20.8012 3.2683 19.2435C1.97779 16.9069 3.13925 14.0511 5.59122 13.1424C7.26888 12.4933 8.43034 10.9356 8.43034 8.98847C8.43034 6.39226 10.6242 4.3153 13.2052 4.70473C15.0119 4.96435 16.8187 4.05568 17.593 2.36814C18.7544 0.0315583 21.7226 -0.747304 23.9165 0.81042C25.207 1.8489 27.1427 1.8489 28.6914 0.81042Z"
              fill="#107B72"
            />
            <path
              d="M26.3825 0.787246C28.3843 -0.725934 31.2619 0.0306558 32.3879 2.30043C33.1386 3.9397 34.8902 4.82239 36.6418 4.5702C39.144 4.1919 41.3961 6.20947 41.271 8.73144C41.271 10.4968 42.397 12.1361 44.0234 12.7666C46.4006 13.6493 47.4015 16.4234 46.2755 18.6932C45.3997 20.2064 45.6499 22.224 46.9011 23.4849C48.6526 25.3764 48.2773 28.2767 46.1504 29.7899C44.649 30.7987 44.0234 32.564 44.3988 34.3294C45.0244 36.8514 43.3979 39.2472 40.8956 39.4994C39.144 39.6255 37.6427 41.0126 37.2673 42.6519C36.6418 45.1739 34.0144 46.5609 31.7624 45.5522C30.1359 44.9217 28.2592 45.3 27.1332 46.687C25.5067 48.5785 22.504 48.5785 20.8775 46.687C19.7515 45.3 17.8748 44.9217 16.2483 45.5522C13.8712 46.4348 11.2438 45.0478 10.7433 42.6519C10.368 40.8865 8.86663 39.6255 7.11504 39.4994C4.61278 39.2472 2.86119 36.7253 3.61187 34.3294C4.11233 32.564 3.36165 30.7987 1.86029 29.7899C-0.266638 28.4028 -0.641978 25.3764 1.10961 23.4849C2.36074 22.224 2.48585 20.2064 1.73517 18.6932C0.484041 16.4234 1.61006 13.6493 3.98721 12.7666C5.61368 12.1361 6.7397 10.6229 6.7397 8.73144C6.7397 6.20947 8.86663 4.1919 11.3689 4.5702C13.1205 4.82239 14.8721 3.9397 15.6227 2.30043C16.7488 0.0306558 19.6264 -0.725934 21.7533 0.787246C23.0044 1.79603 24.8811 1.79603 26.3825 0.787246Z"
              fill="#00DCC8"
            />
            <path
              d="M14.2461 24.7452L20.2515 30.7979C20.3766 30.924 20.5018 30.924 20.5018 30.7979L33.6386 17.5576"
              stroke="white"
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
          </svg>
          <span>{couponApplied.title}</span>
        </ModalHeader>
        <StyledModalBody>
          <span>{couponApplied.content}</span>
          <ColoredBorder className="uni-gradient-border" />
        </StyledModalBody>

        <StyledModalFooter>
          <StyledButton onClick={onClose}>
            {couponApplied.submitBtnLabel}
          </StyledButton>
        </StyledModalFooter>
      </StyledModalContent>
    </Modal>
  )
}
