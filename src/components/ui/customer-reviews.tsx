type Review = {
  quote: string;
  author: string;
};

// Placeholder reviews. Replace these with approved customer quotes before launch.
const reviewRows: Review[][] = [
  [
    {
      quote:
        "My child stopped waiting for instructions and started building ideas independently.",
      author: "Parent · Grade 8",
    },
    {
      quote:
        "The project-first format made AI feel practical, creative, and genuinely exciting.",
      author: "Parent · Grade 10",
    },
    {
      quote:
        "We could see the confidence grow every week—not just technical skills.",
      author: "Parent · Grade 7",
    },
    {
      quote:
        "The mentors challenged students to think clearly and explain what they built.",
      author: "School educator",
    },
  ],
  [
    {
      quote:
        "Demo Day gave my child a real goal and the confidence to present to an audience.",
      author: "Parent · Grade 9",
    },
    {
      quote:
        "It was the first program where the final outcome felt useful, not just academic.",
      author: "Parent · Grade 11",
    },
    {
      quote:
        "Students learned to question AI outputs instead of accepting every answer blindly.",
      author: "School leader",
    },
    {
      quote:
        "The sessions balanced imagination, teamwork, and disciplined execution beautifully.",
      author: "Parent · Grade 6",
    },
  ],
  [
    {
      quote:
        "My child now talks about users, problems, and solutions—not only marks.",
      author: "Parent · Grade 8",
    },
    {
      quote:
        "The feedback was specific and encouraging, so every revision felt meaningful.",
      author: "Parent · Grade 10",
    },
    {
      quote:
        "They came in with an idea and left with something real they could demonstrate.",
      author: "Program partner",
    },
    {
      quote:
        "The program turned curiosity into a habit of making, testing, and improving.",
      author: "Parent · Grade 9",
    },
  ],
];

function ReviewCard({ review }: { review: Review }) {
  return (
    <blockquote className="flex min-h-[130px] w-[290px] shrink-0 flex-col justify-between rounded-[18px] border border-white/10 bg-[#191919] px-5 py-4 shadow-[0_12px_30px_rgba(0,0,0,0.28)] sm:w-[360px] sm:px-6 sm:py-5">
      <p className="text-[15px] font-semibold leading-6 text-white/90 sm:text-[16px]">
        “{review.quote}”
      </p>
      <footer className="mt-4 text-[11px] font-black uppercase tracking-[0.15em] text-white/45">
        {review.author}
      </footer>
    </blockquote>
  );
}

function ReviewRow({
  reviews,
  direction,
  duration,
}: {
  reviews: Review[];
  direction: "left" | "right";
  duration: number;
}) {
  return (
    <div className="customer-review-row">
      <div
        className={`customer-review-track customer-review-track-${direction}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {[0, 1].map((copyIndex) => (
          <div
            key={copyIndex}
            className="customer-review-group"
            aria-hidden={copyIndex === 1}
          >
            {reviews.map((review) => (
              <ReviewCard
                key={`${copyIndex}-${review.quote}`}
                review={review}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function CustomerReviews() {
  return (
    <div
      className="relative -mx-6 mt-8 overflow-hidden bg-[#0d0d0d] py-12 sm:-mx-8 sm:py-14 lg:-mx-14"
      style={{
        boxShadow: "inset 0 28px 42px -30px rgba(255, 255, 255, 0.2)",
      }}
    >
      <style>{`
        @keyframes customerReviewsLeft {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
        }

        @keyframes customerReviewsRight {
          from { transform: translate3d(-50%, 0, 0); }
          to { transform: translate3d(0, 0, 0); }
        }

        .customer-review-row {
          width: 100%;
          overflow: hidden;
        }

        .customer-review-track {
          display: flex;
          width: max-content;
          will-change: transform;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .customer-review-track-left {
          animation-name: customerReviewsLeft;
        }

        .customer-review-track-right {
          animation-name: customerReviewsRight;
        }

        .customer-review-group {
          display: flex;
          gap: 0.875rem;
          padding-right: 0.875rem;
        }

        .customer-review-row:hover .customer-review-track {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .customer-review-track {
            animation-play-state: paused;
          }
        }
      `}</style>

      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-20 w-14 bg-gradient-to-r from-[#0d0d0d] to-transparent sm:w-32"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-20 w-14 bg-gradient-to-l from-[#0d0d0d] to-transparent sm:w-32"
        aria-hidden="true"
      />

      <div className="relative z-10 space-y-4">
        <ReviewRow reviews={reviewRows[0]} direction="right" duration={46} />
        <ReviewRow reviews={reviewRows[1]} direction="left" duration={42} />
        <ReviewRow reviews={reviewRows[2]} direction="right" duration={50} />
      </div>
    </div>
  );
}
