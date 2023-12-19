"use client";

import React from "react";
import {
  Typography,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const FAQS = [
  {
    title:
      "1. What is the primary focus of the training program for career-focused youths and entrepreneurs?",
    desc: "The training program is designed to empower and enhance the skills of career-focused youths and entrepreneurs, equipping them for success in their respective fields.",
  },
  {
    title:
      "2. How long is the duration of the training, and what are the key components covered during the program?",
    desc: "The training duration is structured to provide comprehensive learning opportunities. Key components include skill development, entrepreneurship training, and career-focused modules.",
  },
  {
    title:
      "3. What opportunities for financial support are available upon completing the training?",
    desc: "Graduates of the program have access to various financial support mechanisms, including loans, grants, and the possibility of competing for national entrepreneurial awards.",
  },
  {
    title:
      "4. How are the loans and grants structured, and what are the eligibility criteria for applicants?",
    desc: "I always felt like I could do anything. That's the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down by their perception of themselves. If you're taught you can't do anything, you won't do anything. I was taught I could do everything. If everything I did failed - which it doesn't, it actually succeeds - just the fact that I'm willing to fail is an inspiration. People are so scared to lose that they don't even try. Like, one thing people can't say is that I'm not trying, and I'm not trying my hardest, and I'm not trying to do the best way I know how.",
  },
  {
    title: "5. What is the dress code for the conference?",
    desc: "The financial support options are tailored to the needs of the participants. Eligibility criteria typically involve successful completion of the training and a viable business or career plan.",
  },

  {
    title:
      "5. Can you provide more details about the national entrepreneurial awards?",
    desc: "The national entrepreneurial awards recognize outstanding achievements and innovative contributions. Winners may receive financial incentives, mentorship, and valuable exposure to propel their ventures to greater heights.",
  },
  {
    title:
      "6. Are employment opportunities also available for participants completing the training program?",
    desc: "Yes, the program connects participants with potential employers, fostering valuable networking opportunities and increasing their chances of securing meaningful employment in their chosen fields.",
  },
  {
    title:
      "7. How is the training program structured to cater to the diverse needs of participants?",
    desc: "The program is designed with a flexible structure, offering diverse modules and resources to accommodate participants with various career aspirations, whether in entrepreneurship or traditional employment.",
  },
  {
    title: "8. What industries or sectors does the training program focus on?",
    desc: "The program is industry-agnostic, catering to a wide range of sectors. It is adaptable to the diverse interests and career paths of participants, including but not limited to technology, business, healthcare, and creative industries.",
  },
  {
    title:
      "9. How can interested individuals apply for the training program, and what is the selection process like?",
    desc: "Information on applying for the training program is available on our website. The selection process involves reviewing applications, possibly followed by interviews, to ensure the program is a good fit for the candidates.",
  },
  {
    title:
      "10. Is there ongoing support for program graduates beyond the initial training period?",
    desc: "Yes, graduates receive ongoing support through mentorship programs, networking events, and access to additional resources. This support aims to foster long-term success and sustainability in their chosen careers or entrepreneurial ventures.",
  },
];

export function Faq() {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto">
        <div className="text-center">
          <Typography variant="h1" color="blue-gray" className="mb-4">
            Frequently asked questions
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-24 lg:w-3/5 !text-gray-500"
          >
            Please find below frequently asked questions about the program.
            We&apos;re here to address your most common queries and provide you
            with the information you need to make the most of your program
            experience.
          </Typography>
        </div>

        <div className="mx-auto lg:max-w-screen-lg lg:px-20">
          {FAQS.map(({ title, desc }, key) => (
            <Accordion
              key={key}
              open={open === key + 1}
              onClick={() => handleOpen(key + 1)}
            >
              <AccordionHeader className="text-left text-gray-900">
                {title}
              </AccordionHeader>
              <AccordionBody>
                <Typography
                  color="blue-gray"
                  className="font-normal text-gray-500"
                >
                  {desc}
                </Typography>
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
