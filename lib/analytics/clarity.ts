export const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID || "";

interface ClarityFn {
  (...args: unknown[]): void;
  q?: unknown[];
}

interface ClarityWindow extends Window {
  clarity?: ClarityFn;
}

export const initClarity = () => {
  if (typeof window !== "undefined" && CLARITY_ID) {
    const win = window as unknown as ClarityWindow;
    if (!win.clarity) {
      const q: unknown[] = [];
      const fn: ClarityFn = function (...args: unknown[]) {
        q.push(args);
      };
      fn.q = q;
      win.clarity = fn;
    }
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.clarity.ms/tag/${CLARITY_ID}`;
    const firstScript = document.getElementsByTagName("script")[0];
    firstScript?.parentNode?.insertBefore(script, firstScript);
  }
};
