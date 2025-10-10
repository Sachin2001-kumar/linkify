import {
  HelpCircleIcon,
  LineChartIcon,
  Link2Icon,
  NewspaperIcon,
  QrCodeIcon,
} from "lucide-react";
export const NAV_LINKS = [
  {
    title: "Features",
    href: "/features",
    menu: [
      {
        title: "Link Shortening",
        tagline: "Shorten links and track their performance.",
        href: "/features/link-shortening",
        icon: Link2Icon,
      },
      {
        title: "Advanced Analytics",
        tagline: "Gain insights into who is clicking your links.",
        href: "/features/analytics",
        icon: LineChartIcon,
      },
    ],
  },
  {
    title: "Pricing",
    href: "./pricing",
  },
  {
    title: "Resources",
    href: "/resources",
    menu: [
      {
        title: "Blog",
        tagline: "Read articles on the latest trends in tech.",
        href: "/resources/blog",
        icon: NewspaperIcon,
      },
      {
        title: "Help",
        tagline: "Get answers to your questions.",
        href: "/resources/help",
        icon: HelpCircleIcon,
      },
    ],
  },
  {
    title: "Changelog",
    href: "/changelog",
  },
];
