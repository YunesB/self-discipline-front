import { FC } from "react";
import { useForm, Controller } from "react-hook-form";

import { WEEKDAYS, TDayOfWeek } from "@/shared/lib/constants/calendar";
import { Input, Label, Button, Switch } from "@/shared/ui/atoms";
import { ToggleGroup, ToggleGroupItem } from "@/shared/ui/shadcn";

type TFormValues = {
  name: string;
  goal: number;
  weekDays: TDayOfWeek[];
  isDestructive?: boolean;
};

type TProps = {
  onClose: VoidFunction;
};

const WEEKDAY_PRESETS = [
  {
    name: "Odd days",
    value: WEEKDAYS.filter((_, i) => i % 2 === 0),
  },
  {
    name: "Even days",
    value: WEEKDAYS.filter((_, i) => i % 2 !== 0),
  },
  {
    name: "Weekdays",
    value: WEEKDAYS.filter((_, i) => i < 5),
  },
  {
    name: "Weekends",
    value: WEEKDAYS.filter((_, i) => i >= 5),
  },
];

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

        <Controller
          control={control}
          name="isDestructive"
          render={({ field: { value, onChange } }) => (
            <Switch
              checked={value}
              onCheckedChange={onChange}
              label="Is habit destructive?"
            />
          )}
        />

        <div>
          <Label className="mb-2">Days of the week</Label>
          <Controller
            name="weekDays"
            control={control}
            render={({ field: { value, onChange } }) => (
              <div>
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
                <ul className="flex flex-wrap gap-2 mt-4">
                  {WEEKDAY_PRESETS.map(({ name, value }, index) => (
                    <li key={index}>
                      <button
                        type="button"
                        onClick={() => onChange(value)}
                        className="p-2 bg-gray-100 text-black w-full text-xs rounded-md hover:bg-gray-200 transition-all border hover:border-blue-400"
                      >
                        {name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
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
