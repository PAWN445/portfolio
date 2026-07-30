import structure from "../assets/4core.jpg";
import enumerator from "../assets/enumerator.jpeg";
import enum1 from "../assets/enum1.jpg";
import enum2 from "../assets/enum2.jpg";
import college from "../assets/college.png";
import college1 from "../assets/college1.jpg";
import college2 from "../assets/college2.jpeg";
import college3 from "../assets/college3.jpeg";
import graphic from "../assets/graphic.jpg";
import graphics1 from "../assets/graphics1.jpg";
import graphics2 from "../assets/graphics2.jpg";
import marche from "../assets/marche.jpg";
import marche1 from "../assets/marche1.jpg";
import marche2 from "../assets/marche2.jpg";
import marche3 from "../assets/marche3.jpg";
import marche4 from "../assets/marche4.jpg";
import marche5 from "../assets/marche5.jpg";
import marche6 from "../assets/marche6.jpeg";
import marche7 from "../assets/marche7.jpg";
import ecommerce from "../assets/ecom.jpeg";
import jeffdatapc from "../assets/jeffdatapc.jpeg";
import jeffdatapc1 from "../assets/jeffdatapc1.jpeg";
import solar from "../assets/solar.jpg";
import solar1 from "../assets/solar1.mp4";
import solar2 from "../assets/solar2.mp4";
import sales1 from "../assets/sales1.mp4";
import sales2 from "../assets/sales2.mp4";
import sales3 from "../assets/sales3.mp4";
import sales4 from "../assets/sales4.mp4";

export interface Experience {
  year: string;
  role: string;
  org: string;
  location: string;
  photos: string[];
  videos?: string[];
  description: string;
  tags: string[];
  slug: string;
  story?: string;
}

