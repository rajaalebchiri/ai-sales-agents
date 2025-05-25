import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Webinar } from "@prisma/client";
import { format } from "date-fns";
import { Calendar1Icon, ListEnd } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {
  webinar: Webinar;
};

function WebinarCard({ webinar }: Props) {
  return (
    <Card className="relative bg-white dark:bg-[#1F1F2E] rounded-md shadow-md p-4">
      <Tooltip>
        <TooltipTrigger>
          <Link
            href={`/webinars/${webinar?.id}/pipeline`}
            className="absolute top-4 dark:text-white right-4 opacity-30 rotate-180"
          >
            <ListEnd className="w-4 h-4 " />
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">Pipeline</TooltipContent>
      </Tooltip>

      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-base font-semibold text-[#030229] dark:text-white">
            <Link href={`/live-webinar/${webinar?.id}`}>{webinar?.title}</Link>
          </CardTitle>
        </div>
      </CardHeader>

      {/* Description */}
      <CardContent className="text-sm text-black dark:text-gray-300 opacity-70">
        {webinar?.description}
      </CardContent>

      <CardFooter className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4">
        <div className="flex items-center space-x-4 text-xs text-[#030229] dark:text-white opacity-70">
          <div className="flex items-center space-x-1">
            <Calendar1Icon className="w-4 h-4" />
            <span>{format(new Date(webinar?.startTime), "dd/MM/yyyy")}</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

export default WebinarCard;
