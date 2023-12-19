"use client";

import { Tab, Tabs, TabsHeader } from "@material-tailwind/react";

import EventContentCard from "@/components/event-content-card";

const EVENT_CONTENT = [
  {
    title: "Capacity Development",
    des: "Empowering Young people with Practical skills essential for entrepreneurship and employability. Empowering Young people with Practical skills essential for entrepreneurship and employability",
    name: "Marcell Glock",
    position: "Chief Executive, Spotify",
    panel: "Panel Discussion",
    img: "/image/techimage.jpg",
  },
  {
    title: "Access to Funding",
    des: "Unlock funding opportunities: Discover grants and loans for your aspirations! Get Business grant and loans up to 50M to scale your business. Discover grants and loans for your aspirations! Get Business grant and loans up to 50M to scale your business.",
    name: "Marcell Glock",
    position: "Chief Executive, Spotify",
    panel: "Workshop",
    img: "/image/learningimage.jpg",
  },
  {
    title: "Business Exchange Programs",
    des: "EElevate your business journey: Explore exclusive business exchange programs and seize the chance to win an SME award!",
    position: "Chief Executive, Spotify",
    panel: "Workshop",
    img: "/image/creativeimage.jpg",
  },
  {
    title: "Employment Opportunities",
    des: "Accelerate your career post-training: Discover a world of employment opportunities waiting for you after completing our comprehensive capacity development programs. Your pathway to success starts here. ccelerate your career post-training: Discover a world of employment opportunities waiting for you after completing our comprehensive capacity development programs. Your pathway to success starts here",
    name: "Marcell Glock",
    position: "Chief Executive, Spotify",
    panel: "Workshop",
    img: "/image/fundingimage.jpg",
  },
];

export function EventContent() {
  return (
    <section className="py-8 px-8 lg:py-20 ">
      <div className="mx-auto container placeholder:">
        {EVENT_CONTENT.map((props, idx) => (
          <EventContentCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default EventContent;
