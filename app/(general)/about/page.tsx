import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next Bases | About",
  description:
    "I'm supposed to talk about myself... but I don't even know who I am.😢",
};

function AboutPage() {
  return (
    <>
      <span className="font-bold text-5xl">About Page</span>
    </>
  );
}
export default AboutPage;
