import { Button } from "@/components/ui/Button";
import { Checkbox, CheckboxGroup } from "@/components/ui/Checkbox";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/blocks/Card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs";

export function HomePreviewSection() {
  return (
    <section className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight text-system-heading sm:text-3xl">
          See it in action
        </h2>
        <p className="text-system-text max-w-2xl">
          A curated look at the components and patterns available in the system.
        </p>
      </div>

      <div
        className="rounded-2xl border border-system-border/70 p-6 space-y-12"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, color-mix(in srgb, var(--color-system-border) 40%, transparent) 1px, transparent 0)",
          backgroundSize: "18px 18px",
        }}
      >
        <div>
          <span className="block mb-3 text-xs font-medium tracking-widest uppercase text-system-text/60">
            Buttons
          </span>
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <span className="block mb-3 text-xs font-medium tracking-widest uppercase text-system-text/60">
              Form controls
            </span>
            <CheckboxGroup legend="Notification preferences">
              <Checkbox
                id="hp-email"
                label="Email notifications"
                defaultChecked
              />
              <Checkbox id="hp-push" label="Push notifications" />
              <Checkbox
                id="hp-sms"
                label="SMS notifications"
                disabled
              />
            </CheckboxGroup>
          </div>

          <div>
            <span className="block mb-3 text-xs font-medium tracking-widest uppercase text-system-text/60">
              Compositional blocks
            </span>
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
              </TabsList>
              <TabsContent
                value="overview"
                className="p-4 bg-system-soft rounded-xl border border-system-border mt-3"
              >
                <h4 className="text-sm font-medium mb-1 text-system-heading">
                  System overview
                </h4>
                <p className="text-sm text-system-text">
                  Components are grouped into UI primitives, blocks, and AI
                  patterns. Each category has its own documentation section.
                </p>
              </TabsContent>
              <TabsContent
                value="details"
                className="p-4 bg-system-soft rounded-xl border border-system-border mt-3"
              >
                <h4 className="text-sm font-medium mb-1 text-system-heading">
                  Technical details
                </h4>
                <p className="text-sm text-system-text">
                  Built with React 19, TypeScript, and Tailwind CSS v4. All
                  components use forwardRef and support native HTML attributes.
                </p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
