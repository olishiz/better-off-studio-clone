const IMG = "/sites/the-shiz/img";
const MEDIA = "/sites/the-shiz/media";

export const WHATSAPP =
  "https://api.whatsapp.com/send/?phone=%2B60168694900&text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20your%20web%20design%20services.&type=phone_number&app_absent=0";
export const EMAIL = "hello@the-shiz.co";
export const PHONE_DISPLAY = "+60 16 869 4900";
export const PHONE_HREF = "tel:+60168694900";
export const FORMSPREE = "https://formspree.io/f/xdobblql";

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Clients", href: "#clients" },
];

export const contactHref = "#contact";

export const marqueeImages = [
  `${IMG}/mqbc.webp`,
  `${IMG}/frankitas.webp`,
  `${IMG}/carbnb.webp`,
  `${IMG}/rs-property.jpg`,
  `${IMG}/hero-poster.jpg`,
];

export const checklist = ["Great design", "On-schedule delivery", "Maintenance & hosting", "24/7 support"];

export const services = [
  {
    title: "Web Design & Development",
    tags: [
      "Website design",
      "Landing pages",
      "Web applications",
      "E-commerce",
      "CMS & content sites",
      "Performance & SEO",
    ],
  },
  {
    title: "Applied AI",
    tags: [
      "AI strategy & readiness",
      "LLM apps & copilots",
      "AI chatbots & assistants",
      "RAG & knowledge systems",
      "Document & data intelligence",
      "AI integration into existing products",
    ],
  },
  {
    title: "Product & Design",
    tags: ["UX/UI design", "Design systems", "Brand & digital identity", "Prototyping", "UX audits"],
  },
  {
    title: "Engineering & Cloud",
    tags: [
      "Full-stack development",
      "API & integrations",
      "Mobile-friendly & PWA",
      "Cloud hosting & DevOps",
      "Maintenance & support",
      "Technical consulting",
    ],
  },
  {
    title: "AI Automation",
    tags: [
      "Workflow & process automation",
      "Autonomous AI agents",
      "WhatsApp, CRM & email flows",
      "Lead capture & auto-follow-ups",
      "Reporting & back-office ops",
      "API & webhook orchestration",
    ],
  },
];

export const clients = [
  {
    name: "MQBC",
    blurb: "“A website that truly represents our brand.”",
    href: "https://mqbc.com.my/",
    url: "mqbc.com.my",
    image: `${IMG}/mqbc.webp`,
    alt: "Homepage of mqbc.com.my, the Malaysia-Qatar Joint Business Council website",
  },
  {
    name: "Frankitas",
    blurb: "“Clean, modern, and exactly what I had in mind.”",
    href: "https://www.frankitas.co/",
    url: "frankitas.co",
    image: `${IMG}/frankitas.webp`,
    alt: "Homepage of frankitas.co, an online store for handwoven bags",
  },
  {
    name: "Carbnb",
    blurb: "Partnered to build their digital presence.",
    href: "https://www.carbnb.my/",
    url: "carbnb.my",
    image: `${IMG}/carbnb.webp`,
    alt: "Homepage of carbnb.my, a car rental and subscription service in Malaysia",
  },
  {
    name: "RS Property Services",
    blurb: "“Efficient, responsive and produced results in a short period of time.”",
    url: "RS Property Services",
    image: `${IMG}/rs-property.jpg`,
    alt: "Website built for RS Property Services",
  },
];

export const stats = [
  { label: "Projects done", value: "4" },
  { label: "Happy clients", value: "4" },
  { label: "Hours of development", value: "100" },
  { label: "Ongoing project", value: "1" },
];

