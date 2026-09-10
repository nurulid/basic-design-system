"use client";

import * as React from "react";
import { Modal } from "@/components/patterns/Modal";
import { Button } from "@/components/ui/Button";

export function ModalDemo() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open modal</Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Delete project?"
        description="Confirming this action permanently removes the project."
      >
        <div className="space-y-4">
          <p className="text-sm text-system-text">
            This action cannot be undone. Make sure you no longer need this
            project before continuing.
          </p>
          <div className="flex justify-end gap-3">
            <Button variant="ghost" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={() => setIsOpen(false)}>
              Delete project
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
