import { Fragment } from 'react'
import { Button } from '@chakra-ui/react'
import Styled from '@emotion/styled'

import { AppStoreIcon, PlayStoreIcon, Logo } from 'components'
import { footerContent } from '../contents'

const { download, address, internalLinks, socialLinks } = footerContent

const Image = Styled.img``

const getIcon = (comp) => {
  return comp === 'Google' ? <PlayStoreIcon mr={2} /> : <AppStoreIcon mr={2} />
}

const Footer = () => {
  return (
    <>
      <div className="relative w-full bg-black-2">
        <div className="flex items-center justify-center p-4 text-grey-dark">
          <p>Uni maintains the highest level of security standards</p>
          <Image
            src={'/images/pcidss_cert.svg'}
            className="ml-3 w-20"
            width="80px"
            loading="lazy"
            alt=""
          />
        </div>
      </div>

      <footer
        as=""
        className="flex flex-col items-center bg-black-12 text-white pt-20 px-4 md:px-14 md:pt-[8vw] md:pb-[3vw]"
        id="footer"
      >
        <div className="w-full max-w-[1240px] min-h-[auto]">
          <div className="flex flex-col md:flex-row items-center justify-center sm:justify-between">
            <div className="flex flex-col items-center sm:items-start">
              <h3 className="text-[26px] md:text-[32px] leading-[1.3] font-medium m-0 mb-5 text-center md:text-left">
                {download.msg}
              </h3>

              <div className="flex flex-wrap justify-center md:justify-start">
                {download.links.map(
                  ({ type, label, link, iconComp, ...otherProps }) => (
                    <Button
                      as="a"
                      key={type}
                      w={['180px', '180px', '200px']}
                      h="56px"
                      fontSize="15px"
                      fontWeight="100"
                      p="0px"
                      mb={['20px', '0', '0', '0']}
                      _hover={{ bg: '#45454a', color: '#00dcc8' }}
                      margin={'8px'}
                      variant="outline"
                      {...otherProps}
                    >
                      {getIcon(iconComp)}
                      {label}
                    </Button>
                  )
                )}
              </div>
            </div>

            <div className="flex flex-col w-full lg:w-1/2 items-center md:items-end">
              <div className="mx-0 mt-[60px] md:m-0 mb-6">
                <Logo />
              </div>
              <div className="text-grey-dark text-[13px] lg:text-base">
                <p className="text-center md:text-right w-full sm:w-[400px] md:w-[280px] lg:[w-360px]">
                  {address.content}
                </p>
                <p className="text-center md:text-right w-full sm:w-[400px] md:w-[280px] lg:[w-360px]">
                  {address.contactUsLabel}
                  <a href={`tel: ${address.phoneNo}`}> {address.phoneNo}</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="spacer-gradient h-[1px] w-full max-w-[1240px] mx-0 mt-20 mb-5 md:mb-8" />

        <div className="flex w-full max-w-[1240px] flex-col justify-center items-center md:flex-row md:justify-between">
          <div className="flex flex-wrap justify-center">
            {socialLinks.map(({ label, link }) => (
              <a
                className="py-0 px-[18px] h-[60px]"
                href={link}
                key={label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="p-0 pb-5">
            {internalLinks.map(({ label, link, ...rest }, i) => (
              <Fragment key={label}>
                <a className="h-[60px]" href={link} {...rest}>
                  {label}
                </a>

                {i !== internalLinks.length - 1 ? (
                  <span className="px-2">|</span>
                ) : null}
              </Fragment>
            ))}
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
