import emailjs from "emailjs-com";

type SendContactEmailParams = {
  name: string;
  email: string;
  message: string;
};

export async function sendContactEmail({ name, email, message, }: SendContactEmailParams) {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

  if (!serviceId || !templateId || !publicKey) throw new Error("Email service not configured");

  return emailjs.send(
    serviceId,
    templateId,
    {
      user_name: name,
      user_email: email,
      message,
    },
    publicKey
  );
}