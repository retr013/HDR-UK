export type GithubRepo = {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  html_url: string;
};

export async function fetchUserRepos(username: string): Promise<{ ok: true; data: GithubRepo[] } | { ok: false; error: string }> {
  const url = `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`;

  try {
    const res = await fetch(url);

    if (res.status === 403) {
      return {
        ok: false,
        error:
          "GitHub refused the request. Try again shortly.",
      };
    }
    if (res.status === 404) {
      return {
        ok: false,
        error: `No GitHub user named “${username}”.`,
      };
    }
    if (!res.ok) {
      return {
        ok: false,
        error: "Couldn’t load repositories. Please try again later.",
      };
    }

    const data: GithubRepo[] = (await res.json());
    return { ok: true, data };
  } catch {
    return {
      ok: false,
      error: "Network error. Check your connection and try again.",
    };
  }
}
