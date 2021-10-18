import { Message } from 'components'
import { formatNumber } from 'utils/utils'

export function getTableContent(body) {
  const { data: { headers = [], tableData = [] } = {} } = body

  const keys = []

  return (
    <div className="max-w-[100vw] overflow-x-auto">
      <table className="border border-solid border-black">
        <thead>
          <tr className="border border-solid border-black">
            {headers.map(({ label, accessor }, headerId) => {
              keys.push(accessor)
              return (
                <th
                  key={headerId}
                  className="border border-solid border-black p-[10px]"
                >
                  {label}
                </th>
              )
            })}
          </tr>
        </thead>

        <tbody>
          {tableData.map((item, rowId) => {
            return (
              <tr key={rowId} className="border border-solid border-black">
                {keys.map((key, colId) => {
                  return (
                    <td
                      key={colId}
                      className="border border-solid border-black p-[10px]"
                    >
                      {item[key]}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export function getInnerContent({ item, num = '' }) {
  if (typeof item === 'object') {
    switch (item.type) {
      case 'table':
        return getTableContent(item)
      case 'list':
        const { style, contentType: Type, description, data } = item
        return (
          <>
            {description &&
              description.map((descr, index) =>
                getInnerContent({ item: descr, num: index })
              )}
            {data && (
              <Type className="py-0 px-5" style={{ ...style }}>
                {data.map((item, index) => (
                  <li key={index}>{getInnerContent({ item })}</li>
                ))}
              </Type>
            )}
          </>
        )
      case 'step':
        const { sectionData = [] } = item
        return (
          <>
            {sectionData.map((step, index) => (
              <div className="my-[10px]" key={index}>
                <p className="font-bold">Step {index}</p>
                <p key={index}>{step}</p>
              </div>
            ))}
          </>
        )
      default:
        const { data: para = null } = item
        if (para) {
          return para.map((point, index) => {
            return getInnerContent({ item: point, num: index })
          })
        } else {
          return <Message size="xl" message={item} />
        }
    }
  } else {
    return <Message as={'p'} size="xl" message={item} key={num} />
  }
}

export function BlogIntro({ content, sectionHeader = {} }) {
  const { label = null, style = {} } = sectionHeader
  return (
    <>
      {label && (
        <div className="heading-label">
          <Message message={label} style={{ ...style }} as={'h3'} />
        </div>
      )}
      {content && (
        <div className="text-tx-gray">
          {content.map((data, key) =>
            getInnerContent({ item: data, num: key })
          )}
        </div>
      )}
    </>
  )
}

export function BlogBody({ body }) {
  return (
    <div>
      {body.map((section, key) => {
        const { title } = section
        return (
          <div key={key}>
            <div className="my-4 sm:mt-10">
              <div className="text-tx-green-primary text:sm sm:text-xl sm:leading-10 flex flex-1 text-left">
                {formatNumber(key + 1)}
              </div>
              <div className="text-2xl sm:text-4xl leading-10 font-bold">
                {title}
              </div>
            </div>
            <div className="text-tx-gray">
              {getInnerContent({ item: section })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export function EndingNote({ endingNote }) {
  return (
    <div className="note pt-20 pb-20">
      {endingNote && (
        <Message size="xl" message={endingNote.note} style={endingNote.style} />
      )}
    </div>
  )
}
