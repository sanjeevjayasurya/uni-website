import { Container } from 'components'

import style from './Blog.module.css'

const Header = ({ title, subtitle, className = '', ...props }) => (
  <div
    className={`${style.header} flex w-full h-56 sm:h-[300px] text-white relative bg-cover items-end md:items-center justify-end md:justify-self-auto ${className}`}
    {...props}
  >
    <Container>
      <h3 className="text-xl sm:text-4xl w-full md:w-3/5 sm:leading-10 font-bold">
        {title}
      </h3>
      {subtitle && (
        <h4 className="text-sm sm:text-3xl sm:leading-10">{subtitle}</h4>
      )}
    </Container>
  </div>
)

export default Header
