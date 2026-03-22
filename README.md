# HDR UK — frontend technical exercise

Small **Next.js (App Router)** app: a feedback form, a GitHub public-repos viewer, and a short note on using AI. Built for an educational / submission context.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint    # eslint
```

## What’s in the app

| Route        | Description |
| ------------ | ----------- |
| `/`          | Hub with three tiles |
| `/feedback`  | Product feedback form (rating, comment, mock submit) |
| `/github`    | Lists public repos for a GitHub user (default `vercel`), name filter client-side |
| `/ai-note`   | Same “How I used AI” text as below, on the site |

## Stack

- Next.js, React, TypeScript  
- Tailwind CSS v4  
- GitHub REST API (`/users/{user}/repos`)

---

## How I used AI on this project

Hi, my name is Max. Thank you very much for shortlisting me for the Junior Frontend Software Developer role at HDR UK. I really appreciate the opportunity to complete the technical test, and I hope you enjoy looking through the small pages I’ve built for the submission.

For the GitHub repositories page, I used Cursor’s built-in AI to help generate the initial structure for the fetch helper, repository card list, and client-side search/filtering, and then used ChatGPT to review and refine the result. The prompts that worked best were the specific ones where I included the brief, the stack I was using (Next.js App Router, TypeScript, Tailwind), and the edge cases I wanted covered, such as failed fetches, empty descriptions, and no matching search results. One area where I had to correct the generated output was around unnecessary complexity and a few implementation details that did not feel like the best fit for the project, so I adjusted the structure and interactions myself. I also made a small CSS change to the built-in clear button on the search input so it shows a pointer cursor, which helped polish the UI and improve the feel of the search experience.

Thank you again for your time and consideration. Any feedback on the project, and on my application more broadly, would be genuinely invaluable to me.
