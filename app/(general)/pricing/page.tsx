import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next Bases | Pricing",
  description: "A page that probably talks about prices 🤷‍♂️",
};

function PricingPage() {
  return (
    <>
      <span className="font-bold text-5xl">Pricing Page</span>
    </>
  )
}
export default PricingPage