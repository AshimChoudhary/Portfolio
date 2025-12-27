"use client";

import Link from "next/link";
import { portfolioProjects } from "../_lib/constants";
import ProjectCard from "./ProjectCard";
import ShinyButton from "./ui/ShinyButton";
import { ChevronRight, ChevronDown } from "lucide-react";
import { useState } from "react";

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const initialProjects = 4;
  const displayedProjects = showAll
    ? portfolioProjects
    : portfolioProjects.slice(0, initialProjects);

  return (
    <div className="py-32" id="work">
      <div className="flex gap-4 flex-col sm:flex-row sm:items-center justify-between">
        <h2 className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold dark:text-stone-200">
          My portfolio
        </h2>

        <ShinyButton icon={<ChevronRight />}>
          <Link href="https://github.com/AshimChoudhary" target="_blank">
            All Projects
          </Link>
        </ShinyButton>
      </div>

      <div className="grid lg:grid-cols-2 gap-4 mt-8">
        {displayedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {portfolioProjects.length > initialProjects && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 bg-primary hover:bg-primary/80 text-white rounded-lg transition-colors duration-200 flex items-center gap-2 font-semibold"
          >
            {showAll ? "Show Less" : "Show More"}
            <ChevronDown
              className={`transition-transform duration-300 ${
                showAll ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectsSection;
