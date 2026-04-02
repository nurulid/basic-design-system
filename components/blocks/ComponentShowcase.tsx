import * as fs from 'fs';
import * as path from 'path';
import { ComponentShowcaseClient } from './ComponentShowcaseClient';

function findComponentFile(componentName: string): string | null {
  const componentsDir = path.join(process.cwd(), 'components');
  const subdirs = ['ui', 'ai', 'blocks', 'examples'];
  
  for (const subdir of subdirs) {
    const filePath = path.join(componentsDir, subdir, `${componentName}.tsx`);
    if (fs.existsSync(filePath)) {
      return filePath;
    }
  }
  return null;
}

export function ComponentShowcase({ 
  name, 
  componentName,
  children, 
  usageCode 
}: { 
  name: string, 
  componentName: string,
  children: React.ReactNode, 
  usageCode: string 
}) {
  const filePath = findComponentFile(componentName);
  let sourceCode = '';
  
  if (filePath) {
    try {
      sourceCode = fs.readFileSync(filePath, 'utf8');
    } catch (e) {
      sourceCode = '// Error reading source code for ' + componentName;
    }
  } else {
    sourceCode = '// Source code not found for ' + componentName;
  }

  return (
    <ComponentShowcaseClient 
      name={name} 
      componentName={componentName}
      sourceCode={sourceCode} 
      usageCode={usageCode}
    >
      {children}
    </ComponentShowcaseClient>
  );
}
