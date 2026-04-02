"use client";

import * as React from "react";
import { SourceCodeBlock } from "@/components/blocks/SourceCodeBlock";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs";

export function ComponentShowcaseClient({
  name,
  componentName,
  sourceCode,
  usageCode,
  children,
}: {
  name: string;
  componentName: string;
  sourceCode: string;
  usageCode: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-system-heading">{name}</h3>

      <Tabs defaultValue="preview" className="w-full">
        <TabsList className="grid w-full grid-cols-3 max-w-[400px]">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
          <TabsTrigger value="code">Source Code</TabsTrigger>
        </TabsList>

        <TabsContent
          value="preview"
          className="mt-4 p-8 bg-system-card rounded-3xl shadow-[--shadow-diffuse] border border-system-border"
        >
          {children}
        </TabsContent>

        <TabsContent value="usage" className="mt-4">
          <SourceCodeBlock code={usageCode} language="tsx" />
        </TabsContent>

        <TabsContent value="code" className="mt-4">
          <SourceCodeBlock
            code={sourceCode}
            language="tsx"
            filename={`${componentName}.tsx`}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
