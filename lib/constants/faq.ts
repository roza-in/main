export interface FAQItem {
  question: string;
  answer: string;
}

export const defaultFaqItems: FAQItem[] = [
  {
    question: "What is Rozx and who is it built for?",
    answer: "Rozx is booking, billing, and website software built specifically for Indian salons, spas, aesthetic clinics, and service businesses. We help you manage appointments, customer records, staff schedules, GST invoicing, and your custom booking website in one simple platform.",
  },
  {
    question: "Do you charge any commissions on my bookings or payments?",
    answer: "No. Rozx is a flat-rate subscription platform. We do not take a cut of your appointment bookings, POS transactions, or membership packages. Payment processing fees are set directly by your gateway provider (e.g. Razorpay) with 0% markup from us.",
  },
  {
    question: "Can I connect my custom domain name to my Rozx website?",
    answer: "Yes. You can map your own custom domain name (e.g. www.yourbusiness.com) to your Rozx booking website. Automated SSL certificates and DNS verification are included at no extra charge.",
  },
  {
    question: "How does onboarding and getting started work?",
    answer: "Getting started is straightforward. Create your account, configure your branch working hours, add your service catalog and staff rosters, and launch your booking website. Our team is available to assist you during setup.",
  },
  {
    question: "Can you help me set up my customer data and service list?",
    answer: "We can help you get your business set up on Rozx. You can upload customer lists and service catalogs using CSV templates, and our onboarding team can provide manual setup assistance.",
  },
  {
    question: "Is there a setup fee or contract lock-in period?",
    answer: "There are no setup fees, hidden charges, or lock-in contracts. You can bill month-to-month at ₹999/month or opt for annual billing at ₹9,999/year to save ₹1,989.",
  },
];
