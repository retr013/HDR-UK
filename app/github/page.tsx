import Link from "next/link";
import { GithubRepoList } from "@/components/GithubRepoList";
import { fetchUserRepos } from "@/lib/github";

const GITHUB_USER = "vercel";

export default async function GithubPage() {
  const result = await fetchUserRepos(GITHUB_USER);

  return (
    <div className="min-h-screen bg-white px-5 py-10 dark:bg-black sm:px-8 sm:py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-stretch">
        <Link
          href="/"
          className="mb-8 inline-flex w-fit text-sm font-semibold text-blue-600 underline underline-offset-2 dark:text-blue-400"
        >
          ← Back to home
        </Link>

        {!result.ok ? (
          <div
            className="rounded-xl border-[3px] border-red-300 bg-red-50 px-5 py-6 text-red-900 dark:border-red-900 dark:bg-red-950/40 dark:text-red-200"
            role="alert"
          >
            <p className="font-semibold">Something went wrong</p>
            <p className="mt-2 text-sm leading-relaxed">{result.error}</p>
          </div>
        ) : (
          <GithubRepoList repos={result.data} username={GITHUB_USER} />
        )}
      </div>
    </div>
  );
}
