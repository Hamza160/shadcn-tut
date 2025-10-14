import React from 'react';
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";

const CustomButton = ({disabled, isRounded}: {disabled:boolean; isRounded:boolean}) => {
  return (
    <div>
        <Button className={cn(
            `text-sm p-4`,
            disabled ? "bg-gray-300" : "bg-blue-500",
            isRounded && "rounded-full"
        )}>Hello</Button>
        {/*<Button className={*/}
        {/*    `text-sm */}
        {/*${disabled ? "bg-gray-300": "bg-blue-500"}*/}
        {/*${isRounded ? "rounded-full": ""}*/}
        {/* p-4`*/}
        {/*}>*/}
        {/*    Hello*/}
        {/*</Button>*/}
    </div>
  );
}

export default CustomButton;
