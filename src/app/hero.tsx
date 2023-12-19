"use client";

import { IconButton, Button, Typography } from "@material-tailwind/react";
import { PlayIcon } from "@heroicons/react/24/solid";
const color = "#ff8200";
function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/learningimage.jpg')] bg-cover bg-no-repeat">
      <div className="absolute inset-0 h-full w-full bg-gray-900/20" />
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
          {/* <Typography variant="h3" color="white" className="mb-2">
            29-31 August @ New York
          </Typography> */}
          <Typography variant="h1" color="white" className="lg:max-w-3xl">
            The Innovative Youth Empowerement Program
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mt-1 mb-12 w-full md:max-w-full lg:max-w-2xl"
          >
            A collaboration between Access Bank and The Office of the Vice
            President
          </Typography>
          <div className="flex items-center gap-4">
            <button className="bg-[#ff8200] py-2 px-4 rounded-lg text-white font-bold">
              GET STARTED
            </button>
            {/* <IconButton className="rounded-full bg-white p-6">
              <PlayIcon className="h-4 w-4 text-gray-900" />
            </IconButton> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
