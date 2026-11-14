const IMG = "/sites/betteroff/img";

export const SOURCE_ORIGIN = "https://betteroff.studio";
export const CALENDLY = "https://calendly.com/betteroffstudio/30min?month=2024-06";
export const CALENDLY_FOOTER =
  "https://calendly.com/betteroffstudio/30min?preview_source=et_card&month=2024-06";

export const navLinks = [
  { label: "Overview", href: "/" },
  { label: "Work", href: `${SOURCE_ORIGIN}/work` },
  { label: "Feed", href: `${SOURCE_ORIGIN}/feed` },
];

export const pricingHref = "#packages";

export const workLoopImages = [
  "work-loop_24",
  "work-loop_3",
  "work-loop_11",
  "work-loop_29",
  "work-loop_8",
  "work-loop_4",
  "work-loop_10",
  "work-loop_26",
  "work-loop_7",
  "work-loop_1",
  "work-loop_25",
  "work-loop_18",
  "work-loop_14",
  "work-loop_5",
  "work-loop_22",
].map((n) => `${IMG}/${n}.jpg`);

export const cultureSlides = [1, 2, 3, 4, 5, 6].map((n) => `${IMG}/culture-large-${n}.jpg`);

export const creativeFeatures = [
  {
    title: "Fully Loaded",
    body: "From complex strategies to intricate identities to bleeding-edge digital development, every project is now possible with a click.",
  },
  {
    title: "Flat Fee Flex",
    body: "We don't haggle over hours. Our plans are nimble and allow plenty of wiggle room to account for shifting priorities and rethinking.",
  },
  {
    title: "Creative Control",
    body: "We don't want our clients to ever feel trapped or locked into anything. If you want to pump the brakes or step on the gas, feel free to pause, cancel, or upgrade anytime.",
  },
];

export const services = [
  {
    title: "Strategy",
    body: "Behind every surprising campaign, compelling site launch, or must-watch piece of content, there’s a well-considered strategy that engineered the outcome. During this crucial phase, we address the foundational and psychological factors that drive the desired interaction between brand and customer. We match logic-based journeys with pinpoint executions that create memorable and lasting engagements.",
    tags: [
      "Brand Architecture & Roadmaps",
      "Brand Strategy",
      "Digital Strategy",
      "Product Launch Strategy",
      "SEO & Content Strategy",
      "Information Architecture (IA)",
      "Design Systems",
      "Brand Messaging",
      "User Research & Testing",
      "New Revenue Streams",
    ],
  },
  {
    title: "Design",
    body: "Our design services focus on pitch-perfect brand identities, flawless UX and UI design, and unforgettable product builds that ensure your vision is brought to life with intention and precision. Our rapid prototyping and ironclad design systems streamline the development process, while our expertise in information architecture and motion design enhances usability and engagement. We create intuitive product interfaces and captivating social media designs that pop off the screen and elicit action.",
    tags: [
      "Brand Identity",
      "Brand Guidelines",
      "UX and UI Design",
      "Website & App Design",
      "Art Direction",
      "Product Concepting",
      "Rapid Prototyping",
      "Motion Design",
      "Product Interfaces",
    ],
  },
  {
    title: "Technology",
    body: "We build full-stack digital brand extensions that serve as the online anchors of our clients’ multichannel narratives. Our no-code Framer and Webflow solutions enable rapid and efficient development timelines for both sites and products. As Shopify Plus e-commerce partners and WordPress master developers, we offer the most advanced functionality options paired with the simplest and most robust content management systems. When it comes to development, our velocity and versatility is unrivaled.",
    tags: [
      "No-code Framer Solutions",
      "Webflow Solutions",
      "Shopify Plus (Partners)",
      "Advanced E-commerce",
      "WordPress Specialists",
      "Full Stack Development",
      "Journey Mapping & Testing",
      "Accessibility (WCAG) 2.1",
    ],
  },
];

