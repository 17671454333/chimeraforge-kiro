# ⚡ ChimeraForge: Kiro Spec-to-Artifact Frankenstein Studio

[![License: MIT](https://img.shields.io/badge/License-MIT-10b981.svg)](./LICENSE)
[![Hackathon: Kiroween 2026](https://img.shields.io/badge/Kiroween_2026-Frankenstein_Track-f59e0b.svg)](https://kiroween.devpost.com)
[![Kiro Native](https://img.shields.io/badge/Built_With-Kiro_Specs_%7C_Hooks_%7C_Steering_%7C_MCP-06b6d4.svg)](./.kiro)

> **Built for the Kiroween 2026 Hackathon (`Frankenstein` Category)** — Stitching together four seemingly incompatible engineering worlds (**EARS Specification Compilation**, **Seeded Property-Based Testing & Counterexample Shrinking**, **60fps Force-Directed Physics Topology**, and **WebAudio Dorian-Mode Acoustic Telemetry + MCP Artifact Publishing**) into one zero-dependency browser & CLI studio.

---

## 🔗 Live Demo & Verification Links

- **Live Working App (GitHub Pages)**: [https://17671454333.github.io/chimeraforge-kiro/](https://17671454333.github.io/chimeraforge-kiro/)
- **Live Working App (HaveTML MCP Hosted)**: [https://havetml.com/@starwaydong/chimeraforge-kiro](https://havetml.com/@starwaydong/chimeraforge-kiro)
- **Technical Blog Post (Kiroween 2026 Bonus Blog)**: [https://havetml.com/@starwaydong/kiroween-2026-blog](https://havetml.com/@starwaydong/kiroween-2026-blog)

---

## 🧬 Why "Frankenstein"? (The 4-Part Chimera)

Software specifications usually die as static Markdown files, disconnected from fuzz testing, runtime visualization, and sensory feedback. **ChimeraForge** stitches four distinct domains into a single living organism:

1. **EARS Specification Compiler (`src/chimera-core.js`)**: Parses `.kiro/specs/*/requirements.md` clauses (`WHEN`, `IF`, `WHILE`, `WHERE` + `THE SYSTEM SHALL`) into a typed Abstract Syntax Tree (AST) in `< 1ms` and flags ambiguous prose (`AMBIGUOUS_SPEC`).
2. **Deterministic Property-Based Testing & Shrinker (`src/pbt-runner.js`)**: Runs 300 seeded fuzzing vectors (`xorshift128+`) verifying AST Round-Trip Isomorphism (`parse(format(N)) === N`), PRNG seed determinism, and logarithmic counterexample shrinking.
3. **60fps Force-Directed Circuit Topology (`index.html`)**: Simulates Hooke-Coulomb repulsion/attraction between EARS requirement nodes, Kiro Agent Hooks, and MCP servers.
4. **WebAudio Polyphonic Telemetry & HaveTML MCP Exporter (`src/audio-alchemist.js`)**: Maps specification health into warm D-Dorian harmonic chords (or low-pass filtered tension clusters when an ambiguous clause is injected) and exports portable JSON/HTML verification bundles via MCP.

---

## 📂 Complete `/.kiro` Architecture (Tracked in Git)

Per Kiroween 2026 rules, the root [`/.kiro`](./.kiro) directory is tracked directly in version control:

```text
.kiro/
├── specs/
│   └── chimera-engine/
│       ├── requirements.md      # 8 strict EARS requirements across 4 user stories
│       ├── design.md            # Mermaid pipeline + 3 formal PBT algebraic properties
│       └── tasks.md             # Spec-driven implementation checklist
├── hooks/
│   ├── spec-lint-on-save.json   # Runs 300-vector PBT suite automatically on spec/code save
│   └── havetml-auto-deploy.json # Publishes live artifact via HaveTML MCP server
├── steering/
│   ├── product.md               # Cyber-Gothic laboratory aesthetic & product scope
│   ├── tech.md                  # Zero-dependency isomorphic JS & deterministic PRNG rules
│   └── structure.md             # Repository layout conventions
├── agents/
│   ├── frankenstein-architect.json # Custom agent for EARS spec drafting
│   └── pbt-inquisitor.json         # Adversarial counterexample hunting agent
└── settings/
    └── mcp.json                 # Model Context Protocol wiring for HaveTML MCP
```

---

## 🚀 Quick Start (Zero Dependencies)

```bash
# 1. Clone the repository
git clone https://github.com/17671454333/chimeraforge-kiro.git
cd chimeraforge-kiro

# 2. Run the 300-vector Property-Based Testing & .kiro compliance suite
node tests/chimera.pbt.test.js

# 3. Open index.html in any browser to launch the interactive studio
```

## 📜 License

Released under the [MIT License](./LICENSE).
