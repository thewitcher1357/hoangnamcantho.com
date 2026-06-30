# Repo Assistant Contract

This repo is an Astro website for `hoangnamcantho.com`.
It prioritizes Vietnamese content quality, SEO, fast pages, Core Web Vitals, and mobile-first usability.

## Workflow Priority

Use this order unless the user explicitly asks for something else:

1. Superpowers skills for process and workflow discipline.
2. GitNexus MCP tools for code discovery, impact analysis, and safe navigation.
3. Local repo inspection for files, scripts, content, and config.
4. Official documentation before guessing framework or platform behavior.

## Worktree Rule

Do not use `git worktree` for this project.
Work directly in the current workspace.
Only use worktree if the user explicitly asks for it.

## Communication Policy

Always respond in Vietnamese with proper diacritics and UTF-8-safe text.

Default style: explain things for beginners in a simple, low-tech way.

For substantive replies:

- Use short, clear sentences.
- Explain code in simple language.
- Avoid complex technical terms. If a term is needed, explain it simply.
- Break explanations into small parts.
- Give a real-life example when it helps.
- Focus on outcome, impact, and next action before implementation detail.
- When mentioning files or code, briefly explain what they do in normal language.
- Always include a section titled `Giải thích đơn giản`.
- Always include a short summary at the end.
- After each substantive answer, suggest any important AGENTS.md improvement if one becomes clear.
- When finishing a plan or substantial change, add a concise English Conventional Commit message suggestion.
- Do not commit on behalf of the user unless explicitly asked.

Exceptions:

- Short progress updates and one-line confirmations do not need the full section structure.
- If the user asks for deeper technical detail, give the simple version first, then the deeper version.

## Git Commit Messages

Use Conventional Commits.

Format:

```text
type(scope): description
```

Recommended types:

- `feat`: new feature
- `fix`: bug fix
- `docs`: documentation only
- `style`: formatting only, no logic change
- `refactor`: code change without new feature or bug fix
- `perf`: performance improvement
- `test`: test addition or update
- `chore`: tooling, build, or maintenance work

Rules:

- Keep the header short and clear.
- Use imperative form.
- Do not end the header with a period.
- Use an English commit message suggestion unless the user asks otherwise.

Example:

```text
docs(agents): add astro seo workflow rules
```

## Astro SEO Rules

When editing pages, layouts, or content:

- Keep one clear `h1` per page.
- Use meaningful `title` and `description` metadata.
- Prefer descriptive Vietnamese headings that match search intent.
- Keep URLs, slugs, and internal links stable unless the user asks to change them.
- Add or preserve canonical URLs where the layout supports them.
- Use internal links to related service pages and blog posts when helpful.
- Do not keyword-stuff. Write naturally for real Vietnamese readers.
- Preserve sitemap compatibility through Astro config and page routes.
- Check that content is useful above the fold on mobile.
- Use structured data only when it matches visible page content.

## Performance And Core Web Vitals Rules

When editing UI, images, scripts, or layouts:

- Prefer static Astro output and server-rendered content.
- Avoid unnecessary client-side JavaScript.
- Use Astro islands only when interaction is required.
- Keep images optimized, sized, and lazy-loaded when below the fold.
- Do not add heavy third-party scripts without explaining the impact.
- Avoid layout shift by defining image dimensions or stable containers.
- Keep CSS simple and scoped to existing patterns.
- Protect Core Web Vitals: LCP, CLS, and INP.

## Mobile-First Rules

When editing pages or components:

- Design for mobile first, then expand to desktop.
- Keep tap targets large enough for fingers.
- Avoid text overlap on small screens.
- Keep headings readable without becoming too large.
- Avoid horizontal scrolling.
- Check important CTA buttons on mobile.
- Make above-the-fold content clear and fast to scan.

## Verification Commands

Use the smallest verification that proves the change.

For documentation-only changes:

```bash
git diff --check
```

For Astro/content/layout changes:

```bash
npm run check
npm run lint:check
npm run build
```

For TypeScript logic changes:

```bash
npm run typecheck
npm run test
```

Before committing:

```bash
gitnexus_detect_changes()
git status --short
```

Do not claim a build, test, or check passed unless the command was run in the current turn and the output confirms it.

<!-- gitnexus:start -->

# GitNexus — Code Intelligence

This project is indexed by GitNexus as **hoangnamcantho.com** (744 symbols, 698 relationships, 0 execution flows). Use the GitNexus MCP tools to understand code, assess impact, and navigate safely.

> If any GitNexus tool warns the index is stale, run `npx gitnexus analyze` in terminal first.

## Always Do

- **MUST run impact analysis before editing any symbol.** Before modifying a function, class, or method, run `gitnexus_impact({target: "symbolName", direction: "upstream"})` and report the blast radius (direct callers, affected processes, risk level) to the user.
- **MUST run `gitnexus_detect_changes()` before committing** to verify your changes only affect expected symbols and execution flows.
- **MUST warn the user** if impact analysis returns HIGH or CRITICAL risk before proceeding with edits.
- When exploring unfamiliar code, use `gitnexus_query({query: "concept"})` to find execution flows instead of grepping. It returns process-grouped results ranked by relevance.
- When you need full context on a specific symbol — callers, callees, which execution flows it participates in — use `gitnexus_context({name: "symbolName"})`.

