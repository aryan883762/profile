const basePath = process.env.NEXT_PUBLIC_BASE_PATH
  ? `/${process.env.NEXT_PUBLIC_BASE_PATH.replace(/^\/+|\/+$/g, "")}`
  : "";

export const withBasePath = (path: string) => {
  if (!basePath || !path.startsWith("/") || path.startsWith(`${basePath}/`)) {
    return path;
  }

  return `${basePath}${path}`;
};
