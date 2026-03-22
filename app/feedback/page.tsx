import Link from "next/link";
import { FeedbackForm } from "@/components/FeedbackForm";

export default function FeedbackPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white p-6 dark:bg-black">
      <div className="flex w-full max-w-md flex-col gap-6">
        <Link
          href="/"
          className="text-sm font-semibold text-blue-600 underline underline-offset-2 dark:text-blue-400"
        >
          ← Back to home
        </Link>
        <FeedbackForm />
      </div>
    </div>
  );
}
