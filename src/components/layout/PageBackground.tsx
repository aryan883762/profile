import clsx from "clsx";

import styles from "./PageBackground.module.css";

const PageBackground = () => (
  <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
    <div
      className={clsx(
        styles.fallSlow,
        "absolute left-1/4 top-[-10%] h-16 w-16 rounded-full bg-pink-300 opacity-50",
      )}
    />
    <div
      className={clsx(
        styles.fall,
        "absolute left-1/2 top-[-15%] h-20 w-20 rounded-lg bg-gradient-to-tr from-purple-400 to-pink-500 opacity-40",
      )}
    />
    <div
      className={clsx(
        styles.fallFast,
        "absolute left-[70%] top-[-12%] h-14 w-14 rounded-full bg-yellow-300 opacity-30",
      )}
    />
  </div>
);

export default PageBackground;
