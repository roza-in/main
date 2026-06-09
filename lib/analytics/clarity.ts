export const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID || "";

export const initClarity = () => {
  if (typeof window !== "undefined" && CLARITY_ID) {
    (function(c: any, l: any, a: any, r: any, i: any, t?: any, y?: any){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode?.insertBefore(t,y);
    })(window, document, "clarity", "script", CLARITY_ID);
  }
};
