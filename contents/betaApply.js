export const betaApply = {
  seoTitle: 'Apply for Uni Cards',
  submitMessage: (
    <>
      Thank you for applying for the Uni Pay 1/3rd Card! <br /> We’ve got your
      details. <br /> Our expert will get in touch with you soon.
    </>
  ),
  heading: 'Ticket to Beta',
  caption:
    'Excited? We are thrilled. Fill the short form below for your exclusive Beta access.',
  nextStep: 'By applying you agree to receive promotional communication from Uni.',
  apply: 'Apply Now',
  errorMessage: 'Oops! Something went wrong while submitting the form.',
  download: 'Download to get started',
  playStore: 'Google Play',
  appStore: 'Apple App Store',
  applyFormFields: [
    {
      label: 'Name',
      placeholder: 'Full Name',
      key: 'name',
      errors: {
        specialCharacterError: 'Special characters not allowed!',
        minLength: 'Please enter more than 3 characters',
        maxLength: 'Please enter less than 64 characters',
      },
    },
    {
      label: 'Phone Number',
      placeholder: 'XXXXXXXXXX',
      key: 'phone',
      errors: {
        required: 'Phone number is required.',
        invalid: 'Please enter a valid phone number.',
      },
    },
    {
      label: 'Email ID',
      placeholder: 'email@example.com',
      key: 'email',
      errors: {
        invalid: 'Please enter a valid email.',
      },
    },
    {
      label: 'PAN',
      placeholder: 'This will not effect you credit score',
      key: 'pan',
      errors: {
        invalid: 'Please enter a valid PAN.',
      },
    },
  ],
}
