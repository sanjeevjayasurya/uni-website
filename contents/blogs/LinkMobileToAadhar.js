
  export const linkMobileToAadhar = {
    sections: [
      {
        content: [
            'Aadhaar Card is a unique identification Card that is issued by the Government of India to all the Indian citizens. The linking of Aadhaar Card to mobile number is mandated by the Government of India.',
            'You can get your mobile number linked/ updated to Aadhar by visiting any of the centres mentioned below.',
            {
              type: 'list',
              contentType: 'ul',
              style: {
                padding: "25px 20px",
                listStyleType: 'disc',
              },
              description: [],
              data: [
                {
                  type: 'list',
                  contentType: 'ul',
                  description: [
                    '<b>UIDAI run Aadhaar Seva Kendra (ASK)</b>',
                    'As of today there are 52 state of the art Aadhaar Seva Kendra maintained by UIDAI. Know more',
                  ],
                  data: null,
                },
                {
                  type: 'list',
                  contentType: 'ul',
                  description: [
                    '<b>Registrar run Aadhaar Seva Kendra</b>',
                    'Multiple centres are available in all locations where citizens can avail aadhar services Locate centre',
                  ],
                  data: [],
                },
              ],
            },
            'Before you visit your enrollment centre, please note that you have the option to book an appointment online or directly walk-in to the enrollment centre. Read below to learn more about the process if you choose to book an appointment online or directly walk-in.'
          ],
        body: [
            {
              title: 'How to book an appointment online?',
              type: 'step',
              sectionData: [
                'Go to the official website of Aadhaar here https://ask.uidai.gov.in/',
                'Select Book an Appointment under My Aadhaar section in the menu bar',
                'Choose between “Registrar run Aadhaar Seva Kendra” and “UIDAI run Aadhaar Seva Kendra”.',
                'Login with your mobile number, once done verify your details and if all looks okay, click on “Send” ',
                'Enter the OTP & click on “Submit OTP”',
                'The next screen will show you the Aadhaar services, viz. New enrollment and Update Aadhaar. Click on update Aadhaar.',
                'The next screen will show you different fields such as, Name, Aadhaar Number, Resident Type, and what do you want to update, etc.',
                'Do enter the new mobile number that you want to replace.',
                'The next screen will ask your mobile number and a captcha. Fill in all the fields and click on ‘Send OTP’. Enter and verify the received OTP and click on ‘Save and Proceed’.',
                'Verify all the details one last time and click on Submit.',
                'In the next step, you will see a Success Screen with your Appointment ID.',
                'As a last step, Click on the ‘Book Appointment’ option to book a slot at the Aadhaar enrollment center. Search your enrollment centre, select date and time slot and confirm your appointment,',
                'If you have chosen UIDAI run Aadhar Service Kendra, you will be required to make an online payment of ₹50.',
              ],
            },
            {
              title: 'Booking an offline appointment/ directly walk-in',
              type: 'list',
              contentType: 'ul',
              style: {
                listStyleType: 'disc',
              },
              description: [],
              data: [
                'Once you reach your desired appointment centre, follow the below instructions',
                'Fill the Aadhaar Correction Form available at the center',
                'Fill in your current/existing mobile number that you are currently using and want to update in your Aadhaar',
                'Submit the form and provide them with your biometrics for authentication',
                'The executive will go through everything and then hand over the acknowledgment slip to you',
                'This slip has an Update Request Number (URN)',
                'The Update Request Number can be used to check the status of your Aadhaar updation',
                'Once you have updated your mobile number in Aadhaar, you do not need to get another Aadhaar card',
                'You will start receiving updates about Aadhaar OTPs for availing a number of facilities once your mobile number is registered with your Aadhaar',
                'To check the status of your Aadhaar card update status, you can also call UIDAI’s toll-free number 1947.',
              ],
            },
          ],
      },
    ],
    endingNote: {
        note: 'That’s it. Choose the way that suits you the best to get your Aadhaar linked/updated to your mobile number and go and get this task off your to-do list.',
        style: {
          color: '#6D6D6D',
        },
      },
    headerTitle: {
        title: 'We’ve got your back.',
        subtitle: 'Here are 2 easy ways to link your mobile number to Aadhar',
    },
  }
  