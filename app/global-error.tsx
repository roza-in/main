"use client";

import { AlertCircle, RotateCcw } from "lucide-react";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-dvh items-center justify-center bg-white font-sans text-slate-900 antialiased dark:bg-zinc-950 dark:text-zinc-50">
        <main className="flex flex-col items-center justify-center px-6 text-center">
          <div className="rounded-full bg-red-50 p-3 dark:bg-red-950">
            <AlertCircle className="h-6 w-6 text-red-600 dark:text-red-400" aria-hidden="true" />
          </div>
          <h2 className="mt-4 text-xl font-semibold">Something went wrong</h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 max-w-md">
            A critical error occurred. Please try refreshing the page.
          </p>
          <button
            onClick={reset}
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
