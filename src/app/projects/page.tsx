import FramerWrapper from "@/components/FramerWrapper";
import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";

const projectsPage = () => {
  const Projects = [
    {
      title: "Tigerhall - A social learning Platform",
      description:
        "Tigerhall is a social learning platform for B2B, B2C organizations",
      tags: ["Reactjs", "Graphql", "Typescript", "ChakraUI"],
      link: "https://tigerhall.com",
    },
    {
      title: "Talksay",
      description:
        "Talksay was a social media platform where you can create rooms and talk or chat with the persons",
      tags: ["Nextjs", "Typescript", "Tailwind Css"],
      link: "https://Talksay.live",
    },
    {
      title: "Uengage",
      description:
        "Uengage was a customer admin panel were user can track there outlets, order etc ",
      tags: ["Angular", "Typescript", "Angular Material"],
      link: "https://www.uengage.in/",
    },
  ];

  return (
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Layers className="h-5 w-5" />
        Projects
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Projects</Heading>
        <FramerWrapper y={0} x={200}>
          <p className=" font-poppins text-lg w-full text-primary max-sm:text-base">
            I love to Build Cool Projects. Here, you&#x27;ll find a curated
            collection of my creative endeavors and technical projects. Each
            piece represents a journey of innovation, problem-solving, and
            continuous learning. Feel free to explore this showcase of my
            passion and expertise in action.
          </p>
        </FramerWrapper>
      </div>

      <div className=" w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
        {Projects.map((val, indx) => {
          return <ProjectCards key={indx} value={val} num={indx} />;
        })}
      </div>
    </div>
  );
};

export default projectsPage;
