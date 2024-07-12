import { Resend } from "resend";
import { redirect } from "next/navigation";

// EMAIL SENDGING FUCTIONALITY
// ADD RESEND_API_KEY IN YOUR .ENV FILE
export const SendEmail = async (formdata: FormData) => {
  const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
  const message = formdata.get("message");
  const name = formdata.get("name");
  const SenderEmail = formdata.get("SenderEmail");
  if (!message) {
    return {
      error: "Invalid message",
    };
  }
  await resend.emails.send({
    from: "Contact Form <onboarding@resend.dev>",
    to: `ritikasharma.sharma97@gmail.com`,
    subject: `${name} From Contact Form.`,
    reply_to: `${SenderEmail}`,
    text: `sender email: ${SenderEmail} 
     ${message}`,
  });

  return redirect("/");
};
