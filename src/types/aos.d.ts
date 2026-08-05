declare module "aos" {
  interface AosOptions {
    duration?: number;
    once?: boolean;
  }

  interface AosInstance {
    init(options?: AosOptions): void;
    refresh(): void;
    refreshHard(): void;
  }

  const AOS: AosInstance;
  export default AOS;
}
