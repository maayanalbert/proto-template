#!/usr/bin/env bash
#
# Host-owned sync/link config — table-editor-filters uses scoped prototype tokens only.

# --- pnpm sync-from-source -------------------------------------------------

SYNC_FILES=(
)

SYNC_DIRS=(
)

SYNC_GLOBS=(
)

SYNC_LOCAL_EXTENSIONS=(
  "src/prototypes/table-editor-filters/table-editor-filters-theme.css (prototype-scoped Supabase tokens)"
)

# --- pnpm link-source-db ---------------------------------------------------

SOURCE_DB_ENV_VARS=(
)

SOURCE_DB_CONSOLE_URL=""
