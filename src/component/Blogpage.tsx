import solar from "../assets/solar.jpg";
import jeffdatapc from "../assets/jeffdatapc.jpeg";
import ecommerce from "../assets/ecom.jpeg";
import marche2 from "../assets/marche2.jpg";
import graphics4 from "../assets/graphics4.jpeg";
import enumerator from "../assets/enumerator.jpeg";

function Camera({ className, strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}

interface StoryEntry {
  date: string;
  title: string;
  photo: string | null;
  story: string;
  tags: string[];
}

const entries: StoryEntry[] = [
  {
    date: "2026 — Present",
    title: "Try to Build Solar Company Services",
    photo: solar,
    story:
      "In this jurney my Brother and I trying to build a Solar Company. this company started when my brother asking a question regarding on how to run a advertising in Facebook. then time flew by, he comeback to me and said you should try to study about solar energy and solar materials and equipments. We try to build a Solar Company then i said okay, Then i start to research how to compute the monthly bills. to fit the system size of solar setup and more. then i start to create a logo, website, product design, find the right supplier of materials and equipment, create a content, in this journey i found out how big the demand of our felow filipinos for affordable and sustainable energy. I Dont know how to explain the feelings when you are handle or manage the daily operations. from marketing, graphics, contents, contact the suppliers, assisting customers inquiries, ads manager. I've learned a lot every day — This is also I discovered how to integrate my technical knowledge with real business operations, allowing me to better understand both the technical and customer-facing aspects of the business.",
    tags: ["Installation", "Electrical", "Monitoring"],
  },
  {
    date: "2024 — 2025",
    title: "Sales Marketing and Customer Service",
    photo: jeffdatapc,
    story:
      "At Jeffdata PC, I've Learned a lot about the importance of clear and effective communication with customers. specially in terms of business and technical aspects — specially in computer parts and hardware this is not easy to explain in customers which not have a knowledge on technologies. Aside from assisting customers inquiries on product and processing orders, I've start to learn on how to create a video content creation to promote the business and products, this is the most important things that i never expected to do but over time, I learned to love it. in this job i experience the whole cycle of after-sales support from start of conversation questions unto solve the problems that customers encounter. This became a major factor in helping me appreciate the importance of customer experience.",
    tags: ["Customer Service", "Computer Hardware", "Video Content Creation"],
  },
  {
    date: "2021 — 2022",
    title: "Try to Build My Own E-Commerce Business",
    photo: ecommerce,
    story:
      "During Pandemic I'm thinking how can i earn more money even while you are in your home and working, so i conduct research then i found what we called E-commerce and how to run the ads on social media — Then i try to sell product online like solar street lights, kitchenware, phone accessories using Shopee, Lazada, TikTok Shop, and Facebook Marketplace, facebook ads. In this Business Journey i experience a lot! on how to Hard managing business.: tracking the inventory, answering customers concerns and inquiries, and also processing orders, I handle all the tasks on my own. in this journey i learned a lot — like don't borrow money in the bank when you are startup, It's not just about selling the product Instead, it's about understanding the business dynamics and customer needs. 'Even though this journey was not successful, this journey was giving me a experience —  I experience the challenges firsthand as a business owner.",
    tags: ["Solar Lights", "Kitchenware", "Phone Accessories"],
  },
  {
    date: "2021 — 2023",
    title: "Admin Assistant",
    photo: marche2,
    story:
      "Here at Marche Pinas, I've Become a Admin Assistant for a  local e-commerce business which selling using multiple platforms — Shopee, Lazada, TikTok Shop, at Facebook Marketplace. There was a lot of manual work at first. — track the stocks, confirming orders in multiple platforms, answering customers inquiries.",
    tags: ["Shopee", "Lazada", "TikTok Shop", "Facebook Marketplace"],
  },
    {
    date: "2020",
    title: "Seasonal Graphic Designer",
    photo: graphics4,
    story:
      "Here at Collective Solutions, I Became seasonal graphic designer we create a — wedding cards, holiday cards, social media graphics, this experience teach me valuable things: like visual hierarchy, spacing, and color combination — until now im using all this principle while im creating a web design and mobile apps. in this work I also realized the importance of being deadline-driven and managing my time effectively. specially in seasonal projects where fixed the dates. (etc, you don't need to late the Christmas card design). The design sensibility I learned here quietly influences every interface I create today.",
    tags: ["Wedding Cards", "Holiday Cards", "Social Media Graphics"],
  },
    {
    date: "2019",
    title: "Enumerator",
    photo: enumerator,
    story:
      "When I was a college student my College friends and I, Planning to apply a part time job while semester break, We became part of the 2019 Census of Population and Housing as an enumerator for the Philippine Statistics Authority. I walked from house to house in Metro Manila, collecting data for national statistical planning. It was physically demanding and required patience to communicate with people from different backgrounds. However, this experience gave me appreciation for how raw data is used in making significant decisions at the national level. I also realized the importance of accuracy and consistency in data collection — a principle I still carry with me today when designing database schemas for apps.",
    tags: ["Field Surveys", "Data Collection"],
  },
];

interface PhotoFrameProps {
  photo: string | null;
  alt: string;
}

function PhotoFrame({ photo, alt }: PhotoFrameProps) {
  if (photo) {
    return (
      <img
        src={photo}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover"
      />
    );
  }
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[#161616] text-neutral-600">
      <Camera className="h-6 w-6" strokeWidth={1.5} />
      <span className="font-inter text-[10px] font-medium uppercase tracking-wide">
        Add photo
      </span>
    </div>
  );
}

export default function BlogPage() {
  const accent = "#C1443C";

  return (
    <div className="min-h-screen w-full bg-black font-inter text-white">


      {/* Header */}
      <section className="border-b border-neutral-900 px-8 pb-16 pt-14 text-center sm:px-16">
        <p
          className="font-poppins text-sm font-bold uppercase tracking-[0.2em]"
          style={{ color: accent }}
        >
          Stories
        </p>
        <h1 className="mt-3 font-poppins text-4xl font-extrabold sm:text-5xl">
          Blog
        </h1>
        <p className="mx-auto mt-6 max-w-xl font-inter text-[15px] leading-relaxed text-neutral-400">
          Mga kwento sa likod ng bawat larawan — mula sa unang deploy hanggang
          sa mga gabing puro debugging.
        </p>
      </section>

      {/* Alternating story entries */}
      <section className="mx-auto max-w-5xl px-8 py-20 sm:px-16">
        <div className="space-y-20">
          {entries.map((entry, i) => {
            const reversed = i % 2 === 1;
            return (
              <article
                key={i}
                className={`flex flex-col gap-8 sm:gap-12 ${
                  reversed ? "sm:flex-row-reverse" : "sm:flex-row"
                } sm:items-center`}
              >
                {/* Photo */}
                <div className="h-56 w-full shrink-0 overflow-hidden rounded-xl border border-neutral-800 sm:h-72 sm:w-[42%]">
                  <PhotoFrame photo={entry.photo} alt={entry.title} />
                </div>

                {/* Story */}
                <div className="min-w-0 flex-1">
                  <span
                    className="font-poppins text-[13px] font-bold"
                    style={{ color: accent }}
                  >
                    {entry.date}
                  </span>
                  <h2 className="mt-2 font-poppins text-2xl font-bold text-white sm:text-3xl">
                    {entry.title}
                  </h2>
                  <p className="mt-4 text-[15px] leading-relaxed text-neutral-400">
                    {entry.story}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {entry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-neutral-800 bg-[#0d0d0d] px-2.5 py-1 text-[11px] font-medium text-neutral-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}