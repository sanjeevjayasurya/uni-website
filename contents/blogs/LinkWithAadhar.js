export const aadharBlogData = {
  sections: [
    {
      content: [],
      body: [
        {
          title: 'Visiting your nearest telecom provider store',
          type: 'list',
          contentType: 'ol',
          style: {
            listStyleType: "decimal"
          },
          description: null,
          data: [
            'Head over to your nearest telecom provider store',
            'Carry a self-attested copy of your Aadhaar card',
            'Provide the number to be linked to the store executive',
            'The store executive will be able to send an OTP to the number',
            'Share the OTP for verification',
            'Now, help them with your biometrics for authentication',
            'You will receive a confirmation SMS from your telecom operator',
            'Reply ‘Y’ to complete the e-KYC process',
          ],
        },
        {
          title: 'Visiting the nearest Aadhar enrollment center',
          type: 'list',
          contentType: 'ol',
          style: {
            listStyleType: "decimal"
          },
          description: null,
          data: [
            'Head over to your nearest Aadhaar Enrolment or Update Centre',
            'Fill out the Aadhaar Correction Form with your current mobile number that you want to update in your Aadhaar',
            'Submit the form and help them with your biometrics for authentication',
            'Receive the acknowledgment slip. This slip mentions an Update Request Number (URN)',
            'The Update Request Number can be used to check the status of your Aadhaar updation',
          ],
        },
      ],
    },

    {
      sectionHeader: {
        label:
          'If your number is already registered with UIDAI you can update to your current number in 2 simple ways -',
        style: {
          fontWeight: 'bold',
          fontSize: '36px',
          padding: '40px 0',
        },
      },
      content: [],
      body: [
        {
          title: 'Visiting your nearest telecom provider store',
          type: 'list',
          contentType: 'ol',
          style: {
            listStyleType: 'decimal',
          },
          description: null,
          data: [
            'Call the Aadhar registration toll-free number provided by your telecom provider, this varies from provider to provider, please contact telecom provider for the same.',
            'Based on whether you are Indian Citizen or NRI choose the mentioned option',
            'Press 1 to re-verify your number',
            'Put in your 12-digit Aadhaar number',
            'Press 1 to confirm',
            'Step 6: An OTP will be sent to your number',
            'Give consent to your telecom provider to access personal details like full name, date of birth, and photo from UIDAI’s server',
            'A recorded message will read out the last 4 digits of your mobile number',
            'Enter the OTP received on your mobile, if the number is correct',
            'Press 1 to complete the process',
          ],
        },
        {
          title: 'Update your current mobile number through IVR',
          type: 'list',
          contentType: 'ol',
          style: {
            listStyleType: 'decimal',
          },
          description: null,
          data: [
            'Call the toll-free number provided by your telecom provider, this varies from provider to provider, please contact telecom provider for the same',
            'Follow IVR instructions',
            'Enter your 12-digit Aadhaar number and confirm it',
            'You will receive an SMS confirming that your Aadhaar has been linked with your number within 24 hours',
          ],
        },
      ],
    },
  ],
  endingNote: {
    note: 'Looking for a specific answer, reach out to <a href="mailto: care@uni.club" style="color:#00dcc8; font-weight: 400;">care@uni.club</a>',
    style: {
      fontWeight: 'bold',
    },
  },
  headerTitle: {
    title: 'We’ve got your back.',
    subtitle: 'Here are 2 easy ways to link your mobile number to Aadhar',
  },
}
