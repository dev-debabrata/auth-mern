import nodemailer from "nodemailer";
import { MailtrapTransport } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

const TOKEN = process.env.MAILTRAP_TOKEN;

export const mailtrapClient = nodemailer.createTransport(
    MailtrapTransport({ token: TOKEN })
);

export const sender = {
    address: "noreply@yourdomain.com", // ✅ Must be from a domain you've verified in Mailtrap
    name: "Debu",
};

// export const recipients = ["debabrata7cse@gmail.com"];

// export const sendTestEmail = async () => {
//     try {
//         const info = await mailtrapClient.sendMail({
//             from: `"${sender.name}" <${sender.address}>`, // ✅ Correct format
//             to: recipients,
//             subject: "You are awesome!",
//             text: "Congrats for sending a test email with Mailtrap Email Sending!",
//             html: "<b>Congrats for sending a test email with Mailtrap Email Sending!</b>",
//         });

//         console.log("✅ Email sent:", info);
//     } catch (error) {
//         console.error("❌ Error sending email:", error);
//     }
// };


// export const recipients = ["debabrata7cse@gmail.com"];

// transport
//     .sendMail({
//         from: sender,
//         to: recipients,
//         subject: "You are awesome!",
//         text: "Congrats for sending a real email with Mailtrap!",
//         html: "<p>This is a <b>real</b> email.</p>",
//         category: "Integration Test",
//     })
//     .then(console.log)
//     .catch(console.error);



// // Create transporter using Mailtrap SMTP
// export const mailtrapClient = nodemailer.createTransport({
//     host: "live.smtp.mailtrap.io",
//     port: 587,
//     auth: {
//         user: "api",
//         pass: process.env.MAILTRAP_TOKEN, // Set in .env file
//     },
// });

// // Sender info
// export const sender = {
//     email: "hello@example.com", // Can be anything for testing
//     name: "Debu"
// };

// // Recipient(s)
// export const recipients = [
//     {
//         email: "inbox@your-mailtrap-inbox.com" // Use the email shown in Mailtrap sandbox inbox
//     }
// ];

// // Example: send mail
// export const sendTestEmail = async () => {
//     try {
//         const info = await mailtrapClient.sendMail({
//             from: `"${sender.name}" <${sender.email}>`,
//             to: recipients.map(r => r.email).join(","),
//             subject: "You are awesome!",
//             text: "Congrats for sending a test email with nodemailer and Mailtrap SMTP!",
//             html: "<b>Congrats for sending a test email with nodemailer and Mailtrap SMTP!</b>",
//         });

//         console.log("✅ Email sent:", info.response);
//     } catch (error) {
//         console.error("❌ Failed to send email:", error);
//     }
// };

// const Nodemailer = require("nodemailer");