import { Image } from '@chakra-ui/react'

const Style = {
  arrowImage: {
    marginBottom: '2px',
    marginLeft: '10px',
    cursor: 'pointer',
  },
}

export const download = {
  title: 'Pay 1/3rd <br/> with Uni card',
  subtitle:
    'Pay in 3 parts over 3 months for No extra charges. Split your payments not your dreams',
  href: 'https://unicards.onelink.me/KRuW/',
  downloadLabel: 'Download Now - Beta',
  btnClass: 'google-btn-3',
}

export const gpaylanding = {
  title: 'Pay 1/3rd <br/> with Uni Card',
  subtitle:
    'Pay in 3 parts over 3 months for NO EXTRA charges. Split your payments, not your dreams.',
  redeemLabel: (
    <span>
      Redeem Voucher
      <Image
        display={['none', 'none', 'inline']}
        h="14px"
        maxW="22px"
        style={Style.arrowImage}
        src="/images/arr_right.svg"
        alt=""
      />
    </span>
  ),
}
