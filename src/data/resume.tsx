import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Anany Singh",
  location: "Delhi, IN",
  description:
    "In my 20s, roaming mostly on twitter",
  summary:
    "tldr; play games, watch sports, chase tech\nI dive into video games—from strategy to sheer chaos.\nFootball and basketball keep me yelling at screens.\nFinance is my newest obsession—markets, money, and all the madness.",
  avatarUrl: "/me.jpg",
  url: "https://anany.tech",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Postgres",
    "Docker",
    "Kubernetes",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Apocalypse3007",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/-anany-singh-/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Apocalypse3007",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Camarin AI",
      badges: [],
      location: "Remote",
      title: "Software Engineer Intern",
      logoUrl: "/atomic.png",
      start: "December 2024",
      end: "January 2025",
      description:
        "Worked on the intergration of backend with frontend of the Camarin AI platform.",
    },
  ],
  education: [
    {
      school: "IIIT Delhi",
      href: "https://iiitd.ac.in",
      degree: "Bachelor's Degree of Electronics & VLSI",
      logoUrl: "/iiitd.png",
      start: "2023",
      end: "2027(expected)",
    },
  ],
};