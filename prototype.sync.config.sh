#!/usr/bin/env bash
#
# Host-owned sync/link config — table-editor-filters uses scoped prototype tokens only.
# Cal.com product tokens sync to packages/coss-ui and packages/config/theme (not Supabase css/).

# --- pnpm sync-from-source -------------------------------------------------

SYNC_FILES=(
  "packages/coss-ui/src/styles/globals.css"
)

SYNC_DIRS=(
)

SYNC_GLOBS=(
)

SYNC_LOCAL_EXTENSIONS=(
  "src/prototypes/table-editor-filters/table-editor-filters-theme.css (prototype-scoped Supabase tokens)"
  "src/app/globals.css (keep Supabase @imports; append product token imports; fix @theme --color-* mappings)"
  "src/styles/cal/cal-theme-tokens.css (:root/.dark extract from source packages/config/theme/tokens.css — no @plugin imports)"
)

# --- pnpm link-source-db ---------------------------------------------------

SOURCE_DB_ENV_VARS=(
)

SOURCE_DB_CONSOLE_URL=""
