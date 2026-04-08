import { ComponentShowcaseClient } from "./ComponentShowcaseClient";
import { getComponentSource } from "@/lib/component-source";

function getFallbackSourceCode(componentName: string) {
  return `// Source code preview is unavailable in the Edge runtime build for ${componentName}.
// Pass a sourceCode prop to <ComponentShowcase /> if you want to show the component source here.`;
}

export function ComponentShowcase({
  name,
  componentName,
  children,
  usageCode,
  sourceCode,
}: {
  name: string;
  componentName: string;
  children: React.ReactNode;
  usageCode: string;
  sourceCode?: string;
}) {
  return (
    <ComponentShowcaseClient
      name={name}
      componentName={componentName}
      sourceCode={
        sourceCode ??
        getComponentSource(componentName) ??
        getFallbackSourceCode(componentName)
      }
      usageCode={usageCode}
    >
      {children}
    </ComponentShowcaseClient>
  );
}
