import { FC } from "react";
import { useForm, Controller } from "react-hook-form";

import { WEEKDAYS, TDayOfWeek } from "@/shared/lib/constants/calendar";
import { Input, Label, Button } from "@/shared/ui/atoms";
import { ToggleGroup, ToggleGroupItem } from "@/shared/ui/shadcn";

type TFormValues = {
  name: string;
  goal: number;
  weekDays: TDayOfWeek[];
};

type TProps = {
  onClose: VoidFunction;
};

export const HabitForm: FC<TProps> = ({ onClose }) => {
  const { control, handleSubmit } = useForm<TFormValues>({
    defaultValues: {
      name: "",
      goal: 0,
      weekDays: [WEEKDAYS[0]],
    },
  });

  const onSubmit = (data: TFormValues) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="h-[calc(100%-20px)] flex flex-col justify-between"
    >
      <div className="space-y-4">
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <Input label="Name" maxLength={40} {...field} />
          )}
        />
        <Controller
          name="goal"
          control={control}
          render={({ field }) => (
            <Input label="Goal" type="number" {...field} />
          )}
        />

        <div>
          <Label className="mb-2">Days of the week</Label>
          <Controller
            name="weekDays"
            control={control}
            render={({ field: { value, onChange } }) => (
              <ToggleGroup
                value={value}
                type="multiple"
                onValueChange={onChange}
                className="flex-wrap p-4 shadow-inner rounded-md border"
              >
                {WEEKDAYS.map((day) => (
                  <ToggleGroupItem key={day} value={day}>
                    {day}
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            )}
          />
        </div>
      </div>

      <div className="flex space-x-2">
        <Button fullWidth variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button fullWidth>Save</Button>
      </div>
    </form>
  );
};
