# proto-template

Neutral starter host for [**proto-plugin**](https://www.npmjs.com/package/proto-plugin) — shareable UI prototypes without a synced product design system.

Includes one example prototype (`event-types`) built with plain Tailwind and small local UI primitives. Use it as a starting point, then add your own prototypes under `src/prototypes/`.

## Quick start

```bash
pnpm install
pnpm dev
```

Open [http://localhost:1985](http://localhost:1985).

## proto-plugin dependency

Installed from npm:

```bash
pnpm add proto-plugin@^0.1.4
```

## Optional: link a source app

1. Copy `prototype.sync.config.sh` and declare paths to sync from your product repo.
2. Set `SOURCE_PATH` in `.env.local` (see `.env.example`).
3. Run `pnpm link-source` and `pnpm sync-from-source`.

See `node_modules/proto-plugin/README.md` and `AGENTS.md` for the full host setup and prototype authoring guide.

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Dev server on port **1985** |
| `pnpm verify:prototype-ids` | Check component id wiring |
| `pnpm verify:prototype-preview-states` | Check preview state registries |
| `pnpm share-prototype <slug>` | Deploy a prototype preview |

## Example prototype

`src/prototypes/event-types/` demonstrates:

- Live state + preview states + state map
- Design explorations (variant sets)
- PR split spec panel
- Comment anchoring via `PrototypeComponent`

UI primitives live in `_components/neutral-ui.tsx` — replace or extend these when you add your product look.
