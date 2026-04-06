import { UiComponentDocsTemplate } from "@/components/blocks/UiComponentDocsTemplate";
import { getUiComponentDoc } from "@/lib/ui-docs";
import { notFound } from "next/navigation";

export default async function UiComponentDocsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = getUiComponentDoc(slug);

  if (!doc) {
    notFound();
  }

  return <UiComponentDocsTemplate doc={doc} />;
}
