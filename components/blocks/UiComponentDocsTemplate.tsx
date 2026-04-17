import { ComponentShowcase } from "@/components/blocks/ComponentShowcase";
import {
  DocsFactCard,
  DocsGuidelinesGrid,
  DocsPage,
  DocsPreviewCanvas,
  DocsPropsApiTable,
  DocsRelatedComponents,
  DocsDosAndDontsSection,
  DocsDosAndDontsGrid,
  DocsDoCard,
  DocsDontCard,
} from "@/components/blocks/DocsPagePrimitives";
import type { UiComponentDoc } from "@/lib/types";

export function UiComponentDocsTemplate({ doc }: { doc: UiComponentDoc }) {
  return (
    <DocsPage title={doc.title} description={doc.description}>
      <section id="preview" className="space-y-4">
        <ComponentShowcase
          name={doc.showcase.name}
          componentName={doc.showcase.componentName}
          usageCode={doc.showcase.usageCode}
        >
          <DocsPreviewCanvas>{doc.showcase.preview}</DocsPreviewCanvas>
        </ComponentShowcase>
      </section>

      <section id="guidelines" className="space-y-4">
        <DocsGuidelinesGrid>
          {doc.guidelines.map((item) => (
            <DocsFactCard key={item.title} icon={item.icon} title={item.title}>
              {item.content}
            </DocsFactCard>
          ))}
        </DocsGuidelinesGrid>
      </section>

      {doc.dosAndDonts && (
        <DocsDosAndDontsSection>
          <DocsDosAndDontsGrid
            doChildren={doc.dosAndDonts.dos.map((item, idx) => (
              <DocsDoCard key={idx} title={item.title} description={item.description}>
                {item.preview}
              </DocsDoCard>
            ))}
            dontChildren={doc.dosAndDonts.donts.map((item, idx) => (
              <DocsDontCard
                key={idx}
                title={item.title}
                description={item.description}
                dangerous={item.dangerous}
              >
                {item.preview}
              </DocsDontCard>
            ))}
          />
        </DocsDosAndDontsSection>
      )}

      <section id="props-api" className="space-y-4">
        <h2 className="text-3xl font-semibold tracking-tight text-system-heading">Props API</h2>
        <DocsPropsApiTable rows={doc.propsRows} />
      </section>

      <section id="related" className="space-y-4 border-t border-system-border pt-8">
        <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-system-comment">
          Related components
        </h2>
        <DocsRelatedComponents items={doc.relatedComponents} />
      </section>
    </DocsPage>
  );
}
