"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

// BUTTON EXAMPLES
export function DoButtonLoading() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Button 
      variant="primary" 
      onClick={() => {
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 2000);
      }} 
      isLoading={isLoading}
    >
      Save Changes
    </Button>
  );
}

export function DontButtonLoading() {
  return <Button variant="primary">Save Changes</Button>;
}

export function DoButtonHierarchy() {
  return (
    <div className="flex gap-3">
      <Button variant="primary">Save</Button>
      <Button variant="ghost">Cancel</Button>
    </div>
  );
}

export function DontButtonHierarchy() {
  return (
    <div className="flex gap-3">
      <Button variant="primary">Save</Button>
      <Button variant="primary">Cancel</Button>
    </div>
  );
}
