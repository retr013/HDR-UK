export default function GithubLoading() {
  return (
    <div className="min-h-screen bg-white px-5 py-10 dark:bg-black sm:px-8 sm:py-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 h-5 w-32 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
        <div className="mb-4 h-9 max-w-md animate-pulse rounded-lg bg-zinc-200 dark:bg-zinc-800" />
        <div className="mb-8 h-4 max-w-lg animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="h-40 animate-pulse rounded-xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
