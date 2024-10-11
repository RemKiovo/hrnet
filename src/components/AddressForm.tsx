import { US_STATES } from "@/constants";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface AddressFormProps {
  street: string;
  setStreet: (value: string) => void;
  city: string;
  setCity: (value: string) => void;
  state: string;
  setState: (value: string) => void;
  zipCode: number | null;
  setZipCode: (value: number | null) => void;
}

const AddressForm: React.FC<AddressFormProps> = ({
  street,
  setStreet,
  city,
  setCity,
  state,
  setState,
  zipCode,
  setZipCode,
}) => {
  return (
    <fieldset className="space-y-4">
      <legend className="text-lg font-medium">Address</legend>
      <div className="space-y-2">
        <Label htmlFor="street">Street</Label>
        <Input
          id="street"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          required
          aria-required="true"
        />
      </div>
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
        <div className="space-y-2">
          <Label htmlFor="city">City</Label>
          <Input
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            aria-required="true"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="state">State</Label>
          <Select value={state} onValueChange={setState} required>
            <SelectTrigger
              id="state"
              className="w-full"
              aria-label="Select a state"
            >
              <SelectValue placeholder="Select a state" />
            </SelectTrigger>
            <SelectContent className="max-h-[200px] overflow-y-auto">
              {US_STATES.map((stateName) => (
                <SelectItem key={stateName} value={stateName}>
                  {stateName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="zipCode">Zip Code</Label>
        <Input
          id="zipCode"
          value={zipCode ? zipCode.toString() : ""}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, "");
            setZipCode(value ? Number(value) : null);
          }}
          required
          aria-required="true"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={5}
        />
      </div>
    </fieldset>
  );
};

export default AddressForm;
