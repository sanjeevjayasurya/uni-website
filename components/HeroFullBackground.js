import Styled from '@emotion/styled'

const Container = Styled.div`
	width: 100%;
	height: 100vh;
	position: relative;
	top: 0;
	left: 0;
	background: #000000;
`

const Video = Styled.video`
	object-fit: cover;
	width: 100%;
	height: 100vh;
	position: absolute;
	top: 0;
	left: 0;
`

const Content = Styled.div`
	position: relative;
	height: 100vh;
	// width: 100vw;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	

	div.content {
		width: 60vw;
		display: flex;
		flex-direction: column;
		align-items: center;

		@media screen and (max-width: 640px) {
			width: 100vw;
		}
	}
`

export const HeroFullBackground = ({
  mediaUrls = [
    { src: '/videos/uni_black_desktop.webm', type: 'video/webm' },
    { src: '/videos/uni_black_desktop.mp4', type: 'video/mp4' },
  ],
  children = <h1>Pay one-third with UNI card</h1>,
  noVideo = false,
}) => {
  return (
    <Container>
      {noVideo ? null : (
        <Video autoPlay loop muted playsInline disablePictureInPicture>
          {mediaUrls.map((i) => (
            <source key={i.src} {...i}></source>
          ))}
        </Video>
      )}

      <Content>
        <div className="content">{children}</div>
      </Content>
    </Container>
  )
}
