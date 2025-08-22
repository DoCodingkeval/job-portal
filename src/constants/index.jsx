import {
  IconArrowRight,
  IconBriefcase,
  IconBuilding,
  IconCloudUp,
  IconRosetteDiscountCheck,
  icons,
  IconUserPlus,
  IconUsers,
  IconZoomIn,
} from "@tabler/icons-react";

const navLinks = [
  {
    id: 1,
    name: "Home",
    link: "",
  },
  {
    id: 2,
    name: "Find Job",
    link: "",
  },
  {
    id: 3,
    name: "Employers",
    link: "",
  },
  {
    id: 4,
    name: "Candidates",
    link: "",
  },
  {
    id: 5,
    name: "Pricing Plans",
    link: "",
  },
  {
    id: 6,
    name: "Customer Supports",
    link: "",
  },
];

const cardData = [
  {
    id: 1,
    number: "1,75,324",
    icon: <IconBriefcase />,
    title: "Live Job",
  },
  {
    id: 2,
    number: "97,354",
    icon: <IconBuilding />,
    title: "Companies",
  },
  {
    id: 3,
    number: "38,47,154",
    icon: <IconUsers />,
    title: "Candidates",
  },
  {
    id: 4,
    number: "7,532",
    icon: <IconBriefcase />,
    title: "New Jobs",
  },
];

const companiesData = [
  {
    id: 1,
    vacany: "Anesthesiologists",
    position: "45,904, Open Positions",
  },
  {
    id: 2,
    vacany: "Maxillofacial Surgeons",
    position: "74,874 Open Positions",
  },
  {
    id: 3,
    vacany: "Financial Manager",
    position: "61,391 Open Positions",
  },
  {
    id: 4,
    vacany: "Surgeons",
    position: "50,364 Open Positions",
  },
  {
    id: 5,
    vacany: "Software Developer",
    position: "43,359 Open Positions",
  },
  {
    id: 6,
    vacany: "Management Anyalisis",
    position: "93,046 Open Positions",
  },
  {
    id: 7,
    vacany: "Obstetricians-Gynecologists",
    position: "4,339 Open Positions",
  },
  {
    id: 8,
    vacany: "Psychiatrists",
    position: "18,599 Open Positions",
  },
  {
    id: 9,
    vacany: "IT Manager",
    position: "50,936 Open Positions",
  },
  {
    id: 10,
    vacany: "Orthodontists",
    position: "20,079 Open Positions",
  },
  {
    id: 11,
    vacany: "Data Scientist",
    position: "28,200 Open Positions",
  },
  {
    id: 12,
    vacany: "Operations Research Analysis",
    position: "16,627 Open Positions",
  },
];

const workSetupData = [
  {
    id: 1,
    step: "Create account",
    icon: <IconUserPlus />,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, sunt.",
  },
  {
    id: 2,
    step: "Upload CV/Resume",
    icon: <IconCloudUp />,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, sunt.",
  },
  {
    id: 3,
    step: "Find suitable job",
    icon: <IconZoomIn />,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, sunt.",
  },
  {
    id: 4,
    step: "Apply job",
    icon: <IconRosetteDiscountCheck />,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, sunt.",
  },
];

const FooterDetails = [
  {
    id: 1,
    title: "Quick Link",
    li: ["About", "Contact", "Pricing", "Blog"],
  },
  {
    id: 2,
    title: "Candidate",
    li: [
      "Browse Jobs",
      "Browse Employees",
      "Candidate Dashboard",
      "Saved Jobs",
    ],
  },
  {
    id: 3,
    title: "Employers",
    li: [
      "Post a Job",
      "Browse Candidates",
      "Employers Dashboard",
      "Applications",
    ],
  },
  {
    id: 4,
    title: "Support",
    li: ["Faqs", "Privacy Policy", "Terms & Conditions"],
  },
];

export { navLinks, cardData, companiesData, workSetupData, FooterDetails };
