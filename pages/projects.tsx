import { useState } from "react";
import ProjectsNavbar from "../components/ProjecstNavbar";
import ProjectCard from "../components/ProjectCard";
import { projects as projectsData } from "../data";
import { Category } from "../type";
import { motion } from "framer-motion";
import { container, item } from "../animation";

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");
  const [showDetail, setShowDetail] = useState<number | null>(null);

  const handlerFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
      return;
    }

    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(newArray);
    setActive(category);
  };

  return (
    <div className="overflow-y-scroll px-5 py-2" style={{ height: "65vh" }}>
      <ProjectsNavbar
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative my-3 grid grid-cols-12 gap-4"
      >
        {projects.map((project) => (
          <motion.div
            key={project.name}
            variants={item}
            className="col-span-12 rounded-lg bg-gray-200 p-2 dark:bg-dark-200 sm:col-span-6 lg:col-span-4"
          >
            <ProjectCard
              project={project}
              showDetail={showDetail}
              setShowDetail={setShowDetail}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
