import { FC } from "react";

import { useForm } from "effector-forms";

import { $$calendarModel } from "../../model";

import { MONTHS, TMonths, CURRENT_YEAR } from "@/shared/lib/constants/calendar";
import { Button, Select } from "@/shared/ui/atoms";

const YEARS = Array.from(
  { length: 10 },
  (_, i) => new Date().getFullYear() - 5 + i,
);

export const SearchMonthForm: FC = () => {
  const { fields, submit } = useForm($$calendarModel.$$datesForm);

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
    >
      <Select
        label="Month"
        value={fields.month.value}
        onChange={(v) => fields.month.onChange(v as TMonths)}
        options={MONTHS.map((month) => ({ label: month, value: month }))}
      />

      <Select
        label="Year"
        value={String(fields.year.value)}
        defaultValue={CURRENT_YEAR.toString()}
        onChange={(v) => fields.year.onChange(Number(v))}
        options={YEARS.map((year) => ({
          label: year.toString(),
          value: year.toString(),
        }))}
      />

      <Button type="submit" className="w-full">
        Go to date
      </Button>
    </form>
  );
};
