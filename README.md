# proto-template

Neutral starter host for [**proto-plugin**](https://www.npmjs.com/package/proto-plugin) — shareable UI prototypes without a synced product design system.

Includes two example prototypes — the Supabase table editor (`table-editor-filters`) and the Proto partner page (`proto-partner-page`). Use them as starting points, then add your own prototypes under `src/prototypes/`.

## Quick start

```bash
pnpm install
pnpm dev
```

Open [http://localhost:1999](http://localhost:1999).

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
| `pnpm dev` | Dev server on port **1999** |
| `pnpm verify:prototype-ids` | Check component id wiring |
| `pnpm verify:prototype-preview-states` | Check preview state registries |
| `pnpm share-prototype <slug>` | Deploy a prototype preview |

## Example prototypes

- `src/prototypes/table-editor-filters/` — Supabase table editor with preview states, design explorations, PR split spec panel, and side shelves.
- `src/prototypes/proto-partner-page/` — Multi-route partner invite flow with shape customizer and design explorations.
