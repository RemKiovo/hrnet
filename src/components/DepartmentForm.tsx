import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface DepartmentFormProps {
  department: string;
  setDepartment: (value: string) => void;
}

const DepartmentForm: React.FC<DepartmentFormProps> = ({
  department,
  setDepartment,
}) => {
  return (
    <fieldset className="space-y-4">
      <legend className="text-lg font-medium">Department</legend>
      <Select value={department} onValueChange={setDepartment} required>
        <SelectTrigger
          id="department"
          className="w-full"
          aria-label="Select a state"
        >
          <SelectValue placeholder="Select a department" />
        </SelectTrigger>
        <SelectContent className="max-h-[200px] overflow-y-auto">
          <SelectItem value="engineering">Engineering</SelectItem>
          <SelectItem value="marketing">Marketing</SelectItem>
          <SelectItem value="sales">Sales</SelectItem>
          <SelectItem value="hr">Human Resources</SelectItem>
          <SelectItem value="legal">Legal</SelectItem>
        </SelectContent>
      </Select>
    </fieldset>
  );
};

export default DepartmentForm;
