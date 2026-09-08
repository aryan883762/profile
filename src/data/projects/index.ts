import { featuredProjects } from "./featured-projects";
import { resumeProjects } from "./resume-projects";

const allProjects = [...featuredProjects, ...resumeProjects];

const featuredOrder = [
  "DateTix",
  "Launch27",
  "Baton Market",
  "Booksmart",
  "IndustryJump",
  "Design System",
  "Content Dispatch",
  "Wooter",
  "NavigateHCR",
  "Supply Chain KPI",
  "ADM Truck Logistics",
  "PigletNutri",
  "Royal Horse",
  "Labeling App",
] as const;

const orderedTitles = new Set<string>(featuredOrder);
const prioritizedProjects = featuredOrder.flatMap((shortTitle) => {
  const project = allProjects.find(
    (candidate) => candidate.shortTitle === shortTitle,
  );

  return project ? [project] : [];
});

export const projects = [
  ...prioritizedProjects,
  ...allProjects.filter((project) => !orderedTitles.has(project.shortTitle)),
];
