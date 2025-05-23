"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { useWebinarStore } from "@/store/useWebinarStore";
import { PlusIcon } from "lucide-react";
import MultiStepForm from "./MultiStepForm";
import BasicInfoStep from "./BasicInfoStep";

type Props = {};

function CreateWebinarButton({}: Props) {
  const { isModalOpen, setModalOpen, isComplete, setComplete } =
    useWebinarStore();

  const [webinarLink, setWebinarLink] = useState<string>("");

  const steps = [
    {
      id: "basicInfo",
      title: "Basic Information",
      description: "Please fill out the standard info needed for your webinar",
      component: <BasicInfoStep />,
    },
  ];

  const handleComplete = (webinarId: string) => {
    console.log(webinarId);
    setComplete(true);
    setWebinarLink(
      `${process.env.NEXT_PUBLIC_BASE_URL}/live-webinar/${webinarId}`
    );
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={setModalOpen}>
      <DialogTrigger asChild>
        <button className="rounded-xl flex gap-2 items-center hover:cursor-pointer px-4 py-2 border border-border bg-primary/10 backdrop-blur-sm font-normal text-primary hover:bg-primary-20">
          <PlusIcon /> Create Webinar
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[900px] p-0 border-none">
        {isComplete ? (
          <div className="bg-mutes text-primary rounded-lg overflow-hidden">
            <DialogTitle className="sr-only">Webinar Created</DialogTitle>
            {/* Sucess Step */}
          </div>
        ) : (
          <>
            <DialogTitle className="sr-only">Create Webinar</DialogTitle>
            <MultiStepForm steps={steps} onComplete={handleComplete} />
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default CreateWebinarButton;
