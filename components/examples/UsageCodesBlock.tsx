export const cardUsage = `import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/blocks/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function App() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <Input label="Name" id="name" placeholder="Name of your project" />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  );
}`;

export const accordionUsage = `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/blocks/Accordion";

export default function App() {
  return (
    <Accordion type="single" defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is an accordion?</AccordionTrigger>
        <AccordionContent>
          It reveals and hides related content in the current context.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Can multiple items be open?</AccordionTrigger>
        <AccordionContent>
          Yes. Set type to multiple and pass an array of values.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`;

export const tooltipUsage = `import { Tooltip } from "@/components/blocks/Tooltip";
import { Button } from "@/components/ui/Button";

export default function App() {
  return (
    <Tooltip content="Save your current changes">
      <Button>Save</Button>
    </Tooltip>
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

export const sidebarUsage = `'use client';

import { Bot, MessageSquare, FolderKanban, Compass, Settings } from "lucide-react";
import { Sidebar } from "@/components/ui/Sidebar";

const items = [
  { id: "assistant", label: "Assistant", icon: <Bot className="h-4 w-4" /> },
  { id: "conversations", label: "Conversations", icon: <MessageSquare className="h-4 w-4" /> },
  { id: "projects", label: "Projects", icon: <FolderKanban className="h-4 w-4" /> },
  { id: "explore", label: "Explore", icon: <Compass className="h-4 w-4" /> },
  { id: "settings", label: "Settings", icon: <Settings className="h-4 w-4" /> },
];

export default function App() {
  return (
    <Sidebar
      title="AI Workspace"
      items={items}
    />
  );
}`;
