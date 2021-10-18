export const couponApplied = {
  title: 'Congratulations!',
  content: 'Your coupon code is successfully applied.',
  submitBtnLabel: 'Get Uni Pay 1/3rd Card',
}

export const applyForm = {
  errorMessage: 'Oops! Something went wrong.',
  states: [
    {
      name: 'name',
      title: 'Fill the below details to redeem your voucher',
      subtitle: 'You will get 25% off upto ₹200 on your first transaction',
      content: '',
      ctaLabel: 'Submit',
    },
    {
      name: 'done',
      title: 'Congratulations! You’ve successfully redeemed your voucher',
      subtitle: `<p>We have got your details. All you need to do is download the app and complete your quick application.</p>

        <p class='mt-4'>98% of the users get their card in <br />
        less than <span class='positive-color'>3-5 mins</span>.</p>`,
      content: '',
      showClose: true,
      ctaLabel: 'Download App',
      link: {
        href: 'https://unicards.onelink.me/KRuW/',
        target: '_blank',
        rel: 'noopener noreferrer',
        className: 'google-btn-2',
      },
    },
  ],
}
