export const hero = {
  title: `India's first </br> Pay 1/3rd card <br />is here`,
  subtitle:
    'Pay 1/3rd every month for NO EXTRA charges. </br> Split your payments, not your dreams.',
  actions: [
    {
      label: 'Get Beta Access',
      type: 'primary',
      link: '/apply',
      _hover: { bg: 'brand.secondary' },
      className: 'apply_btn',
      w: ['176px', '196px', '176px', '176px', '240px'],
    },
    {
      label: 'Watch full video',
      type: 'secondary',
      link: '#open-for-beta',
      bg: 'transparent',
      variant: 'outline',
      color: 'white',
      _hover: { color: 'white', opacity: 0.6 },
      w: ['160px', '160px', '170px', '170px', '200px'],
      as: 'button',
      // TODO - this needs to be refined
      action: 'open-modal',
      marginRight: 0
    },
  ],
}
