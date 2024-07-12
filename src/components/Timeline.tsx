import React from "react";
import { Badge } from "./ui/badge";
import { Briefcase } from "lucide-react";
import FramerWrapper from "@/components/FramerWrapper";
import Heading from "@/components/Heading";

type TimelineProps = {
  title: string;
  details: {
    date: string;
    description: string;
  }[];
};
export default function Timeline({ title, details }: TimelineProps) {
  return (
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Briefcase className="h-5 w-5" />
        {title}
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My {title}</Heading>
      </div>
      <div className="w-full h-fit flex flex-col">
        {details.map((item) => {
          return (
            <div className="w-full h-fit flex" key={Number(title)}>
              <FramerWrapper
                y={0}
                x={-100}
                delay={0.35}
                className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base "
              >
                {item.date}
              </FramerWrapper>
              <FramerWrapper
                y={0}
                x={100}
                delay={0.35}
                className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point "
              >
                <div className="text-2xl font-rubik max-sm:text-xl">
                  {item.description}
                </div>
              </FramerWrapper>
            </div>
          );
        })}
      </div>
    </div>
  );
}
