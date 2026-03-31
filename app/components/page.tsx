import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

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
    </>
  );
}
