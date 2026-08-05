const MAX_VISIBLE_PROJECT_SELECTORS = 5;

export const getVisibleProjectIndexes = (
  activeIndex: number,
  projectCount: number,
): number[] => {
  if (projectCount <= MAX_VISIBLE_PROJECT_SELECTORS) {
    return Array.from({ length: projectCount }, (_, index) => index);
  }

  const halfWindow = Math.floor(MAX_VISIBLE_PROJECT_SELECTORS / 2);
  let start = activeIndex - halfWindow;
  let end = start + MAX_VISIBLE_PROJECT_SELECTORS;

  if (start < 0) {
    start = 0;
    end = MAX_VISIBLE_PROJECT_SELECTORS;
  }

  if (end > projectCount) {
    end = projectCount;
    start = projectCount - MAX_VISIBLE_PROJECT_SELECTORS;
  }

  return Array.from({ length: end - start }, (_, position) => start + position);
};
