import React from 'react';
import CustomButton from "@/components/CustomButton";

export default function HomePage() {
    return (
        <div className="flex items-center justify-center w-full h-screen">
            <CustomButton isRounded={true} disabled={false}/>
        </div>
    );
}

