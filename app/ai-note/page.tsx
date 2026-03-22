import Link from "next/link";

export default function AiNotePage() {
  return (
    <div className="min-h-screen bg-white px-5 py-10 text-zinc-900 dark:bg-black dark:text-zinc-100 sm:px-8 sm:py-12">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/"
          className="mb-10 inline-flex text-sm font-semibold text-blue-600 underline underline-offset-2 dark:text-blue-400"
        >
          ← Back to home
        </Link>

        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          How I used AI on this project
        </h1>

        <div className="mt-8 space-y-6 text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
          <p>
            Hi, my name is Max. Thank you very much for shortlisting me for the
            Junior Frontend Software Developer role at HDR UK. I really
            appreciate the opportunity to complete the technical test, and I hope
            you enjoy looking through the small pages I’ve built for the
            submission.
          </p>
          <p>
            For the GitHub repositories page, I used Cursor’s built-in AI to
            help generate the initial structure for the fetch helper,
            repository card list, and client-side search/filtering, and then
            used ChatGPT to review and refine the result. The prompts that
            worked best were the specific ones where I included the brief, the
            stack I was using (Next.js App Router, TypeScript, Tailwind), and
            the edge cases I wanted covered, such as failed fetches, empty
            descriptions, and no matching search results. One area where I had to
            correct the generated output was around unnecessary complexity and a
            few implementation details that did not feel like the best fit for
            the project, so I adjusted the structure and interactions myself. I
            also made a small CSS change to the built-in clear button on the
            search input so it shows a pointer cursor, which helped polish the
            UI and improve the feel of the search experience.
          </p>
          <p>
            Thank you again for your time and consideration. Any feedback on the
            project, and on my application more broadly, would be genuinely
            invaluable to me.
          </p>
        </div>
      </div>
    </div>
  );
}
