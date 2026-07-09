import NextImage from "next/image";

type Profile = {
  name: string;
  initials: string;
  role: string;
  credentials?: string;
  bio: string;
  image?: string;
  imageClassName?: string;
};

const advisoryBoard: Profile[] = [
  {
    name: "Prof. Sumit Kumar Yadav",
    initials: "SY",
    role: "Assistant Professor, IIT Roorkee",
    credentials: "PhD, IIM Ahmedabad · BTech, IIT Bombay",
    bio: "Brings academic rigour, institutional research depth, and a multidisciplinary perspective to the FutureX advisory board.",
  },
  {
    name: "Prof. Aashish Argade",
    initials: "AA",
    role: "Assistant Professor, IRMA Anand",
    credentials: "PhD, IIM Ahmedabad",
    bio: "Contributes expertise in rural management, institutional systems, and applied social impact.",
  },
  {
    name: "Sri R Ramaseshan",
    initials: "RR",
    role: "Former IAS Officer · Former MD & CEO, NCDEX",
    credentials: "Former Chairman, National Commodity Clearing Limited",
    bio: "Brings senior leadership experience across policy, governance, commodity markets, and national-level institutions.",
  },
  {
    name: "Prof. Ashok R. Patil",
    initials: "AP",
    role: "Vice Chancellor, NUSRL",
    credentials: "Former Professor, NLSIU Bengaluru",
    bio: "A leading legal academic and administrator with deep experience in legal education, public policy, and institutional leadership.",
  },
  {
    name: "Dr. Nakul Parameswar",
    initials: "NP",
    role: "Assistant Professor, IIT Hyderabad",
    credentials: "PhD, IIT Delhi · Former HoD, Department of Entrepreneurship",
    bio: "Works at the intersection of venture strategy, entrepreneurial decision-making, and institutional ecosystems.",
  },
  {
    name: "Dr. Rajeev Tyagi",
    initials: "RT",
    role: "Principal, Mt Carmel School, Dwarka",
    credentials: "IIT Roorkee Alumnus · PhD, IIT Delhi",
    bio: "Connects higher-education insight with the practical realities of implementing future-ready learning in schools.",
  },
];

const programmeMentors: Profile[] = [
  {
    name: "Pooja Choudhary",
    initials: "PC",
    role: "Head of Operations & Marketing, Lyfshilp Academy",
    bio: "Builds the systems that connect schools, students, and parents while sustaining learner engagement throughout the fellowship.",
    image: "/images/about-team/pooja-choudhary.png",
    imageClassName: "object-cover object-[50%_28%]",
  },
  {
    name: "Bhawna Khorwal",
    initials: "BK",
    role: "Head of Academic Counsellors, Lyfshilp Academy",
    bio: "Combines an engineering background with psychometric assessment and data-informed career counselling.",
    image: "/images/about-team/bhawna-khorwal.png",
    imageClassName: "object-cover object-[50%_24%]",
  },
  {
    name: "Kusum Dhasmana",
    initials: "KD",
    role: "Senior Counsellor, Lyfshilp Academy",
    bio: "Brings deep subject mastery and structured clarity to students balancing school, fellowship sessions, and venture work.",
    image: "/images/about-team/kusum-dhasmana.png",
    imageClassName: "object-cover object-[50%_24%]",
  },
  {
    name: "Chhavi Choudhary",
    initials: "CC",
    role: "Senior Counsellor, FutureX Fellowship",
    bio: "Uses her legal and education background to offer precise, thoughtful one-to-one mentorship that moves students from confusion to clarity.",
    image: "/images/about-team/chhavi-choudhary.png",
    imageClassName: "object-cover object-[50%_20%]",
  },
  {
    name: "Dayanidh Tripathi",
    initials: "DT",
    role: "Cohort Mentor, FutureX Fellowship",
    bio: "Guides fellows through ideation and AI project-building, drawing on more than seven years of education and mentoring experience.",
  },
];

