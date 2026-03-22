import Link from "next/link";

const cardClass =
  "flex aspect-square w-full max-w-[18rem] items-center justify-center rounded-[2rem] border-[3px] border-zinc-400 bg-white px-5 text-center text-xl font-semibold tracking-tight text-zinc-900 shadow-sm transition-transform duration-200 ease-out hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-zinc-600 dark:bg-black dark:text-zinc-100 dark:focus-visible:ring-zinc-500 dark:focus-visible:ring-offset-black sm:max-w-[20rem] sm:text-2xl md:max-w-none";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col justify-center bg-white px-5 py-10 dark:bg-black sm:px-8 sm:py-14">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-10 md:gap-14">
        <h1 className="text-center text-2xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-3xl">
          Choose a section:
        </h1>

        <div className="grid w-full grid-cols-1 items-center justify-items-center gap-8 sm:gap-10 md:grid-cols-3 md:gap-10">
          <Link href="/feedback" className={cardClass} aria-label="Open feedback form">
            Task 1: Feedback
          </Link>
          <Link href="/github" className={cardClass} aria-label="Open GitHub repos">
            Task 2: GitHub Repo
          </Link>
          <Link
            href="/ai-note"
            className={cardClass}
            aria-label="Open note on using AI for this project"
          >
            Short note on using AI
          </Link>
        </div>
      </div>
    </div>
  );
}
