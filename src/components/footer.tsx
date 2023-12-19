import { Typography, Button, IconButton } from "@material-tailwind/react";

const CURRENT_YEAR = new Date().getFullYear();
const LINKS = ["About", "Partners", "FAQ"];

export function Footer() {
  return (
    <footer className="pb-5 p-10 md:pt-10 ">
      <div className="container flex flex-col mx-auto">
        <div className="flex flex-col md:flex-row items-center !justify-between space-x-12 mx-auto">
          <ul className="flex justify-center my-4 md:my-0 w-max mx-auto items-center gap-4">
            {LINKS.map((link, index) => (
              <li key={index}>
                <Typography
                  as="a"
                  href="#"
                  variant="small"
                  color="white"
                  className="font-normal !text-white hover:!text-[#ff8200] transition-colors"
                >
                  {link}
                </Typography>
              </li>
            ))}
          </ul>
          <div className="flex w-fit justify-center gap-2">
            <IconButton size="sm" color="white" variant="text">
              <i className="fa-brands fa-twitter text-lg hover:!text-[#ff8200]" />
            </IconButton>
            <IconButton size="sm" color="white" variant="text">
              <i className="fa-brands fa-youtube text-lg hover:!text-[#ff8200]" />
            </IconButton>
            <IconButton size="sm" color="white" variant="text">
              <i className="fa-brands fa-instagram text-lg hover:!text-[#ff8200]" />
            </IconButton>
          </div>
        </div>
      </div>
      <div className="mx-auto">
        <Typography
          color="white"
          className="text-center mt-12 font-normal !text-white"
        >
          &copy; {CURRENT_YEAR}{" "}
          <a href="https://www.accessbankplc.com" target="_blank">
            Access Bank
          </a>
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
