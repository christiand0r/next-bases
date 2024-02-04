import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next Bases | Contact",
  description: "Send a message to someone, I don't know who will receive this email 😜",
};

function ContactPage() {
  return (
    <>
      <span className="font-bold text-5xl">Contact Page</span>
    </>
  );
}
export default ContactPage;
