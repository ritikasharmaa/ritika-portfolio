import Aboutfooter from "@/components/Aboutfooter";
import FramerWrapper from "@/components/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Circle, Heart, User2 } from "lucide-react";
const page = () => {
  const items = [
    { hobby: "Coding" },
    { hobby: "Playing games" },
    { hobby: "Creating Cool Projects" },
  ];

  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <User2 className="h-5 w-5" />
        About me
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>
          Fullstack <br /> Developer, Based In India.
        </Heading>

        <FramerWrapper y={0} x={100}>
          <div className="relative backdrop-blur-[2px] p-[5px]">
            <p className=" font-poppins text-xl w-full text-primary max-sm:text-lg">
              I am a Full Stack Web Developer from Chandigarh, India. With over
              5 years of experience in the tech industry, I am a seasoned Full
              Stack Developer and Technical Lead specializing in JavaScript,
              CSS, and Node.js. My journey in coding has been fueled by a
              relentless passion for creating seamless and efficient web
              applications. From designing intuitive front-end interfaces to
              developing robust back-end solutions, I thrive on turning complex
              problems into elegant, user-friendly solutions..
            </p>
          </div>
        </FramerWrapper>
      </div>
      <FramerWrapper
        className="w-full flex flex-row justify-between max-lg:flex-col "
        y={100}
        delay={0.3}
      >
        <Aboutfooter />
      </FramerWrapper>
      <FramerWrapper className="block" y={100} delay={0.31}>
        <h1 className="gap-2 text-3xl font-poppins text-primary font-semibold flex icon_underline relative max-sm:text-2xl ">
          {" "}
          <Heart className="h-8 w-8" /> Hobbies
        </h1>
        <div className="w-full h-fit p-2 flex flex-row justify-between gap-7 max-lg:flex-col mt-3">
          {items.map((val, indx) => {
            return (
              <div
                key={indx}
                className="flex gap-2 justify-center items-center flex-row text-xl text-primary pt-3 max-lg:justify-start backdrop-blur-[2px]"
              >
                <Circle className="h-3 w-3" /> {val.hobby}
              </div>
            );
          })}
        </div>
      </FramerWrapper>
    </div>
  );
};

export default page;