export const testimonials = [
  {
    quote:
      "“Referred by a friend, we appreciated this team's clear pricing and flexible staffing for our major site launches, including Shopify development. They're now our go-to team in a pinch.”",
    name: "Oleksandra Zubrytska",
    role: "The Hollis Co. / Technical Project Manager",
    avatar: `${IMG}/testimonial-hollis.jpg`,
    logo: `${IMG}/logo-hollis.png`,
    company: "The Hollis Co.",
  },
  {
    quote:
      "“This team excelled under pressure, delivering a standout UX/UI update to our booking section that redefined our collaboration and became a highlight for Royal Caribbean.”",
    name: "Tina Rossell",
    role: "Royal Carribbean / Commodity & Marketing Manager",
    avatar: `${IMG}/testimonial-royal-caribbean.jpg`,
    logo: `${IMG}/logo-royal-caribbean.png`,
    company: "Royal Caribbean",
  },
  {
    quote:
      "“We've partnered with Better Off for years, and are always impressed by their innovative brand development and precise execution. Their work during our recent rebrand matched our vision perfectly.”",
    name: "Andrew Watson",
    role: "Built Things / Owner",
    avatar: `${IMG}/testimonial-built-things.jpg`,
    logo: `${IMG}/logo-built.png`,
    company: "Built Things",
  },
  {
    quote:
      "“We have a long history with this company and several major projects together. Their expertise consistently makes us look good.”",
    name: "Fran Mayo",
    role: "Space Craft / Marketing Manager",
    avatar: `${IMG}/testimonial-space-craft.jpg`,
    logo: `${IMG}/logo-spacecraft.png`,
    company: "Space Craft",
  },
  {
    quote:
      "“We involve this team in every new product. They excel at their work and care about every detail, making each project special and unique.”",
    name: "Jesse Orrico",
    role: "Relevant Compliance / Product Owner",
    avatar: `${IMG}/testimonial-relevant.jpg`,
    logo: `${IMG}/logo-relevant.png`,
    company: "Relevant Compliance",
  },
];

export const benefits = [
  {
    title: "Your deadlines are our lifeblood",
    body: "Go ahead, flood us with project requests. Our convenient subscriptions offer retainer-level coverage at fixed, affordable monthly rates.",
  },
  {
    title: "Tap previously unattainable talent",
    body: "We’ve already vetted and assembled the most elite roster of specialists out there. Simply plug into our power outlet to crank up your brand.",
  },
  {
    title: "Cancel culture",
    body: "Scale on your terms and assume complete control over your creative needs by cancelling or upgrading your plan anytime.",
  },
  {
    title: "Endless revisions are the ultimate flex",
    body: "Free yourself from restrictive change order fees! We are committed to polishing your project until you think it’s shiny and perfect.",
  },
  {
    title: "Fast turnarounds, not idle runarounds",
    body: "By trimming fat from the bloated agency process, we’re able to meet deadlines at turn rates that average days not weeks.",
  },
  {
    title: "Our thinking sets us apart",
    body: "Every partnership comes with the strategic brainpower you’d expect from three decades of combined branding experience.",
  },
];

export type Plan = {
  label?: string;
  title?: string;
  description: string;
  price?: number;
  priceSubLabel?: string;
  priceDisclaimer?: string;
  buttonLabel: string;
  buttonLink: string;
  contactLabel?: string;
  contactLink?: string;
  included: string[];
};

const TYPEFORM = "https://x55sj0z6ud1.typeform.com/to/t2vE6xtj";

