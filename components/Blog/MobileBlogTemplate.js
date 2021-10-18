import { SEO, Container } from '../'
import Header from './Header'

export default function MobileBlogTemplate({ title, subtitle, children }) {
  return (
    <>
      <SEO title={title} />
      <Header title={title} subtitle={subtitle} />
      <Container>{children}</Container>
    </>
  )
}
