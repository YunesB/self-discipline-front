import { TDayOfWeek } from "@/shared/lib/constants/calendar";

export type THabit = {
  id: string;
  name: string;
  color: string;
  days: TDayOfWeek[];
  monthlyGoal: number;
  checkedDates: number[];
};

export const MOCK_HABITS: THabit[] = [
  {
    id: "habit-1",
    name: "Morning Routine",
    color: "#FF5733",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    monthlyGoal: 20,
    checkedDates: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ],
  },
  {
    id: "habit-2",
    name: "Exercise",
    color: "#33FF57",
    days: ["Monday", "Wednesday", "Friday"],
    monthlyGoal: 15,
    checkedDates: [1, 3, 5, 8, 10, 12, 15, 17, 19, 22, 24, 26, 29],
  },
  {
    id: "habit-3",
    name: "Reading",
    color: "#3357FF",
    days: ["Tuesday", "Thursday"],
    monthlyGoal: 10,
    checkedDates: [2, 4, 9, 11, 16, 18, 23, 25, 30],
  },
  {
    id: "habit-4",
    name: "Meditation",
    color: "#FF33A1",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    monthlyGoal: 25,
    checkedDates: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    ],
  },
  {
    id: "habit-5",
    name: "Healthy Eating",
    color: "#33FFF6",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    monthlyGoal: 30,
    checkedDates: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ],
  },
  {
    id: "habit-6",
    name: "Sleep Schedule",
    color: "#F633FF",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    monthlyGoal: 28,
    checkedDates: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    ],
  },
  {
    id: "habit-7",
    name: "Learning a New Skill",
    color: "#33FF9E",
    days: ["Monday", "Wednesday", "Friday"],
    monthlyGoal: 12,
    checkedDates: [1, 3, 5, 8, 10, 12, 15, 17, 19, 22, 24],
  },
];