export const subscriptionPlans: Plan[] = [
  {
    label: "Most Popular",
    title: "Part-time Pro",
    description: "One part-time creative dedicated to your continuous stream of projects.",
    price: 10200,
    priceSubLabel: "/month",
    priceDisclaimer: "For ongoing tasks.",
    buttonLabel: "Subscribe now",
    buttonLink: `${TYPEFORM}#int=6oE6ozeq51Cxfcc8wC`,
    contactLabel: "Need more info?  Let’s chat.",
    contactLink: CALENDLY,
    included: [
      "Dedicated creative, 20 hrs weekly",
      "Two ongoing tasks",
      "Multiple revisions",
      "Access to 2 services",
      "Lightning turnarounds",
      "Pause or cancel anytime",
    ],
  },
  {
    label: "Best Value",
    title: "Full-time Premium",
    description: "One elite full-timer working simultaneously on multiple projects.",
    price: 15200,
    priceSubLabel: "/month",
    priceDisclaimer: "Your augmented team.",
    buttonLabel: "Subscribe now",
    buttonLink: `${TYPEFORM}#int=28o7sDa9P3KF8NO4gl`,
    contactLabel: "Still not sure?  Let’s discuss.",
    contactLink: CALENDLY,
    included: [
      "Senior creative, 40 hrs a week",
      "Up to 4 ongoing tasks",
      "Multiple revisions",
      "Access to 3 services",
      "For robust workloads",
      "Pause or cancel anytime",
    ],
  },
  {
    description: "Build your own subscription. We’ll tailor the perfect team.",
    buttonLabel: "Customize my plan",
    buttonLink: CALENDLY,
    included: [
      "Full access to all creative capabilities",
      "Coverage from kickoff to delivery",
      "Senior-level talent",
      "Creative direction",
      "Project management",
      "Easy add-on services mid-project",
    ],
  },
];

export const projectPlans: Plan[] = [
  {
    label: "Client Pick",
    title: "Brand Identity",
    description: "Complete brand build from kickoff to delivery in 6 weeks.",
    price: 32500,
    priceSubLabel: "/flat fee",
    priceDisclaimer: "Timeline: 6 weeks",
    buttonLabel: "Start Project",
    buttonLink: `${TYPEFORM}#int=cN23cn95L3KFaVWdQU`,
    contactLabel: "Need more info?  Let’s chat.",
    contactLink: CALENDLY,
    included: [
      "Brand Strategy",
      "Concept Development",
      "Visual Direction",
      "Brand Messaging",
      "Website/Socials Direction",
      "Brand Guidelines",
    ],
  },
  {
    label: "Award Winner",
    title: "Integrated Campaign",
    description: "Translate business objectives into results across all touch points.",
    price: 18600,
    priceSubLabel: "/flat fee",
    priceDisclaimer: "Timeline: 4-6 weeks",
    buttonLabel: "Start Project",
    buttonLink: `${TYPEFORM}#int=6oE4gr5Tzbd72pqfZ1`,
    contactLabel: "Need more info?  Let’s chat.",
    contactLink: CALENDLY,
    included: [
      "Messaging Strategy",
      "Multichannel Media Strategy",
      "Multiple Concept Directions",
      "Web/Social/Collateral Design",
      "Final Files Designed to Specs",
      "Content Launch Plan",
    ],
  },
  {
    label: "Hot Seller",
    title: "Website Update",
    description: "Maximize leads and engagement with a design and functionality refresh.",
    price: 42500,
    priceSubLabel: "/flat fee",
    priceDisclaimer: "Timeline: 12 weeks",
    buttonLabel: "Start Project",
    buttonLink: `${TYPEFORM}#int=9AQ9AL81H94Z6FG28a`,
    contactLabel: "Need more info?  Let’s chat.",
    contactLink: CALENDLY,
    included: [
      "Optimization audit",
      "Information Architecture",
      "UI/UX Design",
      "Full stack development",
      "SEO diagnostics",
      "Testing and launch",
    ],
  },
  {
    label: "Best-in-Class",
    title: "Custom Website",
    description: "End-to-end design and technology that best reflects your brand and vision.",
    price: 64000,
    priceSubLabel: "/flat fee",
    priceDisclaimer: "Timeline: 16 weeks",
    buttonLabel: "Start Project",
    buttonLink: `${TYPEFORM}#int=fZe28ja9P3KFgggfYZ`,
    contactLabel: "Need more info?  Let’s chat.",
    contactLink: CALENDLY,
    included: [
      "Digital strategy",
      "Concept development",
      "IA, Sitemap, UI/UX Design",
      "Full Stack Development",
      "E-commerce Integration",
      "Testing and launch",
    ],
  },
  {
    label: "Flexibility",
    title: "40-hrs Essentials Bucket",
    description: "Hourly coverage for crucial maintenance tasks, broken into a bite-sized bundle.",
    price: 4000,
    priceSubLabel: "/month",
    priceDisclaimer: "$100 per/hr",
    buttonLabel: "Unlock Coverage",
    buttonLink: CALENDLY,
    contactLabel: "Need more info?  Let’s chat.",
    contactLink: CALENDLY,
    included: [
      "Site maintenance",
      "SEO optimization",
      "Content updates",
      "Repricing",
      "Collateral design",
      "Marketing support",
    ],
  },
  {
    label: "Bandwidth",
    title: "60-hrs Intensive Bucket",
    description: "Hourly coverage for multiple complex tasks or two priority initiatives per month.",
    price: 5400,
    priceSubLabel: "/month",
    priceDisclaimer: "$90 per/hr",
    buttonLabel: "Unlock Coverage",
    buttonLink: CALENDLY,
    contactLabel: "Still not sure?  Let’s discuss.",
    contactLink: CALENDLY,
    included: [
      "Post blog articles",
      "Update site copy",
      "Expand products",
      "Event promo design",
      "Website maintenance",
      "Quick-turn projects",
    ],
  },
  {
    description: "Build your own project. Custom to meet your exact specs.",
    buttonLabel: "Customize my project",
    buttonLink: CALENDLY,
    contactLabel: "Need more info?  Let’s chat.",
    contactLink: CALENDLY,
    included: [
      "Full Creative Service Capabilities",
      "Coverage from Kickoff to Execution",
      "Award-Winning, Premium Talent",
      "Creative Direction",
      "Project Management",
      "Easy Add-On Services Mid-Project",
    ],
  },
];

