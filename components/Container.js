import style from './Container.module.css'

export const Container = (props) => (
  <section {...props} className={`${style.container} ${props.className}`} />
)
