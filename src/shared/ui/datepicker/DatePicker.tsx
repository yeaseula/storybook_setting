"use client";

import * as React from "react";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Field, FieldLabel } from "@/components/ui/field";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { cn } from "@/shared/lib/utils";

interface DatePickerProps {
  label?: string;
  placeholder?: string;
}

export function DatePicker({ label, placeholder }: DatePickerProps) {
  const [date, setDate] = React.useState<Date>();

  return (
    <Field className="mx-auto w-44">
      <FieldLabel
        htmlFor="date-picker-simple"
        className={cn(!label && "sr-only")}
      >
        {label}
      </FieldLabel>
      <Popover>
        <PopoverTrigger
          render={
            <Button
              variant="outline"
              id="date-picker-simple"
              className="justify-start font-normal"
            >
              {date ? (
                format(date, "PPP")
              ) : (
                <span>{placeholder ? placeholder : "Pick a date"}</span>
              )}
            </Button>
          }
        />
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            defaultMonth={date}
          />
        </PopoverContent>
      </Popover>
    </Field>
  );
}