export const experiences: Experience[] = [
  {
    year: "2026 — Present",
    role: "Try to Build Solar Company Services",
    org: "Business Venture",
    location: "Philippines",
    photos: [solar],
    videos: [solar1, solar2],
    description:
      "Solar company services business venture, selling solar products online through Social Media, customer support, and conduct site visits.",
    tags: ["Installation", "Electrical", "Monitoring"],
    slug: "solar-company-services",
    story:
      "In this jurney my Brother and I trying to build a Solar Company. this company started when my brother asking a question regarding on how to run a advertising in Facebook. then time flew by, he comeback to me and said you should try to study about solar energy and solar materials and equipments. We try to build a Solar Company then i said okay, Then i start to research how to compute the monthly bills. to fit the system size of solar setup and more. then i start to create a logo, website, product design, find the right supplier of materials and equipment, create a content, in this journey i found out how big the demand of our felow filipinos for affordable and sustainable energy. I Dont know how to explain the feelings when you are handle or manage the daily operations. from marketing, graphics, contents, contact the suppliers, assisting customers inquiries, ads manager. I've learned a lot every day — This is also I discovered how to integrate my technical knowledge with real business operations, allowing me to better understand both the technical and customer-facing aspects of the business.",
  },
  {
    year: "2024 — 2025",
    role: "Sales Marketing / Customer Support",
    org: "Jeffdata PC",
    location: "Tondo, Manila, PH",
    photos: [jeffdatapc, jeffdatapc1],
    videos: [sales1, sales2, sales3, sales4],
    description:
      "Assisted customers with product inquiries, order processing, creating video content, and after-sales support for a local computer hardware business.",
    tags: ["Customer Service", "Computer Hardware", "Video Content Creation"],
    slug: "sales-marketing-customer-support",
    story:
      "At Jeffdata PC, I've Learned a lot about the importance of clear and effective communication with customers. specially in terms of business and technical aspects — specially in computer parts and hardware this is not easy to explain in customers which not have a knowledge on technologies. Aside from assisting customers inquiries on product and processing orders, I've start to learn on how to create a video content creation to promote the business and products, this is the most important things that i never expected to do but over time, I learned to love it. in this job i experience the whole cycle of after-sales support from start of conversation questions unto solve the problems that customers encounter. This became a major factor in helping me appreciate the importance of customer experience.",
  },
  {
    year: "2021 — 2022",
    role: "Try to Build My Own E-Commerce Business",
    org: "Personal Business Venture",
    location: "Philippines",
    photos: [ecommerce],
    description:
      "Ecommerce business venture, selling products online through Shopee, Lazada, and TikTok Shop. Managed inventory, customer support, and order processing.",
    tags: ["Solar Lights", "Kitchenware", "Phone Accessories"],
    slug: "my-own-ecommerce-business",
    story:
      "During Pandemic I'm thinking how can i earn more money even while you are in your home and working, so i conduct research then i found what we called E-commerce and how to run the ads on social media — Then i try to sell product online like solar street lights, kitchenware, phone accessories using Shopee, Lazada, TikTok Shop, and Facebook Marketplace, facebook ads. In this Business Journey i experience a lot! on how to Hard managing business.: tracking the inventory, answering customers concerns and inquiries, and also processing orders, I handle all the tasks on my own. in this journey i learned a lot — like don't borrow money in the bank when you are startup, It's not just about selling the product Instead, it's about understanding the business dynamics and customer needs. 'Even though this journey was not successful, this journey was giving me a experience —  I experience the challenges firsthand as a business owner.",
  },
  {
    year: "2021 — 2023",
    role: "Admin Assistant",
    org: "Marche Pinas",
    location: "Baguio City, PH",
    photos: [marche, marche1, marche2, marche3, marche4, marche5, marche6, marche7],
    description:
      "Customer support, order processing, and inventory management for a local e-commerce business. Implemented a simple inventory tracking system to streamline operations.",
    tags: ["Shopee", "Lazada", "TikTok Shop", "Facebook Marketplace"],
    slug: "admin-assistant-marche-pinas",
    story:
      "Here at Marche Pinas, I've Become a Admin Assistant for a  local e-commerce business which selling using multiple platforms — Shopee, Lazada, TikTok Shop, at Facebook Marketplace. There was a lot of manual work at first. — track the stocks, confirming orders in multiple platforms, answering customers inquiries.",
  },
  {
    year: "2020",
    role: "Graphic Designer / Seasonal",
    org: "Collective Solutions",
    location: "Quezon City, PH",
    photos: [graphic, graphics1, graphics2],
    description:
      "Designed seasonal marketing materials for clients, including social media graphics, email templates, and promotional banners.",
    tags: ["Wedding Cards", "Holiday Cards", "Social Media Graphics"],
    slug: "graphic-designer-collective-solutions",
    story:
      "Here at Collective Solutions, I Became seasonal graphic designer we create a — wedding cards, holiday cards, social media graphics, this experience teach me valuable things: like visual hierarchy, spacing, and color combination — until now im using all this principle while im creating a web design and mobile apps. in this work I also realized the importance of being deadline-driven and managing my time effectively. specially in seasonal projects where fixed the dates. (etc, you don't need to late the Christmas card design). The design sensibility I learned here quietly influences every interface I create today.",
  },
  {
    year: "2019",
    role: "Enumerator",
    org: "Philippine Statistics Authority — 2019 Census of Population and Housing",
    location: "Metro Manila, PH",
    photos: [enumerator, enum1, enum2, college, college1, college2, college3],
    description:
      "Conducted household surveys and collected data for the 2019 Census of Population and Housing, contributing to national statistical analysis and planning.",
    tags: ["Field Surveys", "Data Collection"],
    slug: "enumerator-2019-census",
    story:
      "Bago pa man ako naging developer, naging bahagi ako ng 2019 Census of Population and Housing bilang enumerator para sa Philippine Statistics Authority. Naglakad ako house-to-house sa Metro Manila, nangolekta ng data para sa national statistical planning. Mahirap ito — pisikal na hirap, at kailangan ng pasensya para makausap ang iba't ibang klase ng residente. Pero itong experience na 'to ang nagbigay sa akin ng appreciation kung paano ginagamit ang raw data para sa malalaking desisyon sa antas ng bansa. Napansin ko rin kung gaano kahalaga ang accuracy at consistency sa pagkolekta ng impormasyon — isang prinsipyong dala-dala ko pa rin hanggang ngayon tuwing nagde-design ako ng database schema para sa mga apps.",
  },
  {
    year: "2019",
    role: "Intern / PHP Developer",
    org: "4Core Data Structure — CCTV Cabling System",
    location: "Quezon City, PH",
    photos: [structure],
    description:
      "Built a portfolio of PHP web apps for their CCTV cabling business, including a quotation builder, inventory system, and client portal.",
    tags: ["PHP", "Vanilla JS", "Vanilla CSS"],
    slug: "internship-4core-data-structure",
    story:
      "Dito nagsimula ang lahat. Bilang intern sa 4Core Data Structure, isang negosyo na nag-i-install ng CCTV cabling systems, ginawa ko yung unang totoong web apps ko gamit ang plain PHP, vanilla JavaScript, at vanilla CSS — walang frameworks, walang shortcuts, puro raw code. Ginawa ko yung isang quotation builder, simpleng inventory system, at client portal para sa negosyo nila. Mahirap ito nung una — kailangan kong intindihin mula zero kung paano gumagana ang backend, database queries, at server-side logic. Pero itong internship na 'to ang nagturo sa akin ng foundational na kaalaman sa web development na hanggang ngayon ay pinapahalagahan ko pa rin, kahit React at TypeScript na ang gamit ko ngayon. Minsan, kapag nahihirapan ako sa isang bagong konsepto, naaalala ko kung paano ko na-figure out yung mga bagay na ito noon — walang Stack Overflow shortcut, puro pag-aaral at pagsubok.",
  },
];