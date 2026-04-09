import { FC, useState } from "react";

import { Save } from "lucide-react";

import { Button, Heading, RoundedBox } from "@/shared/ui/atoms";
import { Textarea } from "@/shared/ui/shadcn";

export const WritingArea: FC = () => {
  const [text, setText] = useState("");

  const handleSave = () => {
    console.log(text);
  };

  return (
    <RoundedBox className="animate-slide-left">
      <Heading className="mb-4">How was your day?</Heading>
      <Textarea
        rows={22}
        value={text}
        name="dayThoughts"
        onChange={(e) => setText(e.target.value)}
        className="w-full resize-none bg-blue-50/50"
        placeholder="Write your thoughts, feelings, and reflections about the day here..."
      />
      <Button fullWidth className="mt-4" variant="outline" onClick={handleSave}>
        <Save className="size-4 mr-2" />
        Save
      </Button>
    </RoundedBox>
  );
};
