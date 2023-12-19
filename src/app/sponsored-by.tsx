"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import phoenixproject from "../../public/logos/phoenixproject.png";
import afflogo from "../../public/logos/afflogo.png";
import aspire from "../../public/logos/aspirelogo.png";
const SPONSORS = [
  // "coinbase",
  // "spotify",
  // "pinterest",
  // "google",
  // "amazon",
  // "netflix",
  "aff",
  "phoenix",
  "aspire",
];

export function SponsoredBy() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto text-center">
        <Typography variant="h6" color="blue-gray" className="mb-8">
          PROGRAM PARTNERS
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {SPONSORS.map((logo, key) => (
            <Image
              width={500}
              height={500}
              key={key}
              src={`/logos/logo-${logo}.png`}
              alt={logo}
              className="w-40"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SponsoredBy;