export const faqs: { q: string; a: string[] }[] = [
  {
    q: "What distinguishes us from other agencies?",
    a: [
      "We have worked at the largest agencies in the world and we’ve owned our own digital development studios. From those experiences, we identified all the wasteful processes that inflate fees, over-complicate communications, and delay turnaround times. In creating our subscriptions and ready-made projects, we have streamlined creative services to include only what’s absolutely essential for achieving the best client outcomes. By eliminating the bloat, it allowed us to offer growing businesses access to high-end creative that they wouldn’t have otherwise been able to afford. We’re innovative. We’re doing it to serve you. And we’re exceptional at what we do. That’s what distinguishes us.",
    ],
  },
  {
    q: "Why not hire an in-house designer or freelancer?",
    a: [
      "In today’s job market, a senior creative will cost you six figures. It’ll take at least a couple months to recruit and onboard them. Then you’ll have to manage them, their personality, and their narrow area of expertise. With a subscription or ready-made project, you have access to multi-disciplined talent, all senior level, and we do the managing. As far as freelancers, the A-listers are usually booked, and those that are available are juggling a roster of other clients. They’re often undependable, and having to jump from one to another causes brand inconsistency.",
    ],
  },
  {
    q: "Are creative requests truly unlimited?",
    a: [
      "Once you’re a client, you’re free to submit as many requests as you’d like within your Project Workflow, and we’ll deliver them one-after-another, in order of priority, as defined by you. A Project Workflow is a queue of active requests serviced by your dedicated creative. Each request that comes is worked on one at a time. If you want two project requests serviced simultaneously, you would simply subscribe to our more robust plan with double the workflows and dedicated creatives.",
    ],
  },
  {
    q: "How fast will I receive my work?",
    a: [
      "Depends on the project requested. But, on average, we complete most design requests within 2-3 days. More complex requests require lengthier timelines. But we’re always upfront and reasonable about our estimated delivery dates, as well as any phases that require milestones to reach them.",
    ],
  },
  {
    q: "What’s your refund policy?",
    a: [
      "We work tirelessly to revise and tweak and refine until you love our work. Considering the amount of effort, attention, and quality that we pour into our work, we cannot issue refunds.",
    ],
  },
  {
    q: "What if I have a single project?",
    a: [
      "Our subscriptions work best for companies that have ongoing branding needs. If you’ve got a single project, we offer a full-service menu of prepackaged projects to suit most creative needs. If you don’t find the project you’re looking for, please book a chat and we’ll tailor a service to meet your exact needs.",
    ],
  },
  {
    q: "What don’t we do?",
    a: [
      "Our array of services are comprehensive. But there are a few areas that don’t fall within our expertise: Media buying, technical copywriting, and 3D modeling are a few. If you have something specific in mind, reach out and let’s discuss the specs.",
    ],
  },
  {
    q: "How do I submit a creative request?",
    a: [
      "Once you’ve signed up, you will receive an email that grants access to your client dashboard with a project request form that will walk you through the steps to initiate your job. Once submitted, your dedicated Project Manager will contact you within 24 hours and immediately assign an appropriate creative. You will begin receiving daily project updates that will continue until final delivery. Simple, easy, and thorough.",
    ],
  },
  {
    q: "Do I own my work?",
    a: [
      "Every piece of creative we develop is tailored specifically for your brand and 100% owned by you. We share access to all your native source files.",
    ],
  },
  {
    q: "How is my team assembled?",
    a: [
      "Your dedicated Project Manager will review your projected workflow before assigning the appropriate creative based on the personality of the brand and the nature and scope of the work. For more complex projects, your dedicated creative will change, depending on the phase of the project. For example, on a website development assignment, your dedicated creative would shift according to the stage of work: strategist, copywriter, art director, designer, developer.",
    ],
  },
  {
    q: "How soon can I submit a project request?",
    a: [
      "Immediately upon sign up, you will receive an email that grants access to your client dashboard with a project request form that will notify your dedicated Project Manager to assign your creative. From sign-up to the start of work happens within 24 hours.",
    ],
  },
  {
    q: "How do I upgrade, downgrade, or cancel?",
    a: [
      "Scaling is painless. For any changes to your plan, simply email your desired status update to subscribe@betteroff.studio. Upgrade costs are prorated during your current billing cycle.",
      "For downgrades, your plan will renew at the lower level on your next billing date. To cancel, all you have to do is email subscribe@betteroff.studio and we’ll take care of you!",
    ],
  },
];

