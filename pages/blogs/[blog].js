import { BlogTemplate, BlogBody, BlogIntro, EndingNote } from 'components'
import { blogContentMapper, getContent } from 'contents/blogs'

export default function Test({ ...rest }) {
  const {
    sections,
    headerTitle,
    endingNote = null,
  } = getContent(rest.params.blog)
  return (
    <BlogTemplate {...headerTitle}>
      <div className="blog">
        {sections.map((section, key) => {
          const { content = null, body, sectionHeader } = section
          return (
            <div className={'section-' + key} key={key}>
              <BlogIntro content={content} sectionHeader={sectionHeader} />
              <BlogBody body={body} />
            </div>
          )
        })}

        <EndingNote endingNote={endingNote} />
      </div>
    </BlogTemplate>
  )
}

export async function getStaticPaths() {
  const paths = Object.keys(blogContentMapper).map((path) => {
    return `/blogs/${path}`
  })
  return {
    paths,
    fallback: false,
  }
}
export async function getStaticProps({ params }) {
  return {
    props: { params }, // will be passed to the page component as props
  }
}
