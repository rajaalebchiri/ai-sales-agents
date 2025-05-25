import { Star } from "lucide-react";
import React from "react";

type Props = {};

const Settings = (props: Props) => {
  return (
    <div className="w-full mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Payment Integration</h1>
      <div className="w-full p-6 border border-input rounded-lg bg-background shadow-sm">
        <div className="flex items-center mb-4">
          <div className=" h-10 w-10 rounded-full flx items-center justify-center mr-4">
            <Star className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-primary">
              Stripe Connect
            </h2>
            <p className="text-muted-foreground text-sm">
              Connect your Stripe account to start accepting payments
            </p>
          </div>
        </div>
        <div className="my-6 p-4 bg-muted rounded-md">
          <div className="flex items-start"></div>
        </div>
      </div>
    </div>
  );
};

export default Settings;

