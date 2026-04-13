export const buttonUsage = `import { Button } from "@/components/ui/Button";

export default function App() {
  return (
    <div className="flex gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="success">Success</Button>
      <Button variant="info">Info</Button>
      <Button variant="warning">Warning</Button>
    </div>
  );
}`;

export const inputUsage = `import { Input } from "@/components/ui/Input";

export default function App() {
  return (
    <div className="space-y-4">
      <Input
        label="Email address"
        type="email"
        placeholder="name@example.com"
      />
      <Input
        label="Password"
        type="password"
        error="Password must be at least 8 characters."
      />
    </div>
  );
}`;

export const textareaUsage = `import { Textarea } from "@/components/ui/Textarea";

export default function App() {
  return (
    <Textarea
      label="Message"
      placeholder="Type your message here..."
    />
  );
}`;

export const checkboxUsage = `import { Checkbox, CheckboxGroup } from "@/components/ui/Checkbox";

export default function App() {
  return (
    <CheckboxGroup legend="Options">
      <Checkbox id="c1" label="Accept terms and conditions" />
      <Checkbox id="c2" label="Subscribe to newsletter" defaultChecked />
      <Checkbox id="c3" label="Disabled option" disabled />
    </CheckboxGroup>
  );
}`;

export const radioUsage = `import { Radio, RadioGroup } from "@/components/ui/Radio";

export default function App() {
  return (
    <RadioGroup defaultValue="r1" legend="Choices">
      <Radio id="r1" value="r1" label="Default option" />
      <Radio id="r2" value="r2" label="Secondary option" />
      <Radio id="r3" value="r3" label="Disabled option" disabled />
    </RadioGroup>
  );
}`;

export const switchUsage = `import { Switch } from "@/components/ui/Switch";

export default function App() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="s1" defaultChecked />
      <label htmlFor="s1" className="text-sm font-medium leading-none cursor-pointer">
        Enable notifications
      </label>
    </div>
  );
}`;

export const selectUsage = `import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select";

export default function App() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </Select>
  );
}`;
