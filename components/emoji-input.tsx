import EmojiPicker from "emoji-picker-react";
import { PopoverCloseButton, PopoverContent, PopoverFooter, PopoverForm, PopoverLabel, PopoverRoot, PopoverSubmitButton, PopoverTextarea, PopoverTrigger } from "./ui/popover";


export default function EmojiInput() {
	return (
		  <div className="p-8">
     
      <PopoverRoot>
        <PopoverTrigger>Add Note</PopoverTrigger>
        <PopoverContent >
         <EmojiPicker />
        </PopoverContent>
      </PopoverRoot>
    </div>
	);
}
