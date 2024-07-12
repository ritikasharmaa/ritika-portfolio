import FramerWrapper from "@/components/FramerWrapper";
import Heading from "@/components/Heading";
import Timeline from "@/components/Timeline";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const educationPage = () => {
  return (
    <div className="flex flex-col">
      <Timeline
        title="Education"
        details={[
          {
            date: "Sept 2015 – Jun 2019",
            description:
              "B-Tech in Electronics and Communication, Rayat Bahra University, Mohali",
          },
        ]}
      />
      <Timeline
        title="Work"
        details={[
          {
            date: "Feb 2019 – Jul 2019",
            description:
              "Tradebuilder marketing, Design & Technology pvt ltd, Mohali Internship in Frontend Development",
          },
          {
            date: "Aug 2019 - Jan 2020",
            description:
              "Uengage-Shoutlo pvt ltd, Panchkula Software Developer",
          },
          {
            date: "Feb 2020 - Present",
            description: "Zestgeek solutions pvt ltd, Mohali. Technical Lead",
          },
        ]}
      />
    </div>
  );
};

export default educationPage;
