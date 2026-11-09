# Stitching a Spec-Driven Chimera: How Kiro's EARS Specs, Agent Hooks, and Property-Based Testing Powered ChimeraForge

*Published on November 9, 2026 by Dong Tech (`@17671454333`) — This blog post was written as part of the **Kiroween 2026 Hackathon**.*

---

## 1. The Problem with "Vibe Coding" vs. Spec-Driven Engineering

Most hackathon projects start with frantic prompt-hacking ("vibe coding"): you ask an AI assistant for a feature, get 500 lines of plausible-looking code, and spend the next six hours debugging subtle state regressions because nobody wrote down the invariants first.

When building **ChimeraForge** for the **Kiroween 2026 Frankenstein Track**, I wanted to test the exact opposite philosophy: **What if the specification itself is the executable heartbeat of the application?**

Using **Kiro**, I stitched together four seemingly incompatible technologies into a single zero-dependency laboratory:
1. An **EARS (`Easy Approach to Requirements Syntax`) Specification Compiler** (`src/chimera-core.js`)
2. A **Deterministic Property-Based Testing (PBT) & Counterexample Shrinking Engine** (`src/pbt-runner.js`)
3. A **60fps Force-Directed Physics Topology Canvas** (`index.html`)
4. A **WebAudio Dorian-Mode Polyphonic Telemetry Synthesizer & HaveTML MCP Publisher** (`src/audio-alchemist.js`)

---

## 2. How Kiro Transformed the Build

### A. Spec-Driven Development (`.kiro/specs/chimera-engine/`)
Instead of jumping straight into JavaScript, Kiro helped structure the project into three living documents inside `.kiro/specs/chimera-engine/`:
- **`requirements.md`**: Written in strict EARS syntax (`WHEN <trigger>, THE SYSTEM SHALL <deterministic response>`).
- **`design.md`**: Defined the data flow and three formal **Correctness Properties** before a single line of parser code was written:
  - **Property 1 (Round-Trip Isomorphism)**: `parse(format(node)) === node` for all valid AST nodes.
  - **Property 2 (Seed Reproducibility)**: Given any `xorshift128+` seed, the fuzzing engine generates the exact same 100 test vectors across browser and Node.js runtimes.
  - **Property 3 (Logarithmic Counterexample Shrinking)**: Any ambiguous specification fails closed (`AMBIGUOUS_SPEC`) and shrinks to its minimal failing substring in $\le 24$ binary steps.
- **`tasks.md`**: Sequenced the build into four atomic, verifiable milestones.

### B. Steering Docs (`.kiro/steering/`)
By placing `product.md`, `tech.md`, and `structure.md` inside `.kiro/steering/`, every Kiro interaction automatically respected our two hardest constraints:
1. **Zero external npm runtime dependencies** (100% isomorphic ES2022 modules shared between `node tests/chimera.pbt.test.js` and `index.html`).
2. **Audio & Visual Hygiene**: Warm low-pass filtered D-Dorian polyphonic chords in WebAudio and a high-contrast Cyber-Gothic UI.

### C. Agent Hooks (`.kiro/hooks/`) & Custom Agents (`.kiro/agents/`)
We configured two Kiro Agent Hooks and two custom Kiro Crew agents (`frankenstein-architect` and `pbt-inquisitor`):
- **`spec-lint-on-save.json`**: Automatically runs `node tests/chimera.pbt.test.js` (300 randomized PBT vectors) whenever any `.kiro/specs/**/*.md` or `src/**/*.js` file is saved.
- **`havetml-auto-deploy.json`**: Connects to the **HaveTML MCP Server** (`.kiro/settings/mcp.json`) so the entire interactive studio and its verification receipts can be published to a permanent URL in one command.

---

## 3. Try ChimeraForge Yourself

- **GitHub Repository (MIT License, full `/.kiro` directory included)**: [https://github.com/17671454333/chimeraforge-kiro](https://github.com/17671454333/chimeraforge-kiro)
- **Live Interactive App**: [https://17671454333.github.io/chimeraforge-kiro/](https://17671454333.github.io/chimeraforge-kiro/)
