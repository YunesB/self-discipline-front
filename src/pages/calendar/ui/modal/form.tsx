import { FC } from "react";
import { useForm, Controller } from "react-hook-form";

import { useUnit } from "effector-react";

import { $$calendarModel } from "../../model";
import { TCalendarValues } from "../../types";

import { MONTHS, TMonths, CURRENT_YEAR } from "@/shared/lib/constants/calendar";
import { Button, Select } from "@/shared/ui/atoms";

const YEARS = Array.from(
  { length: 10 },
  (_, i) => new Date().getFullYear() - 5 + i,
);

export const SearchMonthForm: FC = () => {
  const [currentMonth, handleDateSelection] = useUnit([
    $$calendarModel.$currentMonth,
    $$calendarModel.handleDateSelection,
  ]);

  const { control, handleSubmit } = useForm<TCalendarValues>({
    defaultValues: {
      month: currentMonth,
      year: CURRENT_YEAR,
    },
  });

  const onSubmit = (data: TCalendarValues) => {
    handleDateSelection(data);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="month"
        control={control}
        render={({ field }) => (
          <Select
            label="Month"
            value={field.value}
            onChange={(v) => field.onChange(v as TMonths)}
            options={MONTHS.map((month) => ({ label: month, value: month }))}
          />
        )}
      />

      <Controller
        name="year"
        control={control}
        render={({ field }) => (
          <Select
            label="Year"
            value={String(field.value)}
            onChange={(v) => field.onChange(Number(v))}
            options={YEARS.map((year) => ({
              label: year.toString(),
              value: year.toString(),
            }))}
          />
        )}
      />

      <Button type="submit" className="w-full">
        Go to date
      </Button>
    </form>
  );
};
