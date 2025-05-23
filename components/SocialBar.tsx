import { Home, Github, Linkedin, Mail, X, Twitter } from "lucide-react";
import { FloatingDock } from "./FloatingDock";

// Define your navigation items for the floating dock
const navItems = [
  { title: "Home", icon: <Home />, href: "#" },
  { title: "GitHub", icon: <Github />, href: "https://github.com/Apocalypse3007" },
  { title: "LinkedIn", icon: <Linkedin />, href: "https://www.linkedin.com/in/-anany-singh-/" },
  { title: "X", icon: <Twitter />, href: "https://x.com/Apocalypse3007" },
  { title: "Email", icon: <Mail />, href: "mailto:anany.3007@gmail.com" },
];


export default function SocialBar() {
  return (
    // You can add className for fixed positioning if you want
    <FloatingDock items={navItems} />
  );
} 