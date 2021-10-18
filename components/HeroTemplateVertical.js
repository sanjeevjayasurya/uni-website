import Image from './Image'

import { heroTemplate } from 'contents/heroTemplate'

const {
  titleFirstLine,
  titleSecondLine,
  description,
  download,
  imageSrcVertical,
  imageAlt,
} = heroTemplate

export const HeroTemplateVertical = () => {
  return (
    <main className="relative text-left lg:text-center bg-black">
      <div>
        <div className="h-screen w-full flex flex-col justify-end lg:justify-center lg:flex-row px-8 pb-40 sm:px-14">
          <div className="flex flex-col mt-16 items-left lg:justify-center lg:items-center mb-0 lg:mb-14 lg:mt-0">
            <h1 className="text-5xl lg:text-7xl max-w-[350px] lg:max-w-full text-white font-bold mb-6 flex-wrap">
              {titleFirstLine}
              <span className="block lg:inline"> {titleSecondLine} </span>
            </h1>
            <h3
              dangerouslySetInnerHTML={{
                __html: `${description}`,
              }}
              className="text-[#d6d6d6] text-base font-bold lg:text-2xl mt-4 mb-10"
            ></h3>
            <a className="flex z-10 items-center justify-center w-52 h-16 text-xl rounded-full bg-white font-semibold">
              {download}
            </a>
          </div>
          <Image
            className="hidden lg:block absolute bottom-0"
            src={imageSrcVertical}
            alt={imageAlt}
          ></Image>
          <div>
            
          </div>
        </div>
      </div>
    </main>
  )
}
