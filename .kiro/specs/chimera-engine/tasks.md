# Implementation Plan — ChimeraForge

- [x] **Task 1: Build Isomorphic EARS Specification Compiler (`src/chimera-core.js`)**
  - [x] 1.1 Implement lexical scanner for `WHEN`, `IF`, `WHILE`, `WHERE`, and `THE SYSTEM SHALL` clauses.
  - [x] 1.2 Implement ambiguity detector (`AMBIGUOUS_SPEC`) for missing normative verbs or unbounded latency claims.
  - [x] 1.3 Implement canonical EARS formatter to satisfy Property 1 (Round-Trip Invariant).
- [x] **Task 2: Build Seeded Property-Based Testing & Shrinking Engine (`src/pbt-runner.js`)**
  - [x] 2.1 Implement `xorshift128+` deterministic PRNG so fuzzing runs are 100% reproducible by seed.
  - [x] 2.2 Implement combinators for EARS specs, boundary numbers, Unicode edge cases, and malformed inputs.
  - [x] 2.3 Implement binary-search counterexample shrinker and verify Property 1, Property 2, and Property 3 via `tests/chimera.pbt.test.js`.
- [x] **Task 3: Build Cyber-Gothic Force-Directed Canvas & WebAudio Synth (`src/audio-alchemist.js` & `index.html`)**
  - [x] 3.1 Implement 60fps Hooke-Coulomb force-directed graph showing live EARS nodes, Kiro Hooks, and MCP endpoints.
  - [x] 3.2 Implement WebAudio Dorian-mode polyphonic chord synthesizer mapped to AST verification health.
- [x] **Task 4: Configure Kiro Agent Hooks, Steering, Custom Agents & MCP (`/.kiro/`)**
  - [x] 4.1 Add `.kiro/hooks/` for automatedPBT verification on spec edits and HaveTML deployment.
  - [x] 4.2 Add `.kiro/steering/` for architectural guardrails and zero-dependency portability.
  - [x] 4.3 Publish live working build to HaveTML MCP (`@starwaydong`) and GitHub Pages.
