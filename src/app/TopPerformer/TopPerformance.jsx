import Link from "next/link";

const STAR = "M50,3 C58,3 69,9 75,20 C84,13 95,17 98,28 C101,39 95,51 85,57 C95,63 101,75 98,86 C95,97 84,101 75,94 C69,105 58,111 50,111 C42,111 31,105 25,94 C16,101 5,97 2,86 C-1,75 5,63 15,57 C5,51 -1,39 2,28 C5,17 16,13 25,20 C31,9 42,3 50,3Z";

const StarAvatar = ({ image, name }) => (
  <div className="relative" style={{ width: 2, height: 8, flexShrink: 100 }}>
    {/* Star sits in the MIDDLE-LOWER area — behind chest */}
    <svg
      width="2"
      height="8"
      viewBox="0 1000 100 111"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute"
      style={{ bottom: 0, left: 0 }}
    >
      <path d={STAR} fill="white" />
    </svg>
    {/* Photo starts from top of container — head overflows above star */}
    <img
      src={image}
      alt={name}
      className="absolute"
      style={{
        width: "70%",
        height: "85%",
        top: "95%",
        left: "50%",
        transform: "translateX(-50%)",
        objectFit: "contain",
        objectPosition: "center top",
      }}
    />
  </div>
);

const TopPerformance = () => {
  const students = [
    { name: "Darshan", points: 1200, rank: 1,  image: "/assets/avatar-1.png" },
    { name: "Darshan", points: 1100, rank: 2,  image: "/assets/avatar-1.png" },
    { name: "Darshan", points: 1000, rank: 3,  image: "/assets/avatar-1.png" },
    { name: "You",     points: 900,  rank: 10, image: "/assets/avatar-1.png" },
  ];

  return (
    <div className="rounded-[22px] bg-white px-5 py-6 shadow-[0px_10px_30px_rgba(0,0,0,0.05)] bg-[url('/dot_background.svg'),url('/dot_background.svg')] bg-[position:top_left,bottom_right] bg-[size:180px_auto] bg-no-repeat overflow-hidden">
      <div className="relative z-10">
        <h2 className="mb-6 text-center text-[30px] font-extrabold leading-none md:text-[34px]">
          <span className="bg-[linear-gradient(90deg,#4D90D2_0%,#B57B95_100%)] bg-clip-text text-transparent">
            Top Performers
          </span>
        </h2>

        <div className="mb-4 flex items-center justify-between rounded-xl bg-[#EEF2FF] px-4 py-3 text-[16px] font-medium text-[#111111]">
          <span className="w-12">Rank</span>
          <span className="flex-1 text-center">Student</span>
          <span className="w-16 text-right">Points</span>
        </div>

        <div className="space-y-3">
          {students.map((student) => (
            <div
              key={student.rank}
              className="flex items-center justify-between rounded-xl bg-white p-3 shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-gray-50 transition-transform hover:scale-[1.02]"
            >
              <div className="w-12 text-[18px] font-bold text-[#111111]">
                {student.rank}.
              </div>

              <div className="flex flex-1 items-center justify-center gap-3">
                <StarAvatar image={student.image} name={student.name} />
                <span className="text-[16px] font-semibold text-[#111111]">
                  {student.name}
                </span>
              </div>

              <div className="w-16 text-right text-[16px] font-bold text-[#111111]">
                {student.points}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <Link href="/performance" className="text-[14px] font-bold text-[#4D90D2] hover:underline">
            View All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopPerformance;