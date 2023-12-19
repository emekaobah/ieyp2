import React from "react";
import Image from "next/image";
// import heroimage from "../../public/heroimage.jpg";
import afflogo from "../../public/image/afflogo.png";
import aspirelogo from "../../public/image/aspirelogo.png";
// import phoenixproject from "../../public/phoenixproject.png";
import phoenixlogo2 from "../../public/image/phoenixlogo2.png";
import Link from "next/link";
function Plinks() {
  return (
    <div>
      <div className="flex flex-col md:flex-row  justify-between items-center  max-w-7xl bg-white mx-auto ">
        <div className=" h-fit w-96 p-4 flex ">
          <p className="font-bold text-3xl">Program Partners:</p>
        </div>
        <Link
          href="https://africafintechfoundry.ng/"
          className="hover:shadow-lg"
        >
          <div className=" h-fit w-72 p-4">
            <Image src={afflogo} alt="aff logo " objectFit="cover" />
          </div>
        </Link>
        <Link href="https://actrustfoundation.org/" className="hover:shadow-lg">
          <div className=" h-fit w-44 p-4">
            <Image src={aspirelogo} alt="aff logo " objectFit="cover" />
          </div>
        </Link>
        <Link
          href="https://www.phoenixprojectng.com/"
          className="hover:shadow-lg"
        >
          <div className="h-fit w-72 p-4">
            <Image
              src={phoenixlogo2}
              alt="aff logo "
              objectFit="cover
          "
            />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Plinks;
