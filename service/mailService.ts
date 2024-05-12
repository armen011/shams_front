import nodemailer from 'nodemailer';

export const sendMail = (text: string) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  const mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: process.env.NODEMAILER_EMAIL,
    subject: 'Calback Order',
    text: text,
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      // console.log('Unable to send email.', error.message);
    } else {
      return true;
    }
  });
};
