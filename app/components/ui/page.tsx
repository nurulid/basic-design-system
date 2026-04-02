import { ComponentShowcase } from "@/components/blocks/ComponentShowcase";
import { Tabs, TabsTrigger, TabsContent, TabsList } from "@/components/ui/Tabs";
import * as UsageCodesUI from "@/components/examples/UsageCodesUI";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Checkbox, CheckboxGroup } from "@/components/ui/Checkbox";
import { Radio, RadioGroup } from "@/components/ui/Radio";

export default function Page() {
  return (
    <>
      <section id="ui-components" className="space-y-12">
        <div className="border-b border-system-border pb-4">
          <h2 className="text-2xl font-semibold tracking-tight font-serif text-system-heading">
            UI Components
          </h2>
          <p className="text-system-comment mt-2">
            Core building blocks for creating user interfaces.
          </p>
        </div>

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
          name="Input Fields"
          componentName="Input"
          usageCode={UsageCodesUI.inputUsage}
        >
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
        </ComponentShowcase>

        <ComponentShowcase
          name="Textarea"
          componentName="Textarea"
          usageCode={UsageCodesUI.textareaUsage}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <Textarea
                label="Message"
                placeholder="Type your message here..."
              />
              <Textarea
                label="Bio"
                error="Bio is too long."
                defaultValue="This is a very long bio that exceeds the maximum character limit..."
              />
            </div>
          </div>
        </ComponentShowcase>

        <ComponentShowcase
          name="Checkbox"
          componentName="Checkbox"
          usageCode={UsageCodesUI.checkboxUsage}
        >
          <CheckboxGroup legend="Options">
            <Checkbox id="c1" label="Accept terms and conditions" />
            <Checkbox id="c2" label="Subscribe to newsletter" defaultChecked />
            <Checkbox id="c3" label="Disabled option" disabled />
          </CheckboxGroup>
        </ComponentShowcase>

        <ComponentShowcase
          name="Radio"
          componentName="Radio"
          usageCode={UsageCodesUI.radioUsage}
        >
          <RadioGroup defaultValue="r1" legend="Choices">
            <Radio id="r1" value="r1" label="Default option" />
            <Radio id="r2" value="r2" label="Secondary option" />
            <Radio id="r3" value="r3" label="Disabled option" disabled />
          </RadioGroup>
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
    </>
  );
}
