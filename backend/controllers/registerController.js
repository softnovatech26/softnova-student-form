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
      course,
    } = req.body;

    // Check required fields
    if (!fullName || !email || !phone || !city || !province || !course) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    // Check payment screenshot
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Payment screenshot is required.",
      });
    }

    // Gmail transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify email configuration
    await transporter.verify();

    // Admin email
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

      attachments: [
        {
          filename: req.file.originalname,
          content: req.file.buffer,
          contentType: req.file.mimetype,
        },
      ],
    };

    // Student confirmation email
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

    // Send admin email
    await transporter.sendMail(adminMail);

    // Send student confirmation
    await transporter.sendMail(studentMail);

    return res.status(200).json({
      success: true,
      message: "Registration completed successfully",
    });

  } catch (error) {
    console.error("REGISTRATION ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message || "Registration failed",
    });
  }
};