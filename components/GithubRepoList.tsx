"use client";

import { useMemo, useState } from "react";
import type { GithubRepo } from "@/lib/github";

type Props = {
  repos: GithubRepo[];
  username: string;
};

export function GithubRepoList({ repos, username }: Props) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return repos;
    return repos.filter((r) => r.name.toLowerCase().includes(q));
  }, [repos, query]);

  const filterActive = query.trim().length > 0;

  return (
    <div className="w-full max-w-5xl">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
            @{username} — public repos
          </h1>
          <p aria-live="polite" className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            {filterActive ? (
              <>
                {filtered.length} repo{filtered.length !== 1 ? "s" : ""}{" "}
                found
                {repos.length !== filtered.length
                  ? ` (${repos.length} loaded in total)`
                  : ""}
                . Filter runs in the browser only.
              </>
            ) : (
              <>
                {repos.length} repo{repos.length !== 1 ? "s" : ""} loaded. Type
                in the filter to narrow the list (no extra requests).
              </>
            )}
          </p>
        </div>
        <label htmlFor="search" className="flex w-full flex-col gap-1 text-sm font-medium text-zinc-700 dark:text-zinc-300 sm:max-w-xs">
          Filter by name
          <input
            type="search"
            id="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type to filter…"
            className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-base font-normal text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-zinc-500 focus:ring-2 focus:ring-zinc-200 dark:border-zinc-600 dark:bg-zinc-950 dark:text-zinc-100 dark:focus:border-zinc-500 dark:focus:ring-zinc-800"
            autoComplete="off"
            spellCheck={false}
            aria-label="Filter repositories by name"
          />
        </label>
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-xl border border-dashed border-zinc-300 px-4 py-10 text-center text-zinc-600 dark:border-zinc-700 dark:text-zinc-400">
          {repos.length === 0
            ? "This user has no public repositories in the response."
            : "No repository names match that filter."}
        </p>
      ) : (
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((repo) => (
            <li key={repo.id}>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full flex-col rounded-xl border-[3px] border-zinc-400 bg-white p-4 shadow-sm transition-transform hover:scale-[1.02] dark:border-zinc-600 dark:bg-zinc-950"
              >
                <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                  {repo.name}
                </span>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {repo.description?.trim()
                    ? repo.description
                    : "No description provided."}
                </p>
                <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-zinc-200 pt-3 text-xs text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
                  <span>{repo.language ?? "Language not set"}</span>
                  <span className="font-semibold text-zinc-800 tabular-nums dark:text-zinc-200">
                    ★ {repo.stargazers_count}
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
