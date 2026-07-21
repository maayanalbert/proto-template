"use client";

import { PreviewGrid } from "proto-plugin";
import type { ReactNode } from "react";

function TokenSwatch({
  name,
  variable,
}: {
  name: string;
  variable: string;
}): ReactNode {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="w-full aspect-square rounded-lg border"
        style={{ backgroundColor: `var(${variable})` as any }}
      />
      <div className="text-xs font-medium text-center">
        <div>{name}</div>
        <div className="text-muted-foreground">{variable}</div>
      </div>
    </div>
  );
}

export function TokensSection() {
  return (
    <div id="tokens" className="space-y-8">
      <div>
        <h3 className="font-semibold mb-4">Semantic Colors</h3>
        <PreviewGrid>
          <TokenSwatch name="Background" variable="--color-background" />
          <TokenSwatch name="Foreground" variable="--color-foreground" />
          <TokenSwatch name="Primary" variable="--color-primary" />
          <TokenSwatch name="Secondary" variable="--color-secondary" />
          <TokenSwatch name="Border" variable="--color-border" />
          <TokenSwatch name="Destructive" variable="--color-destructive" />
          <TokenSwatch name="Muted" variable="--color-muted" />
          <TokenSwatch name="Accent" variable="--color-accent" />
          <TokenSwatch name="Card" variable="--color-card" />
          <TokenSwatch name="Popover" variable="--color-popover" />
          <TokenSwatch name="Tertiary" variable="--color-tertiary" />
          <TokenSwatch name="Warning" variable="--color-warning" />
          <TokenSwatch name="Info" variable="--color-info" />
          <TokenSwatch name="Input" variable="--color-input" />
          <TokenSwatch name="Ring" variable="--color-ring" />
        </PreviewGrid>
      </div>
    </div>
  );
}
