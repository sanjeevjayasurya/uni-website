import { heroTemplate } from "contents/heroTemplate";
import Image from "./Image";

const {
  titleFirstLine,
  titleSecondLine,
  description,
  download,
  imageSrcHorizontal,
  imageAlt,
} = heroTemplate;

export const HeroTemplateHorizontal = () => {
  return (
    <main className="relative text-left bg-black">
      <div>
        <div className="items-center text-center md:text-left max-w-[1600px] mx-auto h-screen w-full flex flex-col justify-end md:justify-around md:items-center md:flex-row sm:px-8 md:px-14 pb-40 md:pt-40">
          <Image
            className="bottom-0 w-60 h-60 md:w-80 md:h-80"
            src={imageSrcHorizontal}
            alt={imageAlt}
          ></Image>
          <div className="flex items-center flex-col mt-20 items-left md:justify-center md:items-start md:max-w-[500px] md:mt-0">
            <div className="text-5xl md:text-6xl lg:text-7xl max-w-[350px] md:max-w-full text-white font-bold mb-6 flex-wrap">
              {titleFirstLine}
              <span className="block md:inline">{titleSecondLine}</span>
            </div>
            <h3
              dangerouslySetInnerHTML={{
                __html: `${description}`,
              }}
              className="text-[#d6d6d6] text-base font-bold md:text-2xl mt-4 mb-10"
            ></h3>
            <a className="flex items-center justify-center w-52 h-16 text-xl rounded-full bg-white font-semibold">
              {download}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};
