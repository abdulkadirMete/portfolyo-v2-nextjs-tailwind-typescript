import { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { IProject } from "../type";
import { motion } from "framer-motion";

import Image from "next/image";
import { container, item } from "../animation";

const ProjectCard: FunctionComponent<{
  project: IProject;
  showDetail: null | number;
  setShowDetail: (id: null | number) => void;
}> = ({
  project: {
    id,
    name,
    image_path,
    category,
    deployed_url,
    description,
    github_url,
    key_techs,
  },
  showDetail,
  setShowDetail,
}) => {
  return (
    <div>
      <Image
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetail(id)}
        layout="responsive"
        height="150"
        width="300"
      />

      {/* <img
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetail(true)}
      /> */}
      <motion.p variants={item} className="my-2 text-center">
        {name}
      </motion.p>

      {showDetail === id && (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="absolute top-0 left-0 z-10 grid h-auto w-full gap-x-12 bg-gray-100 p-2 text-black dark:bg-dark-100 dark:text-white md:grid-cols-2 md:p-10"
        >
          <div>
            {/* <img src={image_path} alt={name} /> */}

            <motion.div variants={item} className='border-4 border-white'>
              <Image
                src={image_path}
                alt={name}
                layout="responsive"
                height="150"
                width="300"
              />
            </motion.div>
            <motion.div
              variants={item}
              className="my-4 flex justify-center space-x-3"
            >
              <a
                href={github_url}
                className="flex items-center space-x-3 bg-gray-200 px-4 py-2 text-lg dark:bg-dark-200"
              >
                <AiFillGithub /> <span>Github</span>
              </a>
              <a
                href={deployed_url}
                className="flex items-center space-x-3 bg-gray-200 px-4 py-2 text-lg dark:bg-dark-200"
              >
                <AiFillProject /> <span>Project</span>
              </a>
            </motion.div>
          </div>

          <div>
            <motion.h2
              variants={item}
              className="mb-3 text-xl font-medium md:text-2xl"
            >
              {name}
            </motion.h2>
            <motion.h3 variants={item} className="mb-3 font-medium">
              {description}
            </motion.h3>

            <motion.div
              variants={item}
              className="mt-5 flex flex-wrap space-x-2 text-sm tracking-wider"
            >
              {key_techs.map((tech) => (
                <span
                  key={tech}
                  className="rounde-sm my-1 bg-gray-200 px-2 py-1 dark:bg-dark-200"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>

          <button
            onClick={() => setShowDetail(null)}
            className="absolute top-3 right-3 rounded-full bg-gray-200 p-1 focus:outline-none dark:bg-dark-200"
          >
            <MdClose size={30} />
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectCard;
