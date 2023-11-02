const express = require('express');
const sendEmail = require('./sendEmail');
const Mailjet = require('mailjet');

const app = express();

// Initialize Mailjet with API and Secret keys
const mailjet = new Mailjet({
  apiKey: 'b1575398469ebf1fc9e0cbccb26894a8',
  apiSecret: '7e98350cf57a2fb61df470f1bfda890d'
});

// Define a route to handle requests to send an email
app.post('/sendEmail', async (req, res) => {
  // Get the parent email address and student information from the request
  const parentEmail = req.body.parentEmail;
  const studentName = req.body.studentName;
  const totalScore = req.body.totalScore;
  const gradeLetter = req.body.gradeLetter;

  // Send an email to the parent
  try {
    // Implement your email sending logic here using the 'mailjet' instance
    await sendEmail.sendEmail(mailjet, parentEmail, studentName, totalScore, gradeLetter);
    res.status(200).send('Email sent successfully');
  } catch (err) {
    res.status(500).send('Failed to send email');
  }
});

// Start the Express server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
