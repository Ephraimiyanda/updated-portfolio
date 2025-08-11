// pages/api/sendEmail.js

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(
  request:NextRequest
) {
  const req = await request.json();
  const transporter = nodemailer.createTransport({
    service:"Gmail",
    host: "smtp.gmail.com", // Your SMTP host
    port:587,
    secure: true, // Set to true if your SMTP provider requires a secure connection
    auth: {
      user: "ziksburner@gmail.com", // Your email address
      pass: "apeo kabs hjbb cogr", // Your email password
    },
  });

  const mailData = {
    from: req.personEmail,
    to: "iyandaephraim.@gmail.com", // Receiver's email address
    subject: `Message From ${req.personName}: portfolio review`,
    text: req.message,
    html: ` <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Email Template</title>
<style>
  /* Reset styles */
  body, p {
    margin: 0;
    padding: 0;
  }

  /* Email body styles */
  .email-body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
    border-radius: 10px;
  }

  /* Header styles */
  .header {
    background-color: #007bff;
    color: #ffffff;
    padding: 20px;
    text-align: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  /* Content styles */
  .content {
    background-color: #ffffff;
    padding: 20px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  /* Footer styles */
  .footer {
    background-color: #007bff;
    color: #ffffff;
    padding: 10px;
    text-align: center;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
</style>
</head>
<body>
  <div class="email-body">
    <div class="header">
      <h2>Hello Ephraim,</h2>
    </div>
    <div class="content">
      <p>This is a  email message from ${req.personName} at ${req.personEmail}.</p>
      <p><strong>Message:</strong></p>
      <p>${req.message}</p>
    </div>
    <div class="footer">
      <p>Best regards,<br> ${req.personName}</p>
    </div>
  </div>
</body>
</html>
`,
  };
  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transporter.sendMail(mailData, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
