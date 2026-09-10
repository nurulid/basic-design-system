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

export const breadcrumbUsage = `import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/blocks/Breadcrumb";

export default function App() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Design system</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
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

export const modalUsage = `"use client";

import { useState } from "react";
import { Modal } from "@/components/blocks/Modal";
import { Button } from "@/components/ui/Button";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open modal</Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Delete project?"
        description="Confirming this action permanently removes the project."
      >
        <div className="space-y-4">
          <p>This action cannot be undone.</p>
          <div className="flex justify-end gap-3">
            <Button variant="ghost" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={() => setIsOpen(false)}>
              Delete project
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}`;

export const progressUsage = `import { Progress } from "@/components/blocks/Progress";

export default function App() {
  return (
    <div className="space-y-6">
      <Progress value={65} aria-label="Uploading files: 65 percent" />
      <Progress indeterminate aria-label="Preparing workspace" />
      <Progress
        variant="circular"
        value={80}
        color="success"
        aria-label="Syncing data: 80 percent"
      />
    </div>
  );
}`;

export const alertUsage = `import { Alert } from "@/components/blocks/Alert";

export default function App() {
  return (
    <div className="space-y-4">
      <Alert title="Workspace saved" variant="success">
        Your changes are now available to your team.
      </Alert>
      <Alert title="Connection issue" variant="warning">
        We could not sync the latest updates. Check your connection and try again.
      </Alert>
      <Alert variant="info">Scheduled maintenance starts at 10:00 PM.</Alert>
      <Alert title="Unable to save" variant="error">
        Your changes could not be saved. Review the form and try again.
      </Alert>
    </div>
  );
}`;

export const avatarUsage = `import { Avatar } from "@/components/blocks/Avatar";

export default function App() {
  return (
    <div className="flex items-center gap-4">
      <Avatar src="/avatar-demo.svg" alt="Alex Morgan" />
      <Avatar fallback="Alex Morgan" aria-label="Alex Morgan" size="sm" />
      <Avatar aria-label="Unknown user" size="lg" />
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
