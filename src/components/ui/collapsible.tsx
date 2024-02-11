"use client"

import * as React from 'react';
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"

const Collapsible = CollapsiblePrimitive.Root

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger

const CollapsibleContent = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.CollapsibleContent>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.CollapsibleContent>
>((props, forwardedRef) => (
  <CollapsiblePrimitive.CollapsibleContent {...props} ref={forwardedRef} className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-50 data-[state=closed]:slide-out-to-top-6 data-[state=open]:slide-in-from-top-8 slide-out-to-top" />
));
CollapsibleContent.displayName = 'CollapsibleContent';

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
