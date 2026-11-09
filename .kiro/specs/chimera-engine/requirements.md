# Requirements Document — ChimeraForge (Kiroween 2026 Frankenstein Track)

## Introduction
**ChimeraForge** stitches together four seemingly incompatible engineering paradigms into a unified, zero-dependency Spec-to-Artifact laboratory:
1. **EARS Specification Compiler** (parsing `.kiro/specs/*/requirements.md` into a deterministic AST)
2. **In-Browser Property-Based Testing (PBT) Fuzzing Engine** (100-iteration shrinking & invariant verification)
3. **Force-Directed Cyber-Gothic Circuit Visualizer** (HTML5 60fps interactive topology graph)
4. **WebAudio Polyphonic Acoustic Telemetry & MCP Publisher** (mapping AST cyclomatic entropy & PBT pass ratios into real-time filtered chord progressions and publishing live HTML audit artifacts via MCP)

## Requirements

### Requirement 1: Deterministic EARS Spec Parsing
**User Story:** As a Kiro engineer, I want my EARS-formatted markdown specifications (`WHEN ... THE SYSTEM SHALL ...`) compiled into a typed Abstract Syntax Tree (AST), so that every requirement is machine-verifiable.

#### Acceptance Criteria
1. WHEN a markdown document containing EARS clauses (`WHEN`, `IF`, `WHILE`, `WHERE`, `THE SYSTEM SHALL`) is provided, THE SYSTEM SHALL extract each requirement ID, trigger precondition, system actor, and normative response into a structured JSON AST node within 15ms.
2. IF a requirement clause lacks a measurable normative verb (`SHALL`, `MUST`) or trigger condition, THE SYSTEM SHALL flag the node with `status: "AMBIGUOUS_SPEC"` and highlight the exact line number.
3. WHEN duplicate requirement identifiers exist in the same spec document, THE SYSTEM SHALL deterministically deduplicate and emit a structural collision warning.

### Requirement 2: Automated Property-Based Testing (PBT) & Shrinking
**User Story:** As a reliability engineer, I want every parsed EARS requirement automatically fuzzed against randomized edge-case generators, so that hidden boundary bugs are caught before deployment.

#### Acceptance Criteria
1. WHEN the PBT engine executes against a compiled AST node, THE SYSTEM SHALL generate at least 100 pseudo-random seeded inputs (including empty strings, Unicode astral symbols, boundary integers, and malformed payloads) using a deterministic PRNG (`xorshift128+`).
2. IF any generated input violates the requirement's invariant predicate, THE SYSTEM SHALL shrink the failing input to its minimal counterexample and record the seed for instant reproduction.
3. WHILE all 100 generated inputs satisfy the invariant predicate, THE SYSTEM SHALL mark the AST node as `VERIFIED_GREEN` and compute a formal confidence score.

### Requirement 3: Interactive Force-Directed Topology & Acoustic Telemetry
**User Story:** As a developer debugging complex multi-agent specs, I want to both see and hear the structural health of my specification graph in real time.

#### Acceptance Criteria
1. WHEN the AST and PBT results are updated, THE SYSTEM SHALL render an interactive 2D force-directed physics graph where nodes represent EARS requirements, hooks, and MCP tools, and edges represent causal dependencies.
2. WHEN the user triggers acoustic telemetry (`Synthesize Spec`), THE SYSTEM SHALL map verified nodes to consonant Dorian-mode polyphonic chords and failing/ambiguous nodes to low-pass filtered tension intervals using the browser's WebAudio API.

### Requirement 4: MCP Live Artifact Export
**User Story:** As a Kiroween hackathon builder, I want to export a self-contained, verifiable HTML/JSON audit report via MCP so teammates and judges can inspect the live build anywhere.

#### Acceptance Criteria
1. WHEN the user clicks `Export MCP Bundle` or runs the CLI hook, THE SYSTEM SHALL serialize the AST, PBT counterexample ledger, and SHA-256 digest into a portable JSON/HTML artifact ready for HaveTML MCP publishing.
