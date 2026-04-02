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

export const tabsUsage = `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs";

export default function App() {
  return (
    <Tabs defaultValue="account" className="w-100">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        Account settings here.
      </TabsContent>
      <TabsContent value="password">
        Password settings here.
      </TabsContent>
    </Tabs>
  );
}`;