# Repository Structure & Kiro Conventions

- `/.kiro/specs/chimera-engine/`: Contains `requirements.md` (EARS format), `design.md` (Architecture & PBT Correctness Properties), and `tasks.md`.
- `/.kiro/hooks/`: Agent hooks triggered on file save and pre-release audit.
- `/.kiro/steering/`: Workspace-wide product, technical, and structural rules loaded into every Kiro session.
- `/.kiro/agents/`: Custom Kiro CLI / Kiro Crew agent definitions (`frankenstein-architect` and `pbt-inquisitor`).
- `/.kiro/settings/mcp.json`: Model Context Protocol server definitions for HaveTML live artifact hosting and local spec introspection.
- `/src/`: Isomorphic JavaScript modules shared between the browser studio and Node.js CLI test runner.
- `/tests/`: Automated Property-Based Testing suite (`node tests/chimera.pbt.test.js`).
