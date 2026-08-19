# ovos/AGENTS.md

## Area

This is a public local interaction/gesture utility library consumed by the private app.

## Rules

- Treat this as a standalone package.
- Do not move code into `www`.
- Keep public APIs stable where possible.
- Be careful with touch, scroll and gesture behavior because small changes can affect navigation UX.
- Prefer tests for behavior changes.

## Validation

When changing this package, verify the consuming app still works with the local import.