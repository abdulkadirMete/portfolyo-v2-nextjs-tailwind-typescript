// stagger fade
export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.1,
    },
  },
};

export const item = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0 },
};
