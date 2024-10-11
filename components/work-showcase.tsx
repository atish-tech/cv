import { WorkExperience } from "@/lib/data";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";
import DateRange from "./date-range";
import { SiEnterprisedb } from "react-icons/si";

interface WorkShowcaseProps {
  experience: WorkExperience;
  whetherlast: boolean;
}

export default function WorkShowcase({
  experience,
  whetherlast,
}: WorkShowcaseProps) {
  return (
    <div className="">
      <div className="space-y-2 ">
        <div className="flex items-center space-x-4">
          <h3 className="font-semibold leading-none tracking-tight">
            {experience.company}
          </h3>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <p className="dark:text-zinc-300">{experience.role}</p>

          <DateRange date={experience.years} />
        </div>
        <p className="text-sm text-muted-foreground pb-2">
          {experience.description}
        </p>
        {whetherlast ? <></> : <Separator />}
      </div>
    </div>
  );
}
