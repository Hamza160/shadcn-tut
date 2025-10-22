import React from 'react';
import {ScrollArea} from "@/components/ui/scroll-area";
import {Checkbox} from "@/components/ui/checkbox";
import {Label} from "@/components/ui/label";

const TodoList = () => {
  return (
    <div className="">
        Calendar
        {/* LIST */}
        <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
            <div className="flex items-center gap-3">
                <Checkbox id="terms" />
                <Label htmlFor="terms">Accept terms and conditions</Label>
            </div>
        </ScrollArea>
    </div>
  );
}

export default TodoList;
