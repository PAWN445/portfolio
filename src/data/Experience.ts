import structure from "../assets/4core.jpg";
import enumerator from "../assets/enumerator.jpeg";
import graphic from "../assets/graphic.jpg";
import marche from "../assets/marche.jpg";
import ecommerce from "../assets/ecom.jpeg";
import jeffdatapc from "../assets/jeffdatapc.jpeg";
import solar from "../assets/solar.jpg";

export interface Experience {
  year: string;
  role: string;
  org: string;
  location: string;
  /** One or more images shown as a sliding gallery on the blog post page.
   *  Just add more paths to the array to get more slides — no other code changes needed. */
  photos: string[];
  /** Optional video (mp4/webm) shown as an extra slide after the photos.
   *  Import it the same way as the images above, e.g.:
   *  import jeffdataReel from "../assets/jeffdata-reel.mp4";
   *  then set video: jeffdataReel */
  video?: string;
  description: string;
  tags: string[];
  /** URL-safe id used for the /blog/:slug route. Keep lowercase, hyphenated. */
  slug: string;
  /** Longer version of the story shown on the individual blog post page.
   *  Falls back to `description` if left empty. */
  story?: string;
}

export const experiences: Experience[] = [
  {
    year: "2026 — Present",
    role: "Try to Build Solar Company Services",
    org: "Personal Business Venture",
    location: "Philippines",
    photos: [solar],
    description:
      "Solar company services business venture, selling solar products online through Social Media, customer support, and conduct site visits.",
    tags: ["Installation", "Electrical", "Monitoring"],
    slug: "solar-company-services",
    story:
      "I've dreamed for a long time that one day i'am become a owner/ceo of a company na hindi lang online-based kundi may totoong physical presence din — ganito yung Solar Company Services. Nagsimula ito sa curiosity ko sa solar energy, na lalo pang lumaki nung nakatrabaho ko yung GoSolar / Suntastic Solar Corp project bilang developer. Doon ko napansin kung gaano kalaki ang demand ng mga Pilipino para sa mas mura at sustainable na energy source. Kaya naisip kong subukan — mag-alok ng solar products sa social media, mag-conduct ng site visits, at personal na sagutin yung mga katanungan ng customers. Iba yung feeling kapag ikaw mismo yung nagbebenta at nag-aasikaso ng buong operations, mula sa marketing hanggang sa after-sales support. Marami pa akong natututunan araw-araw — pero dito ko rin nakikita kung paano pinagsasama ang technical background ko sa totoong business.",
  },
  {
    year: "2024 — 2025",
    role: "Sales Marketing / Customer Support",
    org: "Jeffdata PC",
    location: "Tondo, Manila, PH",
    photos: [jeffdatapc],
    description:
      "Assisted customers with product inquiries, order processing, creating video content, and after-sales support for a local computer hardware business.",
    tags: ["Customer Service", "Computer Hardware", "Video Content Creation"],
    slug: "sales-marketing-customer-support",
    story:
      "Sa Jeffdata PC, natutunan ko kung gaano kahalaga ang malinaw at maayos na komunikasyon sa customer, lalo na sa negosyong technical ang mga produkto — computer hardware kasi hindi laging madaling ipaliwanag sa mga customer na hindi techie. Bukod sa pag-assist sa product inquiries at order processing, nagsimula rin akong gumawa ng video content para sa social media ng negosyo, isang bagay na hindi ko inaasahang gagawin pero natutunan kong mahalin. Dito ko rin naranasan yung buong cycle ng after-sales support — mula sa unang tanong ng customer hanggang sa pag-solve ng mga isyu pagkatapos ng bili. Malaking factor 'to sa naging appreciation ko sa customer experience, isang bagay na dala-dala ko pa rin ngayon kapag nagdi-design ako ng mga interface at flows para sa mga app na ginagawa ko.",
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
      "Bago pa man ako naging developer, sinubukan ko munang magnegosyo online — nagbenta ako ng iba't ibang produkto tulad ng solar lights, kitchenware, at phone accessories sa Shopee, Lazada, at TikTok Shop. Dito ko unang naranasan yung totoong hirap ng pagmamanage ng negosyo: pag-track ng inventory, pagsagot sa mga katanungan ng customers, at pag-proseso ng orders, lahat halos ginawa ko mag-isa. Marami akong natutunan sa panahong ito — hindi lang tungkol sa pagbebenta kundi kung paano talaga umiikot ang isang maliit na negosyo. Kahit hindi 'to naging malaking success, itong experience na 'to ang isa sa mga dahilan kung bakit gustong-gusto kong bumuo ng mga inventory at business management systems ngayon — dahil naranasan ko mismo yung problema bilang negosyante bago ko pa 'to naging solusyon bilang developer.",
  },
  {
    year: "2021 — 2023",
    role: "Admin Assistant",
    org: "Marche Pinas",
    location: "Baguio City, PH",
    photos: [marche],
    description:
      "Customer support, order processing, and inventory management for a local e-commerce business. Implemented a simple inventory tracking system to streamline operations.",
    tags: ["Shopee", "Lazada", "TikTok Shop", "Facebook Marketplace"],
    slug: "admin-assistant-marche-pinas",
    story:
      "Sa Marche Pinas, naging admin assistant ako para sa isang local e-commerce business na nagbebenta sa maraming platform nang sabay — Shopee, Lazada, TikTok Shop, at Facebook Marketplace. Sobrang dami ng manual na gawain nung una — pag-track ng stock, pag-uugnay ng orders sa iba't ibang platform, pagsagot sa mga tanong ng customers. Dito ko na-realize na kailangan ng mas madaling paraan, kaya nag-alok akong gumawa ng simpleng inventory tracking system para mabawasan yung human error at ma-streamline yung operations. Simple lang siya nung una — spreadsheet-based pa nga — pero yun na yung unang beses na nakita ko kung paano ang isang maliit na tool ay makakatulong nang malaki sa isang negosyo. Itong experience na 'to, kasabay ng background ko sa PHP, ang naging foundation ko papunta sa software development.",
  },
  {
    year: "2020",
    role: "Graphic Designer / Seasonal",
    org: "Collective Solutions",
    location: "Quezon City, PH",
    photos: [graphic],
    description:
      "Designed seasonal marketing materials for clients, including social media graphics, email templates, and promotional banners.",
    tags: ["Wedding Cards", "Holiday Cards", "Social Media Graphics"],
    slug: "graphic-designer-collective-solutions",
    story:
      "Bilang seasonal graphic designer sa Collective Solutions, ginawa ko yung iba't ibang marketing materials para sa mga clients — wedding cards, holiday cards, social media graphics, at email templates. Kahit hindi ito puro coding, itong experience na 'to ang nagturo sa akin ng mahalagang bagay: yung kahalagahan ng visual hierarchy, spacing, at kulay — mga prinsipyo na hanggang ngayon ay ginagamit ko pa rin kapag nagde-design ako ng UI para sa mga apps at websites. Nakita ko ring mahalaga ang deadline-driven na trabaho, lalo na sa seasonal projects na may fixed na petsa (halimbawa, hindi mo pwedeng i-late yung Christmas card design past Christmas). Itong design sensibility na natutunan ko dito ang tahimik na sumasama sa bawat interface na ginagawa ko ngayon.",
  },
  {
    year: "2019",
    role: "Enumerator",
    org: "Philippine Statistics Authority — 2019 Census of Population and Housing",
    location: "Metro Manila, PH",
    photos: [enumerator],
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