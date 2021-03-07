export const observeIntersection = (node, options) => {
  const observation = (entries) => {
    if (entries[0].intersectionRatio > 0) {
    // if (entries[0].intersectionRatio > options.threshold) {
      options.callback();
      observer.unobserve(node);
    }
  };

  const observer = new IntersectionObserver(observation);

  observer.observe(node);

  return {
    destroy() {
      observer.unobserve(node);
    }
  };
};

export const getRand = (max) => Math.floor(Math.random() * (max + 1));
