"use client";

import { Typography } from "@material-tailwind/react";
import StatsCard from "@/components/stats-card";

const STATS = [
  {
    count: "230,000+",
    title: "Participants",
  },
  {
    count: "50,000",
    title: "Women trained on Technology and Digital Skills",
  },
  {
    count: "10,000",
    title: "Participants in Tech Incubation Training",
  },
  {
    count: "40,000",
    title: "Udacity Certifications",
  },
];

export function OurStats() {
  return (
    <section className="container mx-auto grid gap-10 px-8 py-44 lg:grid-cols-1 lg:gap-20 xl:grid-cols-2 xl:place-items-center ">
      <div>
        {/* <Typography variant="h6" color="orange" className="mb-6 font-bold">
          The Numbers
        </Typography> */}
        <Typography
          className="text-5xl font-bold leading-tight lg:w-3/4"
          color="blue-gray"
        >
          Program Highlights
        </Typography>
        <Typography
          variant="lead"
          className="mt-3 w-full !text-orange lg:w-9/12 "
        >
          4 million youths are projected to be impacted over the course of the
          next 4 years (i.e 1 million youths annually).
        </Typography>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-8 gap-x-28">
          {STATS.map((props, key) => (
            <StatsCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurStats;
