import { Button } from "@/components/ui/Button";
import { Checkbox, CheckboxGroup } from "@/components/ui/Checkbox";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";

export default function ComponentsPage() {
  return (
    <>
      <h1>Components</h1>
      <p>Button</p>
      <div className="flex flex-wrap items-center gap-4">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="success">Success</Button>
        <Button variant="info">Info</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="primary" aria-disabled="true">
          Disabled
        </Button>
      </div>

      <p>Input</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <Input
            label="Email address"
            type="email"
            placeholder="name@example.com"
          />
          <Input
            label="Password"
            type="password"
            error="Password must be at least 8 characters."
            defaultValue="123"
          />
        </div>
      </div>

      <p>Textarea</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <Textarea label="Message" placeholder="Type your message here..." />
          <Textarea
            label="Bio"
            error="Bio is too long."
            defaultValue="This is a very long bio that exceeds the maximum character limit..."
          />
        </div>
      </div>

      <p>Checkbox</p>
      <CheckboxGroup legend="Options">
        <Checkbox id="c1" label="Accept terms and conditions" />
        <Checkbox id="c2" label="Subscribe to newsletter" defaultChecked />
        <Checkbox id="c3" label="Disabled option" disabled />
      </CheckboxGroup>
    </>
  );
}
