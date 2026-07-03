type Review = {
  quote: string;
  author: string;
};

// Placeholder reviews. Replace these with approved customer quotes before launch.
const reviewRows: Review[][] = [
  [
    {
      quote:
        "i am very interested in AI and as i am doing this program i am able to go deeper in it and learning new things",
      author: "Mishita Khosla; Springdales school, pusa road",
    },
    {
      quote:
        "Atleast got to know the current learning trends and learnt few basics of the different AI modules. Familiarity with few AI lingo. Hope to learn more.",
      author: "Ranvit Rao, class 6th, DPS sec-45, gurgaon",
    },
  ],
  [
    {
      quote:
        "I learned a lot about AI and learned more and more about AI's: names of AI's and types of AI's which help in everyday activities",
      author: "Arnav sangwan, dps sec-45, gurgaon",
    },
    {
      quote:
        "i have learned to create a lot of things , i have learned how to make websites , songs , a study plan . im rlly happy abt it",
      author: "myra bhan, mount carmel school, dwarka",
    },
  ],
  [
    {
      quote:
        "I have learned Prompt Engineering means how to create a Prompt and making several projects in Claude and I also made a project of Bolt based on application and I also created many songs in Suno",
      author: "Hrehaan chanda, springdales school",
    },
    {
      quote:
        "learned how every tool is meant for a different purpose. in order for the output to be proper, the input (prompt) has to be accurate as well.",
      author: "Dravya maheshwari, St. Francis School, indirapuram",
    },
  ],
];

function ReviewCard({ review }: { review: Review }) {
  return (
    <blockquote className="flex min-h-[92px] w-[230px] shrink-0 flex-col justify-between rounded-[14px] border border-white/10 bg-[#191919] px-3.5 py-3 shadow-[0_10px_24px_rgba(0,0,0,0.24)] sm:w-[260px] sm:px-4 sm:py-3.5">
      <p className="text-[11.5px] font-semibold leading-relaxed text-white/90 sm:text-[12.5px]">
        “{review.quote}”
      </p>
      <footer className="mt-3 text-[8.5px] font-black uppercase tracking-[0.12em] text-white/45 sm:text-[9px]">
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
      className="relative -mx-6 mt-6 overflow-hidden bg-[#0d0d0d] py-9 sm:-mx-8 sm:py-10 lg:-mx-14"
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
          gap: 0.75rem;
          padding-right: 0.75rem;
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

      <div className="relative z-10 space-y-3">
        <ReviewRow reviews={reviewRows[0]} direction="right" duration={46} />
        <ReviewRow reviews={reviewRows[1]} direction="left" duration={42} />
        <ReviewRow reviews={reviewRows[2]} direction="right" duration={50} />
      </div>
    </div>
  );
}
