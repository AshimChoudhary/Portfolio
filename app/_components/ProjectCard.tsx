"use client";

import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ProjectTechnologiesMini from "./ProjectTechnologiesMini";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ProjectProps {
  id: string;
  heading: string;
  subheading: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  liveDemoUrl: string;
  sourceCodeUrl: string;
}

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  const { id, heading, imageUrl, techStack } = project;
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    // Animate card entrance
    gsap.fromTo(
      cardRef.current,
      {
        opacity: 0,
        y: 100,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          end: "top 20%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate image on hover with GSAP
    if (imageRef.current) {
      const imageElement = imageRef.current;

      imageElement.addEventListener("mouseenter", () => {
        gsap.to(imageElement.querySelector("img"), {
          scale: 1.1,
          duration: 0.6,
          ease: "power2.out",
        });
      });

      imageElement.addEventListener("mouseleave", () => {
        gsap.to(imageElement.querySelector("img"), {
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
        });
      });
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-[#F3F4F3] dark:bg-dark-200 rounded-lg p-4 sm:p-8 space-y-8 will-change-transform"
    >
      <Link
        href={`/work/${id}`}
        className="rounded-lg overflow-hidden block"
        ref={imageRef}
      >
        <Image
          src={imageUrl}
          width={1200}
          height={800}
          alt={heading}
          quality={90}
          priority={false}
          loading="lazy"
          className="w-full h-auto"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      <div>
        <h3 className="text-2xl sm:text-3xl font-semibold">{heading}</h3>
        <div className="mt-4 flex flex-col sm:flex-row justify-between gap-5">
          <ProjectTechnologiesMini techStack={techStack} />
          <Link
            href={`/work/${id}`}
            className="p-3 bg-primary hover:bg-primary/80 transition-colors duration-200 rounded-lg self-start sm:self-end"
          >
            <MoveUpRight className="size-5 sm:size-8 text-[#F3F4F3] dark:text-dark-200" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
