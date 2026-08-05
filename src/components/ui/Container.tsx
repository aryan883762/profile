import type { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

type ContainerProps = ComponentPropsWithoutRef<"div">;

const Container = ({ className, ...props }: ContainerProps) => (
  <div
    className={clsx("mx-auto w-full max-w-screen-xl", className)}
    {...props}
  />
);

export default Container;