export const testimonials = [
  {
    quote:
      "“Extremely helpful and knowledgeable in his line of work that even someone as clueless about IT like me understood the process in no time after his explanation. Best of all, he is efficient, responsive and produced results in a short period of time.”",
    name: "Russell",
    role: "RS Property Services",
    avatar: `${IMG}/avatar-russell.png`,
    logo: `${IMG}/logo-rs.png`,
    company: "RS Property Services",
  },
  {
    quote:
      "“Working with Oliver was a seamless experience from start to finish. He took the time to understand exactly what we needed and delivered a website that truly represents our brand. Professional, reliable, and easy to work with — highly recommended.”",
    name: "Marisa",
    role: "DMIA – MQBC",
    avatar: `${IMG}/avatar-marisa.png`,
    logo: `${IMG}/logo-mqbc.jpg`,
    company: "MQBC",
  },
  {
    quote:
      "“I wasn’t sure what to expect, but Oliver made the whole process straightforward and stress-free. The final result exceeded my expectations — clean, modern, and exactly what I had in mind. Will definitely be working with him again.”",
    name: "Frankitas Turner",
    role: "Frankitas",
    avatar: `${IMG}/avatar-frankitas.png`,
    logo: `${IMG}/logo-frankitas.png`,
    company: "Frankitas",
  },
];

export const approachSteps = [
  {
    phase: "Build & launch",
    title: "Clear offer and UX first",
    body: "We structure your pages and user flows around what visitors need to understand before they get in touch — reviewed with you before we build.",
  },
  {
    phase: "Build & launch",
    title: "Web, apps and AI built cleanly",
    body: "Custom websites, web applications, e-commerce and AI assistants engineered for speed, reliability and straightforward day-to-day control.",
  },
  {
    phase: "Build & launch",
    title: "Ready to convert from day one",
    body: "Shipped with fast performance, analytics, structured data and clear enquiry paths across mobile and desktop.",
  },
  {
    phase: "Long-term partnership",
    title: "Managed hosting and 24/7 support",
    body: "Hosting, security updates and responsive support handled proactively so your product stays fast and online.",
  },
  {
    phase: "Long-term partnership",
    title: "Found on Google and AI search",
    body: "Data-driven SEO and ongoing page improvements that bring in qualified traffic and connect you with the right buyers.",
  },
  {
    phase: "Long-term partnership",
    title: "Continuous AI and product evolution",
    body: "As your operations grow, we ship new features, automations and integrations without rebuilding from scratch.",
  },
];

export const principles = [
  {
    title: "Commitment",
    body: "We put our expertise at our partners’ service and own our side of every project — accountable for our work and treating your project as our own.",
  },
  {
    title: "Transparency",
    body: "Honest and open on budgets and project management alike. We never trade long-term value for short-term results.",
  },
  {
    title: "Professionalism",
    body: "Precise, dependable delivery. Our clients’ satisfaction with our work speaks louder than words.",
  },
];

export const contactDetails = [
  { label: "Contact", value: "Oliver Sim, software engineer" },
  { label: "Phone", value: PHONE_DISPLAY, href: PHONE_HREF },
  { label: "WhatsApp", value: "Chat on WhatsApp", href: WHATSAPP, external: true },
  { label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { label: "Web", value: "the-shiz.co", href: "https://the-shiz.co/", external: true },
  { label: "Based in", value: "Kuala Lumpur, Malaysia" },
];

export const footerColumns = [
  {
    title: "Sitemap",
    links: [
      { label: "Home", href: "#top" },
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Clients", href: "#clients" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Services",
    links: services.map((s) => ({ label: s.title, href: "#services" })),
  },
  {
    title: "Get in touch",
    links: [
      { label: EMAIL, href: `mailto:${EMAIL}` },
      { label: PHONE_DISPLAY, href: PHONE_HREF },
      { label: "WhatsApp", href: WHATSAPP },
      { label: "Kuala Lumpur, Malaysia" },
    ],
  },
];

export const media = {
  heroVideoMp4: `${MEDIA}/hero.mp4`,
  heroVideoWebm: `${MEDIA}/hero.webm`,
  heroPoster: `${MEDIA}/hero-poster.webp`,
  approachImage: `${IMG}/frankitas.webp`,
  aboutImage: `${IMG}/hero-poster.jpg`,
};
