/* eslint-env node */
import nodemailer from "nodemailer";


export const registerStudent = async (req, res) => {
  try {

    const {
      fullName,
      email,
      phone,
      city,
      province,
      course
    } = req.body;


    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });


   // Admin Email
const adminMail = {
  from: process.env.EMAIL_USER,
  to: "softnovatech.pk@gmail.com",
  subject: "New Student Registration - SoftNova Academy",

  html: `
    <h2>New Student Registration</h2>

    <p><b>Name:</b> ${fullName}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Phone:</b> ${phone}</p>
    <p><b>City:</b> ${city}</p>
    <p><b>Province:</b> ${province}</p>
    <p><b>Course:</b> ${course}</p>

    <br/>

    <p><b>Payment Screenshot:</b> Attached Below</p>

    <br/>

    <p>SoftNova Student Registration Portal</p>
  `,

  attachments: req.file
    ? [
        {
          filename: req.file.originalname,
          path: req.file.path,
        },
      ]
    : [],
};


// Student Confirmation Email
const studentMail = {
  from: process.env.EMAIL_USER,
  to: email,
  subject: "Registration Received - SoftNova Academy",

  html: `
    <h2>Dear ${fullName},</h2>

    <p>
      Your registration form has been successfully received by
      <b>SoftNova Academy</b>.
    </p>

    <p>
      Our team will review your details and contact you soon.
    </p>

    <br/>

    <p>
      Thank you for choosing SoftNova Academy.
    </p>

    <br/>

    <b>SoftNova Team</b>
  `,
};
    // Send both emails
    await transporter.sendMail(adminMail);
    await transporter.sendMail(studentMail);


    res.status(200).json({
      success: true,
      message: "Registration completed successfully",
    });


  } catch (error) {

    console.log(error);

  res.status(500).json({
  success:false,
  message:error.message
});
  }
};