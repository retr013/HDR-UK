"use client";

import { useState } from "react";

async function postFeedback(data: { rating: Rating; comment: string }) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  // throw new Error("Failed to post feedback");
}

type Feedback = {
  value: Rating;
  label: string;
};

type Rating = 1 | 2 | 3 | 4 | 5;

export function FeedbackForm() {
  const [rating, setRating] = useState<Rating | null>(null);
  const [comment, setComment] = useState("");
  const [ratingError, setRatingError] = useState(false);
  const [commentError, setCommentError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const ratings: Feedback[] = [
    { value: 1, label: "Very bad" },
    { value: 2, label: "Poor" },
    { value: 3, label: "Okay" },
    { value: 4, label: "Good" },
    { value: 5, label: "Excellent" },
  ];

  function formReset() {
    setRating(null);
    setComment("");
    setRatingError(false);
    setCommentError(false);
    setSuccess(false);
    setLoading(false);
    setError(null);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setRatingError(rating === null);
    setCommentError(!comment.trim());

    if (rating === null || !comment.trim()) return;

    setLoading(true);

    try {
      await postFeedback({ rating, comment: comment.trim() });
      setSuccess(true);
    } catch (error: any) {
      setError(error.message || "An unknown error occurred");
      setTimeout(() => {
        setError(null);
      }, 3000);
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="w-full max-w-md rounded-xl border border-zinc-300 bg-white px-6 py-8 text-center text-zinc-900 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100">
        <p className="mb-3 text-lg font-medium">Thanks — we got your feedback.</p>
        <button
          type="button"
          className="cursor-pointer bg-transparent p-0 text-sm text-blue-600 underline underline-offset-2 dark:text-blue-400"
          aria-label="Send another feedback"
          onClick={formReset}
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form
      className="flex w-full max-w-md flex-col gap-4 rounded-xl border border-zinc-300 bg-white px-6 py-8 text-zinc-900 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
      aria-label="Feedback"
      onSubmit={handleSubmit}
    >
      <div className="text-center">
        <h2 className="text-3xl font-semibold tracking-tight mb-7">We value your feedback</h2>
        <p className="mt-1 text-base text-zinc-600 dark:text-zinc-400">
          How would you rate your experience?
        </p>
      </div>

      <div>
        <div aria-label="Rating" className="flex justify-center gap-2">
          {ratings.map((item) => (
            <button
              key={item.value}
              type="button"
              className="cursor-pointer bg-transparent px-1 text-3xl leading-none text-yellow-600 transition-transform hover:scale-110 disabled:cursor-default disabled:opacity-50"
              onClick={() => {
                setRating(item.value);
                setRatingError(false);
              }}
              disabled={loading}
            >
              {rating !== null && item.value <= rating ? "★" : "☆"}
            </button>
          ))}
        </div>
        {ratingError && (
          <p className="mt-2 text-center text-sm text-red-600 dark:text-red-400">
            Please choose a rating.
          </p>
        )}
      </div>

      <div>
        <label
          className="mb-2 block text-sm font-medium text-center text-zinc-700 dark:text-zinc-300"
          htmlFor="comment"
        >
          Take a moment to share your thoughts:
        </label>
        <textarea
          id="comment"
          className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none transition focus:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:border-zinc-500"
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
            setCommentError(false);
          }}
          rows={5}
          placeholder="What should we know?"
          disabled={loading}
        />
        {commentError && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-400">
            Please add a comment.
          </p>
        )}
      </div>

      <button
        type="submit"
        aria-label={loading ? "Sending feedback" : "Submit feedback"}
        className="mt-2 cursor-pointer rounded-lg bg-zinc-900 px-4 py-2 text-sm text-white disabled:cursor-wait disabled:opacity-50 transition-opacity transition-transform hover:scale-102 hover:opacity-90 dark:bg-zinc-100 dark:text-zinc-900"
        disabled={loading}
      >
        {loading ? "Sending…" : "Submit"}
      </button>
      {error && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-400">
          {error}
        </p>
      )}
    </form>
  );
}