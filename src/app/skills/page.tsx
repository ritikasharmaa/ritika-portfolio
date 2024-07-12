import Heading from "@/components/Heading";
import SkillsFooter from "@/components/SkillsFotter";
import { Badge } from "@/components/ui/badge";
import { Lightbulb } from "lucide-react";
import html from "../../../public/html.png";
import css from "../../../public/css.png";
import scss from "../../../public/scss.png";
import js from "../../../public/js.png";
import ts from "../../../public/ts.png";
import react from "../../../public/react.png";
import nextjs from "../../../public/nextjs.jpeg";
import nestjs from "../../../public/nest.jpg";
import go from "../../../public/go.png";
import tailwind from "../../../public/tailwindcss.png";
import expressjs from "../../../public/expressjs.jpeg";
import chakraui from "../../../public/chakraui.jpg";
import github from "../../../public/github.png";
import vscode from "../../../public/vscode.png";
import FramerWrapper from "@/components/FramerWrapper";
const skillPage = () => {
  const language = [
    { alt: "html", img: html },
    { alt: "css", img: css },
    { alt: "js", img: js },
    { alt: "ts", img: ts },
    { alt: "Go", img: go },
  ];
  const framework = [
    { alt: "react", img: react },
    { alt: "nextjs", img: nextjs },
    { alt: "nestjs", img: nestjs },
    { alt: "nestjs", img: expressjs },
    { alt: "scss", img: scss },
    { alt: "chakra-ui", img: chakraui },
    { alt: "tailwind", img: tailwind },
    { alt: "github", img: github },
    { alt: "vscode", img: vscode },
  ];

  return (
    // SKILLS PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Lightbulb className="h-5 w-5" />
        My Skills
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Technical Experience/Skills.</Heading>
        <FramerWrapper y={0} x={200}>
          <p className="font-poppins text-xl w-full text-primary max-sm:text-lg">
            With over 5 years of experience, I specialize in JavaScript for
            dynamic web experiences, CSS for responsive UI design, Node.js for
            scalable backend solutions, and Go for concurrent and
            high-performance services.
          </p>
        </FramerWrapper>
        <FramerWrapper y={100} delay={0.3} className="block">
          <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
            Programming Languages
          </h1>
          <div className="w-full h-fit flex-row flex justify-between items-center">
            <SkillsFooter items={language} />
          </div>
        </FramerWrapper>
        <FramerWrapper className="block" y={100} delay={0.32}>
          <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
            Framework/Libraries and Version Control
          </h1>
          <div className="w-full h-fit flex-row flex justify-between items-center">
            <SkillsFooter items={framework} />
          </div>
        </FramerWrapper>
      </div>
    </div>
  );
};

export default skillPage;
