import { Image } from '@chakra-ui/react'

import { Message } from 'components'
import { about } from 'contents'

const { title, content, investors } = about

const About = ({ isDark = false }) => {
  return (
    <div className={isDark ? 'bg-black' : 'bg-white'}>
      <div className="text-center px-[15px] w-auto max-w-[1270px] flex-column items-center m-auto py-20 lg:pt-20 lg:pb-32">
        <p
          className={`text-base m-6 uppercase ${
            isDark ? 'text-white' : 'text-gray-500'
          } font-medium`}
        >
          {title}
        </p>
        <h3
          className={`m-auto sm:w-full lg:w-9/12 xl:w-[65%] mb-[15px] leading-normal text-[26px] font-bold ${
            isDark ? 'text-white' : 'text-gray-800'
          }`}
        >
          <Message message={content} />
        </h3>
        <div className="flex items-center flex-wrap justify-center mt-14">
          {investors.map(({ logo, name, ...props }) => (
            <Image
              key={name}
              alt={name}
              src={logo}
              className="h-16 w-auto mr-5 lg:mr-[50px] -ml-2.5"
              {...props}
            ></Image>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