## When Debugging

1. `gitnexus_query({query: "<error or symptom>"})` — find execution flows related to the issue
2. `gitnexus_context({name: "<suspect function>"})` — see all callers, callees, and process participation
3. `READ gitnexus://repo/hoangnamcantho.com/process/{processName}` — trace the full execution flow step by step
4. For regressions: `gitnexus_detect_changes({scope: "compare", base_ref: "main"})` — see what your branch changed

## When Refactoring

- **Renaming**: MUST use `gitnexus_rename({symbol_name: "old", new_name: "new", dry_run: true})` first. Review the preview — graph edits are safe, text_search edits need manual review. Then run with `dry_run: false`.
- **Extracting/Splitting**: MUST run `gitnexus_context({name: "target"})` to see all incoming/outgoing refs, then `gitnexus_impact({target: "target", direction: "upstream"})` to find all external callers before moving code.
- After any refactor: run `gitnexus_detect_changes({scope: "all"})` to verify only expected files changed.

## Never Do

- NEVER edit a function, class, or method without first running `gitnexus_impact` on it.
- NEVER ignore HIGH or CRITICAL risk warnings from impact analysis.
- NEVER rename symbols with find-and-replace — use `gitnexus_rename` which understands the call graph.
- NEVER commit changes without running `gitnexus_detect_changes()` to check affected scope.

## Tools Quick Reference

| Tool             | When to use                   | Command                                                                 |
| ---------------- | ----------------------------- | ----------------------------------------------------------------------- |
| `query`          | Find code by concept          | `gitnexus_query({query: "auth validation"})`                            |
| `context`        | 360-degree view of one symbol | `gitnexus_context({name: "validateUser"})`                              |
| `impact`         | Blast radius before editing   | `gitnexus_impact({target: "X", direction: "upstream"})`                 |
| `detect_changes` | Pre-commit scope check        | `gitnexus_detect_changes({scope: "staged"})`                            |
| `rename`         | Safe multi-file rename        | `gitnexus_rename({symbol_name: "old", new_name: "new", dry_run: true})` |
| `cypher`         | Custom graph queries          | `gitnexus_cypher({query: "MATCH ..."})`                                 |

## Impact Risk Levels

| Depth | Meaning                               | Action                |
| ----- | ------------------------------------- | --------------------- |
| d=1   | WILL BREAK — direct callers/importers | MUST update these     |
| d=2   | LIKELY AFFECTED — indirect deps       | Should test           |
| d=3   | MAY NEED TESTING — transitive         | Test if critical path |

## Resources

| Resource                                            | Use for                                  |
| --------------------------------------------------- | ---------------------------------------- |
| `gitnexus://repo/hoangnamcantho.com/context`        | Codebase overview, check index freshness |
| `gitnexus://repo/hoangnamcantho.com/clusters`       | All functional areas                     |
| `gitnexus://repo/hoangnamcantho.com/processes`      | All execution flows                      |
| `gitnexus://repo/hoangnamcantho.com/process/{name}` | Step-by-step execution trace             |

## Self-Check Before Finishing

Before completing any code modification task, verify:

1. `gitnexus_impact` was run for all modified symbols
2. No HIGH/CRITICAL risk warnings were ignored
3. `gitnexus_detect_changes()` confirms changes match expected scope
4. All d=1 (WILL BREAK) dependents were updated

## Keeping the Index Fresh

After committing code changes, the GitNexus index becomes stale. Re-run analyze to update it:

```bash
npx gitnexus analyze
```

If the index previously included embeddings, preserve them by adding `--embeddings`:

```bash
npx gitnexus analyze --embeddings
```

To check whether embeddings exist, inspect `.gitnexus/meta.json` — the `stats.embeddings` field shows the count (0 means no embeddings). **Running analyze without `--embeddings` will delete any previously generated embeddings.**

> Claude Code users: A PostToolUse hook handles this automatically after `git commit` and `git merge`.

## CLI

| Task                                         | Read this skill file                                        |
| -------------------------------------------- | ----------------------------------------------------------- |
| Understand architecture / "How does X work?" | `.claude/skills/gitnexus/gitnexus-exploring/SKILL.md`       |
| Blast radius / "What breaks if I change X?"  | `.claude/skills/gitnexus/gitnexus-impact-analysis/SKILL.md` |
| Trace bugs / "Why is X failing?"             | `.claude/skills/gitnexus/gitnexus-debugging/SKILL.md`       |
| Rename / extract / split / refactor          | `.claude/skills/gitnexus/gitnexus-refactoring/SKILL.md`     |
| Tools, resources, schema reference           | `.claude/skills/gitnexus/gitnexus-guide/SKILL.md`           |
| Index, status, clean, wiki CLI commands      | `.claude/skills/gitnexus/gitnexus-cli/SKILL.md`             |

<!-- gitnexus:end -->
