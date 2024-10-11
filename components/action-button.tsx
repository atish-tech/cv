"use client";

import React from "react";
import { Button } from "./ui/button";
import { CheckCircle } from "lucide-react";

interface ActionButtonProps {
  actionText: string;
  email: string;
}

export default function ActionButton({ actionText, email }: ActionButtonProps) {
  return (
    <Button>
      <CheckCircle className="mr-2 h-4 w-4" />
      <style jsx>{`
        a {
          text-decoration: none;
        }
      `}</style>
      <a
        className="hover:dark:text-black hover:text-white"
        href={`mailto:${email}`}
      >
        {actionText}
      </a>
    </Button>
  );
}
