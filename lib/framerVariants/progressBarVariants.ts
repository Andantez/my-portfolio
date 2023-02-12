const drawProgressBar = {
  initial: {
    pathLength: 0,
  },
  animate: (animateTo: number) => {
    return {
      pathLength: animateTo,
      opacity: 1,
      transition: {
        pathLength: { type: 'spring', duration: 0.25, bounce: 0 },
      },
    };
  },
};
export default drawProgressBar;