function ProfileCard({
  profile,
  variant,
}: {
  profile: Profile;
  variant: "advisory" | "mentor";
}) {
  const isAdvisory = variant === "advisory";

  return (
    <article
      className={`group flex h-full flex-col rounded-[22px] border p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7 ${
        isAdvisory
          ? "border-white/10 bg-white/[0.055]"
          : "border-[#dfe5dc] bg-white text-[#272835]"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        {profile.image ? (
          <span className="relative size-16 shrink-0 overflow-hidden rounded-full border border-[#dfe5dc] bg-[#f4f7f1] shadow-sm">
            <NextImage
              src={profile.image}
              alt={profile.name}
              fill
              sizes="64px"
              className={profile.imageClassName ?? "object-cover object-top"}
            />
          </span>
        ) : (
          <span
            className={`grid size-12 shrink-0 place-items-center rounded-full text-[13px] font-black tracking-[0.08em] ${
              isAdvisory
                ? "bg-[#CFFD53] text-[#10231a]"
                : "bg-[#10231a] text-white"
            }`}
            aria-hidden="true"
          >
            {profile.initials}
          </span>
        )}
        <span
          className={`text-[11px] font-black uppercase tracking-[0.16em] ${
            isAdvisory ? "text-[#CFFD53]/70" : "text-[#1e6344]/65"
          }`}
        >
          {isAdvisory ? "Advisory Board" : "Programme Mentor"}
        </span>
      </div>

      <h3
        className={`mt-7 text-[22px] font-black leading-tight ${
          isAdvisory ? "text-white" : "text-[#272835]"
        }`}
      >
        {profile.name}
      </h3>
      <p
        className={`mt-2 text-[14px] font-bold leading-6 ${
          isAdvisory ? "text-[#CFFD53]" : "text-[#1e6344]"
        }`}
      >
        {profile.role}
      </p>
      {profile.credentials && (
        <p
          className={`mt-3 text-[12px] font-bold uppercase leading-5 tracking-[0.08em] ${
            isAdvisory ? "text-white/38" : "text-[#8a90a3]"
          }`}
        >
          {profile.credentials}
        </p>
      )}
      <p
        className={`mt-5 text-[14px] leading-6 ${
          isAdvisory ? "text-white/58" : "text-[#747b8f]"
        }`}
      >
        {profile.bio}
      </p>
    </article>
  );
}

export function AdvisoryMentorsSection() {
  return (
    <section className="bg-[#10231a] text-white">
      <div className="px-6 py-20 sm:px-8 lg:px-14 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-[13px] font-black uppercase tracking-[0.18em] text-[#CFFD53]">
                Advisory Board
              </p>
              <h2 className="mt-4 max-w-3xl text-[38px] font-black leading-tight tracking-normal sm:text-[52px]">
                Experience that keeps ambition grounded.
              </h2>
            </div>
            <p className="max-w-2xl text-[17px] leading-8 text-white/58 lg:justify-self-end">
              Educators, institution builders, policy leaders, and
              entrepreneurs help FutureX connect bold student ideas with
              academic rigour and real-world judgement.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {advisoryBoard.map((profile) => (
              <ProfileCard
                key={profile.name}
                profile={profile}
                variant="advisory"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#f4f7f1] px-6 py-20 sm:px-8 lg:px-14 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[13px] font-black uppercase tracking-[0.18em] text-[#1e6344]">
                Programme Mentors
              </p>
              <h2 className="mt-4 max-w-3xl text-[38px] font-black leading-tight tracking-normal text-[#272835] sm:text-[52px]">
                Practitioners who stay close to the work.
              </h2>
            </div>
            <p className="max-w-xl text-[17px] leading-8 text-[#747b8f]">
              Fellows learn with mentors across education, operations,
              counselling, finance, and project-building.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {programmeMentors.map((profile) => (
              <ProfileCard
                key={profile.name}
                profile={profile}
                variant="mentor"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
