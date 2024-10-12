import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function Projects() {
  const features = [
    {
      title: "CoolShade",
      description:
        "Protect Nurture Accessible our heritage and culture | SIH Project",
      icon: <IconTerminal2 />, // Replace with an appropriate icon
    },
    {
      title: "Pics",
      description: "Pics - Image Hosting Made Easy",
      icon: <IconEaseInOut />, // Replace with an appropriate icon
    },
    // New projects
    {
      title: "Sopplayer",
      description: "Sopplayer - HTML5 Stylish Video Player",
      icon: <IconTerminal2 />, // Replace with an appropriate icon
    },
    {
      title: "Rookus",
      description:
        "Rookus is a platform that revolutionizes the fashion industry by connecting designers, vendors, and customers globally.",
      icon: <IconEaseInOut />, // Replace with an appropriate icon
    },
    {
      title: "AudiPlay",
      description: "AudiPlay - A Free HTML5 Audio Player",
      icon: <IconCurrencyDollar />, // Replace with an appropriate icon
    },
    {
      title: "WebScrapperJS",
      description:
        "WebScrapperJS - Get Content/HTML of any website without being blocked by CORS even using JavaScript by WhollyAPI",
      icon: <IconCloud />, // Replace with an appropriate icon
    },
    {
      title: "shade-vscode-theme",
      description:
        "Shade Theme is a modern, dark theme for Visual Studio Code with a sophisticated shadow aesthetic",
      icon: <IconRouteAltLeft />, // Replace with an appropriate icon
    },
    {
      title: "DevArt",
      description: "A Blog made using Dev.to API",
      icon: <IconHelp />, // Replace with an appropriate icon
    },
    {
      title: "DevSuit",
      description:
        "DevSuit is an innovative platform designed to connect students and companies through hackathons and collaborative events.",
      icon: <IconCurrencyDollar />, // Replace with an appropriate icon
    },
    {
      title: "Multiversal",
      description:
        "Multiversal is a creative universe where words, music, and stories converge.",
      icon: <IconCloud />, // Replace with an appropriate icon
    },
    {
      title: "Apped",
      description:
        "apped.me is an open-source app store platform designed to host, discover, and distribute various applications.",
      icon: <IconRouteAltLeft />, // Replace with an appropriate icon
    },
    {
      title: "universal-image-component",
      description:
        "universal-img-component is a versatile React component that simplifies handling images in various modes.",
      icon: <IconHelp />, // Replace with an appropriate icon
    },
    {
      title: "ShowdownCSS",
      description:
        "Welcome to ShowdownCSS, the CSS library made for styling Markdown content parsed by Showdown!",
      icon: <IconAdjustmentsBolt />, // Replace with an appropriate icon
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({ title, description, icon, index }) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
