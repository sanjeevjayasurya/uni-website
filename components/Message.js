import DOMPurify from 'isomorphic-dompurify'

export const Message = ({ message, as, children, ...props }) => {
  const Element = as || 'span'
  return (
    <Element
      {...props}
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(message || children),
      }}
    ></Element>
  )
}