export const feedArticle = {
  title: "Channel Islands Retains Its Roots.",
  meta: "Article - 7 minute read",
  href: `${SOURCE_ORIGIN}/feed/channel-islands-retains-its-roots`,
  image: `${IMG}/feed-channel-islands.jpg`,
  tint: "#156b8f",
};

export const footerColumns = [
  {
    title: "Sitemap",
    links: [
      { label: "Overview", href: "/" },
      { label: "Work", href: `${SOURCE_ORIGIN}/work` },
      { label: "Feed", href: `${SOURCE_ORIGIN}/feed` },
      { label: "Pricing", href: "#packages" },
      { label: "Contact", href: `${SOURCE_ORIGIN}/contact` },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms", href: `${SOURCE_ORIGIN}/terms-of-use` },
      { label: "Privacy", href: `${SOURCE_ORIGIN}/privacy-policy` },
    ],
  },
  {
    title: "Social",
    links: [
      { label: "Instagram", href: "https://www.instagram.com/betteroff.studio/" },
      {
        label: "Linkedin",
        href: "https://www.linkedin.com/company/betteroffstudio/?viewAsMember=true",
      },
    ],
  },
];

export const images = {
  creativeWith: `${IMG}/culture-loop_12.jpg`,
  getToKnow: `${IMG}/culture-loop_21.jpg`,
  clientWorkVideo: "/sites/betteroff/video/client-work.mp4",
  clientWorkPoster: "/sites/betteroff/video/client-work-poster.jpg",
};
