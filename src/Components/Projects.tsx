import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconCode,
  IconMail,
  IconMovie,
  IconShoppingCart,
  IconCloud,
  IconMessage,
} from "@tabler/icons-react";
import Image from "next/image";

export default function BentoGridDemo() {
  return (
    <div className="flex flex-col items-center mt-24 mb-7">
      <BentoGrid className="max-w-4xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

// Component to Show Image Instead of Skeleton
const ProjectImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
    <Image src={src} alt={alt} width={300} height={200} className="object-cover w-full h-full" />
  </div>
);

// Your Project Data
const items = [
  {
    title: "Email Spam Classifier",
    description: "A Machine Learning model to detect spam emails.",
    header: <ProjectImage src="/Classification.jpg" alt="Email Spam Classifier" />,
    icon: <IconMail className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Movie Recommendation System",
    description: "A recommendation system suggesting movies based on user preferences.",
    header: <ProjectImage src="/movie.jpg" alt="Movie Recommendation System" />,
    icon: <IconMovie className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio showcasing skills and projects.",
    header: <ProjectImage src="/portfolio.jpg" alt="Portfolio Website" />,
    icon: <IconCode className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "E-commerce Clone",
    description: "A fully functional e-commerce website built using modern web technologies.",
    header: <ProjectImage src="/Ecommarce.jpg" alt="E-commerce Clone" />,
    icon: <IconShoppingCart className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Weather App",
    description: "A real-time weather application using APIs.",
    header: <ProjectImage src="/weather.png" alt="Weather App" />,
    icon: <IconCloud className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Chat Application",
    description: "A real-time chat application with authentication.",
    header: <ProjectImage src="/Chat.png" alt="Chat Application" />,
    icon: <IconMessage className="h-4 w-4 text-neutral-500" />,
  },
];
