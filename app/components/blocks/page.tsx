import { ComponentShowcase } from "@/components/blocks/ComponentShowcase";
import * as UsageCodesBlock from "@/components/examples/UsageCodesBlock";
import { Button } from "@/components/ui/Button";
import { Tabs, TabsTrigger, TabsContent, TabsList } from "@/components/ui/Tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/blocks/Card";
import { Input } from "@/components/ui/Input";
import { SidebarDemo } from "@/components/examples/SidebarDemo";

export default function Page() {
  return (
    <section id="ui-components" className="space-y-12 scroll-mt-24">
      <div className="border-b border-system-border pb-4">
        <h2 className="text-2xl font-semibold tracking-tight font-serif text-system-heading">
          Blocks
        </h2>
        <p className="text-system-comment mt-2">
          Blocks are more complex UI patterns. They often combine multiple
          components to create a functional unit that can be repeated across
          different layouts.
        </p>
      </div>

      <ComponentShowcase
        name="Card"
        componentName="Card"
        usageCode={UsageCodesBlock.cardUsage}
      >
        <div className="flex justify-center">
          <Card className="w-full max-w-sm" as="article">
            <CardHeader>
              <CardTitle>Create project</CardTitle>
              <CardDescription>
                Deploy your new project in one-click.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Input
                      label="Name"
                      id="name"
                      placeholder="Name of your project"
                    />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>Deploy</Button>
            </CardFooter>
          </Card>
        </div>
      </ComponentShowcase>

      <ComponentShowcase
        name="Tabs"
        componentName="Tabs"
        usageCode={UsageCodesBlock.tabsUsage}
      >
        <Tabs defaultValue="account" className="w-100">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent
            value="account"
            className="p-4 bg-system-soft rounded-sm border border-system-border mt-4"
          >
            <h4 className="text-sm font-medium mb-2 text-system-heading">
              Account Settings
            </h4>
            <p className="text-sm text-system-text">
              Make changes to your account here. Click save when you&apos;re
              done.
            </p>
          </TabsContent>
          <TabsContent
            value="password"
            className="p-4 bg-system-soft rounded-sm border border-system-border mt-4"
          >
            <h4 className="text-sm font-medium mb-2 text-system-heading">
              Password Settings
            </h4>
            <p className="text-sm text-system-text">
              Change your password here. After saving, you&apos;ll be logged
              out.
            </p>
          </TabsContent>
        </Tabs>
      </ComponentShowcase>

      <ComponentShowcase
        name="Sidebar"
        componentName="Sidebar"
        usageCode={UsageCodesBlock.sidebarUsage}
      >
        <SidebarDemo />
      </ComponentShowcase>
    </section>
  );
}
