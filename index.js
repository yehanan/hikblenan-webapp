const express = require('express');
const sendEmail = require('./sendEmail');


const app = express();

// Define a route to handle requests to send an email
app.post('/sendEmail', async (req, res) => {
  // Get the parent email address and student information from the request
  const parentEmail = req.body.parentEmail;
  const studentName = req.body.studentName;
  const totalScore = req.body.totalScore;
  const gradeLetter = req.body.gradeLetter;

  // Send an email to the parent
  try {
    await sendEmail(parentEmail, studentName, totalScore, gradeLetter);
    res.status(200).send('Email sent successfully');
  } catch (err) {
    res.status(500).send('Failed to send email');
  }
});

// Start the Express server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
