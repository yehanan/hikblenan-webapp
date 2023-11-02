const Mailjet = require('mailjet');

const mailjet = new Mailjet({
  apiKey: 'b1575398469ebf1fc9e0cbccb26894a8',
  apiSecret: '7e98350cf57a2fb61df470f1bfda890d'
});

function sendEmail(parentEmail, studentName, totalScore, gradeLetter) {
  const message = {
    from: 'hikblenan@gmail.com',
    to: parentEmail,
    subject: `Results for ${studentName}`,
    text: `Dear ${parentEmail},

    Your child, ${studentName}, has scored a total of ${totalScore} in their recent exams. Their grade is ${gradeLetter}.

    Congratulations to ${studentName} on their hard work!

    Sincerely,
    The Teacher
  `
  };

  mailjet.post('send', message).then(() => {
    console.log(`Email sent to parent of ${studentName}`);
  }).catch(err => {
    console.log(err);
  });
}

module.exports = {
  sendEmail
};
