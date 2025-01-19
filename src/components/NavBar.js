import { Home, User, Briefcase, FileText } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";

export default function NavBarDemo() {
  const navItems = [
    { name: "Home", url: "#", icon: Home },
    { name: "About", url: "/about", icon: User },
    { name: "Projects", url: "#projects", icon: Briefcase },
    { name: "Contact", url: "#contact", icon: FileText },
  ];

  return <NavBar items={navItems} />;
}
