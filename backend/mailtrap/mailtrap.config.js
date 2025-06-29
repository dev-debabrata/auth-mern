// import { MailtrapClient } from "mailtrap";
// import dotenv from "dotenv";

// dotenv.config();

// export const mailtrapClient = new MailtrapClient({
//     // endpoint: process.env.MAILTRAP_ENDPOINT,
//     token: process.env.MAILTRAP_TOKEN,
// });

// export const sender = {
//     email: "mailtrap@demomailtrap.com",
//     name: "Debu",
// };


import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.MAILTRAP_TOKEN) {
    throw new Error("❌ MAILTRAP_TOKEN is missing from .env");
}

export const mailtrapClient = new MailtrapClient({
    token: process.env.MAILTRAP_TOKEN,
});

export const sender = {
    email: "mailtrap@demomailtrap.com",
    name: "Debu",
};
