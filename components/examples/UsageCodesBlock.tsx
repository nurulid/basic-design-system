export const cardUsage = `import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
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