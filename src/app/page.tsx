import React from 'react';
import {Button} from "@/components/ui/button";
import {CirclePlusIcon} from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex items-center justify-center w-full h-screen">
        <Button variant="default" size="xl" className="text-custom">
            <CirclePlusIcon />
            Click me
        </Button>
    </div>
  );
}

