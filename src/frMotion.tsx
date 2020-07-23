export const menuVariants = {
  hidden: {
    x: "100vw",
    opacity: 0,
    transition: {
      delay: 0.5,
    },
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      mass: 0.3,
    },
  },
};

export const listVariants = {
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
  hidden: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

export const listChildVariants = {
  hidden: {
    y: 60,
    opacity: 0,
    transition: {
      stiffness: 10000,
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      stiffness: 100,
    },
  },
};
