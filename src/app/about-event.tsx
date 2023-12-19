"use client";

import { Typography } from "@material-tailwind/react";
import AboutCard from "@/components/about-card";

const EVENT_INFO = [
  {
    title: "Capacity Development!",
    description:
      "Empowering the youth with skills for entrepreneurship and employability. Empowering the youth with skills for entrepreneurship and employability ",
    subTitle: "Pillar I",
  },
  {
    title: "Access to Funding!",
    description:
      "Get up to N50m in business grants and loans to scale your business.",
    subTitle: "Pillar II",
  },
  {
    title: "Exchange Programmes!",
    description:
      "Explore exclusive business exchange programs and seize the chance to win an SME award!",
    subTitle: "Pillar III",
  },
  {
    title: "Employment Opportunities!",
    description:
      "Discover employment opportunities after completing our comprehensive capacity development programs.",
    subTitle: "Pillar IV",
  },
];

export function AboutEvent() {
  return (
    <section className="container mx-auto flex flex-col items-center px-4 py-10">
      <Typography variant="h6" className="text-center mb-2" color="orange">
        Benefits
      </Typography>
      <Typography variant="h3" className="text-center" color="blue-gray">
        About The Program
      </Typography>
      <Typography
        variant="lead"
        className="mt-2 lg:max-w-4xl mb-8 w-full text-center font-normal !text-gray-500"
      >
        ‘The Innovative and Empowered Youth Program (IEYP)’ targets is the
        Youths (entrepreneurs and career-focused). It aims to build their
        capacity and as well give them access to affordable finance and
        employment opportunities.
      </Typography>
      {/* <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {EVENT_INFO.map((props, idx) => (
          <AboutCard key={idx} {...props} />
        ))}
        <div className="md:col-span-2">
          <AboutCard
            title="Networking!"
            subTitle="Community"
            description="Connect with industry leaders, AI experts, and fellow enthusiasts to build valuable professional relationships."
          />
        </div>
      </div> */}
    </section>
  );
}

export default AboutEvent;
