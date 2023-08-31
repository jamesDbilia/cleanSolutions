const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/', async (req, res) => {
  const smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOpts = {
    from: 'Your sender info here', // This is ignored by Gmail
    to: process.env.GMAIL_USER,
    subject: req.body.subject,
    text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`,
  };

  // Attempt to send the email
  smtpTrans.sendMail(mailOpts, (error) => {
    if (error) {
      res.send('Email Failed To Send'); // Show a page indicating failure
    } else {
      res.send('Email Sent Successfully'); // Show a page indicating success
    }
  });
});

router.post('/application', async (req, res) => {
  const smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });
  const { name, email, position, coverLetter } = JSON.parse(req.body.values);

  Object.values(req.files).forEach((file) => {
    file.mv(`${__dirname}/public/${file.name}`);
    // , function (err) {
    //   if (err) {
    //     console.log(err);
    //     return res.status(500).send({ msg: 'Error occured' });
    //   }
    //   // returing the response with file1 path and name
    //   return res.send({ file: file.name, path: `/${file.name}` });
    // });
  });

  const mailOpts = {
    from: 'Your sender info here', // This is ignored by Gmail
    to: process.env.GMAIL_USER,
    subject: `Position: ${position} from ${name}, `,
    text: `Contact Info: ${email},
    Cover Letter: ${coverLetter}`,
    attachments: Object.values(req.files).map((file) => {
      return { path: `${__dirname}/public/${file.name}` };
    }),
  };

  // Attempt to send the email
  smtpTrans.sendMail(mailOpts, (error) => {
    if (error) {
      console.log(error);
      res.json({ error: 'contact-failure' }); // Show a page indicating failure
    } else {
      res.json({ error: 'contact-success' }); // Show a page indicating success
    }
  });
});

module.exports = router;
