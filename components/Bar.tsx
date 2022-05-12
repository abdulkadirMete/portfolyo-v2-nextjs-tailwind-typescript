import { FunctionComponent, useEffect } from "react";

import { ISkill } from "../type";
import { motion } from "framer-motion";
const Bar: FunctionComponent<{ value: ISkill }> = ({
  value: { Icon, level, name },
}) => {
  
  // animation
  const barWidth = `${level}%`;

  const variants = {
    initial: { width: 0 },
    animate: {
      width: barWidth,
      transition: {
        duration: 0.4,
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <div className="dark:bg-black-500 my-2 rounded-full bg-gray-300 text-white dark:bg-dark-300">
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        className="flex items-center rounded-full bg-gradient-to-r from-green to-blue-500 px-4 py-1"
      >
        <Icon className="mr-3" /> {name}
      </motion.div>
    </div>
  );
};
export default Bar;
