import { GetStaticPropsContext } from "next";
import React from "react";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import { motion } from "framer-motion";
import { container, item } from "../animation";

const index = () => {

  return (
    <div className="flex flex-grow flex-col px-6 pt-1 ">
      <h6 className="my-3 text-base font-medium">
        I am currently pursuing B.Tech Degree(Final Year) in Computer Science
        Engineering from Academy of Technology. I have 3+ years of experience in
        Web Development and I have a Youtube Channel where I teach Full Stack
        Web Development
      </h6>
      <div
        className="mt-5 flex-grow bg-gray-400 p-4 dark:bg-dark-100 "
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h4 className="my-3 text-xl font-semibold tracking-wide">
          What I am doing
        </h4>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="my-3 grid gap-6 md:grid-cols-2"
        >
          {/* children's initial and animate property should be same as the parent during a stagger effect  */}
          {services.map((service) => (
            <motion.div
              variants={item}
              className="col-span-2 rounded-lg bg-gray-200 p-2 dark:bg-dark-200 md:col-span-1 "
              key={service.title}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default index;

// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   const res = await fetch("http://localhost:3000/api/services");
//   const data = await res.json();

//   return {
//     props: { services: data },
//   };
// };
