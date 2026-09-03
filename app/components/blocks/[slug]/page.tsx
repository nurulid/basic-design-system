import { UiComponentDocsTemplate } from "@/components/blocks/UiComponentDocsTemplate";
import { getBlockComponentDoc } from "@/lib/ui-docs";
import { notFound } from "next/navigation";

export const runtime = "edge";

export default async function BlockDocsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = getBlockComponentDoc(slug);

  if (!doc) {
    notFound();
  }

  return <UiComponentDocsTemplate doc={doc} />;
}
