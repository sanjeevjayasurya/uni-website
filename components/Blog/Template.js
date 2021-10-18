import { Layout, SEO, Container } from '../'
import Header from './Header'

export default function Template({ title, subtitle, children }) {
  return (
    <Layout useWhiteHeader showHeaderActions={false}>
      <SEO title={title} />
      <div className="pt-20">
        <Header title={title} subtitle={subtitle} />
        <Container>{children}</Container>
      </div>
    </Layout>
  )
}
