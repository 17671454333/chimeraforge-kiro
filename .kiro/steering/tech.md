# Technology Stack & Engineering Constraints

- **Zero External Runtime Dependencies**: All core modules (`src/chimera-core.js`, `src/pbt-runner.js`, `src/audio-alchemist.js`) MUST run natively in both modern browsers (ES2022+) and Node.js (`v18+`) without webpack/bundler lock-in.
- **Deterministic Execution**: Every stochastic operation in the Property-Based Testing engine MUST use an explicit numeric seed (`xorshift128+`) rather than unseeded `Math.random()`.
- **Fail-Closed Verification**: Any specification clause missing a trigger condition (`WHEN`/`IF`/`WHILE`) or normative modal (`SHALL`/`MUST`) must fail closed with `AMBIGUOUS_SPEC`.
- **Audio Hygiene**: WebAudio synthesis must use warm filtered polyphonic oscillators with ADSR envelopes (`attack >= 0.02s`, `release >= 0.25s`) and low-pass filtering (`<= 1800Hz`), never raw continuous unmodulated sine waves.
