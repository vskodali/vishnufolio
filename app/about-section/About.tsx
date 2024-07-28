import SongCarousel from "./SongCarousel";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import Link from "next/link";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={
            "I SPECIALIZE IN CREATING RESPONSIVE AND USER-CENTRIC WEB APPLICATIONS."
          }
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
            <AnimatedBody
              text={
                "Creating software that solves real-world problems and positively impacts people’s lives is my passion."
              }
            />
            <AnimatedBody
              text={
                " I’m also an active leader and member of tech communities, including the Google Developer Student Clubs and Microsoft Learn Student Ambassadors."
              }
              className={"hidden"}
            />
            <AnimatedBody
              text={
                "When I’m not coding, you can find me binge-watching my favorite anime series, cheering on Manchester United, hanging out with friends, or discovering new music in my favorite genres like RnB, UK Drill, and Chill Rap."
              }
            />
            {/* <AnimatedBody
              text={
                "Whether it’s binge-watching my favorite anime series, cheering on Manchester United, hanging out with friends, or discovering new music in my favorite genres like RnB, UK Drill, and Chill Rap, I’m always looking for ways to relax and unwind."
              }
            /> */}
            <AnimatedBody
              text={
                "Currently, I’m working on some exciting projects that I can’t wait to share. I’m always open to new opportunities and collaborations."
              }
            />

            <AnimatedBody text={"Here are some of the projects I’ve done."} />
            {/* <AnimatedBody
              text={
                "StreamFlixDB: Advanced Database Management for Video Streaming Platform"
              }
            /> */}
            <AnimatedTitle
              text={
                "StreamFlixDB: Advanced Database Management for Video Streaming Platform"
              }
              className={
                "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
              }
              wordSpace={"mr-[0.25em]"}
              charSpace={"mr-[0.01em]"}
            />
            <AnimatedBody
              className="text-[18px] font-normal leading-relaxed tracking-wide text-[#e4ded7]/80  md:text-[16px] md:leading-normal lg:text-[18px]"
              text={
                "Designed and implemented a comprehensive SQL Server database for a Video Streaming Platform, incorporating ORM and ER diagrams to model key entities such as movies, budgets, ratings, and global collections. Developed complex SQL queries, triggers, and stored procedures to manage streaming data efficiently, and explored transitioning to Couchbase for enhanced scalability in a cloud environment."
              }
            />
            <AnimatedTitle
              text={"IT Asset Management System"}
              className={
                "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
              }
              wordSpace={"mr-[0.25em]"}
              charSpace={"mr-[0.01em]"}
            />
            <AnimatedBody
              className="text-[18px] font-normal leading-relaxed tracking-wide text-[#e4ded7]/80  md:text-[16px] md:leading-normal lg:text-[18px]"
              text={
                "Implemented an IT Asset Management solution at IniTech Solutions, streamlining serial number monitoring and asset IDs, optimized digital workflows and reduced costs through efficient asset monitoring and reporting."
              }
            />
          </div>

          <div className="mb-24 flex w-[100%] flex-col gap-4 text-[18px] font-normal leading-relaxed tracking-wide text-[#e4ded7]/80 sm:mb-32 md:mb-40 md:gap-6 md:text-[16px] md:leading-normal lg:mt-0 lg:mb-16 lg:max-w-[30%] lg:text-[18px]">
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimatedTitle
                text={"Frontend Tools"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "JavaScript(ES6+), React, Next.js, TypeScript, Redux, Redux Toolkit, React Testing Library, Vitetest, HTML5, Git/GitHub, NextAuth, Formik."
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"UI Libraries"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "CSS3/SCSS/SASS, Tailwind CSS, Material UI, Framer Motion, GSAP, Bootstrap, Chart.js."
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Cloud Tech"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "EC2, IAM, S3, CloudWatch, Lambda, RDS, VPC, ECS, SQS, CloudFront, Elastic Beanstalk, DynamoDB, CloudFormation"
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Certifications"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={"AWS Certified Solutions Architect - Associate"}
              />
              <Link
                href="https://drive.google.com/file/d/1XQ_xRHjImX-OkQUUzuEzctEMx5hEYK6g/view"
                target="_blank"
                className="underline underline-offset-2 hover:no-underline"
                aria-label="Walgreens Website"
              >
                View Certificate
              </Link>{" "}
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col md:-mt-0 lg:mt-28">
          <SongCarousel />
          <AnimatedBody
            text="A few songs I can recommend if you’re looking for some fresh tunes :)"
            className="absolute bottom-10 right-0 left-0 mx-auto w-[90%] text-center text-[14px] font-semibold uppercase text-[#e4ded7] sm:w-[500px] md:bottom-12 md:w-[550px] md:text-[16px] "
          />
        </div>
      </div>
    </section>
  );
};

export default About;
