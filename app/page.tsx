import { ComponentShowcase } from "@/components/blocks/ComponentShowcase";
import { Tabs, TabsTrigger, TabsContent, TabsList } from "@/components/ui/Tabs";
import * as UsageCodesUI from "@/components/examples/UsageCodesUI";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div>
      <main className="flex-1 min-w-0 space-y-24">
        <section className="space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight text-system-heading sm:text-5xl">
            Basic Design System
          </h1>
          <p className="text-lg text-system-text max-w-2xl">
            A design system UI library featuring a tiered dark palette, semantic
            glow states, and intentional visual hierarchy.
          </p>
        </section>

        <section id="ui-components" className="space-y-12 scroll-mt-24">
          <ComponentShowcase
            name="Buttons"
            componentName="Button"
            usageCode={UsageCodesUI.buttonUsage}
          >
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
          </ComponentShowcase>

          <ComponentShowcase
            name="Tabs"
            componentName="Tabs"
            usageCode={UsageCodesUI.tabsUsage}
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
        </section>
      </main>
    </div>
  );
}
