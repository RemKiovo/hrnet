import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format, parse, isValid } from "date-fns";

interface PersonalInformationFormProps {
  firstName: string;
  setFirstName: (value: string) => void;
  lastName: string;
  setLastName: (value: string) => void;
  dateOfBirth: Date | undefined;
  setDateOfBirth: (date: Date | undefined) => void;
  startDate: Date | undefined;
  setStartDate: (date: Date | undefined) => void;
}

const PersonalInformationForm: React.FC<PersonalInformationFormProps> = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  dateOfBirth,
  setDateOfBirth,
  startDate,
  setStartDate,
}) => {
  const [dobInputValue, setDobInputValue] = useState(
    dateOfBirth ? format(dateOfBirth, "MM/dd/yyyy") : ""
  );
  const [startDateInputValue, setStartDateInputValue] = useState(
    startDate ? format(startDate, "MM/dd/yyyy") : ""
  );
  const [dobError, setDobError] = useState<string | null>(null);
  const [startDateError, setStartDateError] = useState<string | null>(null);

  const handleDateChange = (
    value: string,
    setter: (date: Date | undefined) => void,
    inputSetter: (value: string) => void,
    errorSetter: (error: string | null) => void
  ) => {
    inputSetter(value);
    if (value === "") {
      setter(undefined);
      errorSetter(null);
      return;
    }
    const parsedDate = parse(value, "MM/dd/yyyy", new Date());
    if (isValid(parsedDate)) {
      setter(parsedDate);
      errorSetter(null);
    } else {
      errorSetter("Please use MM/DD/YYYY format");
    }
  };

  return (
    <fieldset className="space-y-4">
      <legend className="text-lg font-medium">Personal Information</legend>
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            aria-required="true"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            aria-required="true"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
        <div className="space-y-2">
          <Label htmlFor="dateOfBirth">Date of Birth</Label>
          <div className="flex">
            <Input
              id="dateOfBirth"
              value={dobInputValue}
              onChange={(e) =>
                handleDateChange(
                  e.target.value,
                  setDateOfBirth,
                  setDobInputValue,
                  setDobError
                )
              }
              placeholder="MM/DD/YYYY"
              required
              aria-required="true"
              className="rounded-r-none"
            />
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="rounded-l-none"
                  aria-label="Pick a date"
                >
                  <CalendarIcon className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="end">
                <Calendar
                  mode="single"
                  selected={dateOfBirth}
                  onSelect={(date) => {
                    setDateOfBirth(date);
                    setDobInputValue(date ? format(date, "MM/dd/yyyy") : "");
                    setDobError(null);
                  }}
                  initialFocus
                  disabled={(date) =>
                    date > new Date() || date < new Date(1900, 0, 1)
                  }
                />
              </PopoverContent>
            </Popover>
          </div>
          {dobError && (
            <p className="text-red-500 text-sm mt-1 break-words">{dobError}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="startDate">Start Date</Label>
          <div className="flex">
            <Input
              id="startDate"
              value={startDateInputValue}
              onChange={(e) =>
                handleDateChange(
                  e.target.value,
                  setStartDate,
                  setStartDateInputValue,
                  setStartDateError
                )
              }
              placeholder="MM/DD/YYYY"
              required
              aria-required="true"
              className="rounded-r-none"
            />
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="rounded-l-none"
                  aria-label="Pick a date"
                >
                  <CalendarIcon className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="end">
                <Calendar
                  mode="single"
                  selected={startDate}
                  onSelect={(date) => {
                    setStartDate(date);
                    setStartDateInputValue(
                      date ? format(date, "MM/dd/yyyy") : ""
                    );
                    setStartDateError(null);
                  }}
                  initialFocus
                  disabled={(date) => date < new Date()}
                />
              </PopoverContent>
            </Popover>
          </div>
          {startDateError && (
            <p className="text-red-500 text-sm mt-1 break-words text-wrap text-ellipsis">
              {startDateError}
            </p>
          )}
        </div>
      </div>
    </fieldset>
  );
};

export default PersonalInformationForm;
