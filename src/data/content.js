import { BarChart3, Cpu, GraduationCap, Globe, Leaf, Sprout } from "lucide-react";
import packedFruit from "../assets/images/packed-fruit.webp";
import teaEstate from "../assets/images/tea-estate.webp";
import stageFruit from "../assets/images/stage-fruit.webp";

export const services = [
  {
    icon: Sprout,
    title: "Sustainable farming",
    desc: "Regenerative practices that restore soil, save water and build biodiversity while keeping the orchard profitable.",
    features: ["Soil health restoration", "Moving to organic", "Water conservation", "Biodiversity management"],
  },
  {
    icon: Leaf,
    title: "Crop advisory and consultancy",
    desc: "Agronomists who help you choose varieties, plan nutrition, prevent disease and time the harvest.",
    features: ["Variety selection", "Nutrient management", "Disease prevention", "Harvest timing"],
  },
  {
    icon: BarChart3,
    title: "Farm operations management",
    desc: "We plan, run, monitor and improve day-to-day work on the farm, so nothing falls between seasons.",
    features: ["Production planning", "Resource management", "Supply chain", "Financial tracking"],
  },
  {
    icon: Cpu,
    title: "Farm technology",
    desc: "Sensors, drones and data that show what the trees need and when, from irrigation to pest control.",
    features: ["Field sensors", "Drone crop monitoring", "Predictive analytics", "Automated irrigation"],
  },
  {
    icon: GraduationCap,
    title: "Training for farmers",
    desc: "Practical courses that give farmers and farm teams modern skills they can use the next morning.",
    features: ["Hands-on workshops", "Digital skills", "Farm business skills", "Climate-smart methods"],
  },
  {
    icon: Globe,
    title: "Market access",
    desc: "Links to local and export buyers, with the quality standards and post-harvest handling they expect.",
    features: ["Buyer linkages", "Quality standards", "Post-harvest handling", "Export support"],
  },
];

export const projects = [
  {
    slug: "mutara",
    title: "Mutara Orchards avocado development",
    location: "Mutara, Laikipia, Kenya",
    image: packedFruit,
    imageAlt: "Hass avocados packed in green crates",
    summary:
      "A new orchard of Hass and Fuerte trees, planted at 6 × 4 m spacing with Napier grass windbreaks, as the first step of a project that grows, processes and sells its own fruit.",
    impact: "Every new planting block laid out on the 6 × 4 m spacing plan.",
    results: [
      { figure: "2 years", text: "from planting to first fruit" },
      { figure: "6 × 4 m", text: "tree spacing, for easier orchard work and higher yield" },
      { figure: "2 varieties", text: "Hass and Fuerte, to spread risk" },
      { figure: "1 facility", text: "planned for avocado oil processing" },
    ],
  },
  {
    slug: "chemusot",
    title: "Chemusot tea estate conversion",
    location: "Chemusot, Kenya",
    image: teaEstate,
    imageAlt: "Tea estate with a red murram road",
    summary:
      "A greenfield project turning tea plantation into a modern avocado orchard, planted in phases.",
    impact: "40% of the planned orchard is already in the ground.",
    results: [
      { figure: "32 ha", text: "planted in the first phase" },
      { figure: "80 ha", text: "total orchard planned" },
      { figure: "Tea → avocado", text: "a full change of land use" },
      { figure: "2027", text: "target year for full establishment" },
    ],
  },
  {
    slug: "souk",
    title: "Souk Farms avocado development",
    location: "Kigali and Southern Rwanda",
    image: stageFruit,
    imageAlt: "Avocados growing on a tree",
    summary:
      "Technical consultancy covering orchard layout, irrigation design, soil and drainage analysis and disease prevention for large-scale production.",
    impact: "A full technical assessment of every site before planting.",
    results: [
      { figure: "2 regions", text: "assessed for orchard suitability" },
      { figure: "20 L", text: "of water per tree, twice a week" },
      { figure: "Raised mounds", text: "for healthier roots and fewer disease problems" },
      { figure: "1 drainage plan", text: "to stop waterlogging" },
    ],
  },
];

export const stats = [
  { value: "12,500+", label: "farmers supported" },
  { value: "85,000+", label: "acres managed" },
  { value: "200,000+", label: "tons harvested" },
  { value: "350+", label: "communities reached" },
];

export const testimonials = [
  {
    quote:
      "I am happy with Isinya and would like to offer regional open days and farmer sensitisation programs. I would like to visit the farm to have a better experience.",
    name: "Phanuel",
    role: "Smallholder coordinator, Rwanda",
  },
  {
    quote: "Welcoming reception. I am committed to Isinya and I look forward to further cooperation.",
    name: "Seun Rasheed",
    role: "Souk Ltd, Rwanda",
  },
  {
    quote:
      "Working with plantED has been a game-changer for our community. We now have food security year-round.",
    name: "Fatima Ahmed",
    role: "Community leader, Tanzania",
  },
];

export const clients = [
  "Menegai",
  "AAA",
  "Mutara Orchards",
  "Mt Elgon",
  "Chesumot Tea",
  "Gecheha",
  "Eboss",
  "Kisima",
  "Osti Global Tanzania",
  "Mehta Group Uganda",
  "Sasini",
  "KFM Kitui",
  "Panacol Kitale",
  "Africado",
  "Granot Agdevco",
  "Eastern Orchards",
  "EAGA",
  "Borana",
  "Sanyati",
  "Delamere & Murula",
  "Forest Foods",
  "Engineer Kamau",
  "Lewa Downs",
  "Cullen",
];
