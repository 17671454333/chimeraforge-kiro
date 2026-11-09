/**
 * ChimeraForge Core — Isomorphic EARS Specification Compiler & AST Validator
 * Built with Kiro Spec-Driven Development for Kiroween 2026 (Frankenstein Category)
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.ChimeraCore = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  const EARS_TRIGGERS = ['WHEN', 'IF', 'WHILE', 'WHERE'];
  const NORMATIVE_MODALS = ['THE SYSTEM SHALL', 'SHALL', 'MUST'];

  /**
   * Parses an EARS-formatted specification string into a deterministic AST.
   * @param {string} markdownText
   * @returns {object} Compiled AST with nodes, edges, metrics, and warnings
   */
  function parseEarsSpec(markdownText) {
    const startTime = typeof performance !== 'undefined' ? performance.now() : Date.now();
    const raw = typeof markdownText === 'string' ? markdownText : '';
    const lines = raw.split(/\r?\n/);

    const nodes = [];
    const edges = [];
    const warnings = [];
    const seenIds = new Set();

    let currentSection = 'General';
    let clauseCounter = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;

      const headingMatch = line.match(/^#{1,4}\s+(?:Requirement\s+(\d+)\s*[:\-]?\s*)?(.+)$/i);
      if (headingMatch) {
        currentSection = headingMatch[2].trim();
        continue;
      }

      if (/^introduction$/i.test(currentSection)) {
        continue;
      }

      // Match numbered or bulleted EARS clauses: e.g. "1. WHEN ... THE SYSTEM SHALL ..." or "[REQ-01] WHEN ..."
      const bulletMatch = line.match(/^(?:(\d+)\.|\-|\*|\[(REQ-[A-Za-z0-9_\-]+)\])\s+(.+)$/);
      if (!bulletMatch) continue;

      clauseCounter++;
      const explicitId = bulletMatch[2] || `REQ-${String(clauseCounter).padStart(2, '0')}`;
      const body = bulletMatch[3].trim();

      // Check for duplicate IDs (Requirement 1.3)
      let finalId = explicitId;
      if (seenIds.has(finalId)) {
        warnings.push({
          line: i + 1,
          code: 'DUPLICATE_REQ_ID',
          message: `Duplicate requirement identifier '${finalId}' detected on line ${i + 1}; auto-reindexed.`
        });
        finalId = `${explicitId}-DUP-${clauseCounter}`;
      }
      seenIds.add(finalId);

      const upperBody = body.toUpperCase();
      const matchedTrigger = EARS_TRIGGERS.find(t => upperBody.startsWith(t + ' ') || upperBody.includes(' ' + t + ' '));
      const matchedModal = NORMATIVE_MODALS.find(m => upperBody.includes(m));

      let precondition = '';
      let response = body;
      if (matchedTrigger && upperBody.includes('THE SYSTEM SHALL')) {
        const splitIdx = upperBody.indexOf('THE SYSTEM SHALL');
        precondition = body.slice(0, splitIdx).replace(/[,\s]+$/, '').trim();
        response = body.slice(splitIdx + 'THE SYSTEM SHALL'.length).trim();
      } else if (matchedModal) {
        const splitIdx = upperBody.indexOf(matchedModal);
        precondition = body.slice(0, splitIdx).replace(/[,\s]+$/, '').trim();
        response = body.slice(splitIdx + matchedModal.length).trim();
      }

      const hasLatencyBound = /(\d+\s*(?:ms|s|seconds|milliseconds|fps|hz|%))/i.test(body);
      const isValidEars = Boolean(matchedTrigger && matchedModal && response.length >= 3);

      const status = isValidEars ? 'VALID_EARS' : 'AMBIGUOUS_SPEC';
      if (!isValidEars) {
        warnings.push({
          line: i + 1,
          code: 'AMBIGUOUS_SPEC',
          message: `Line ${i + 1} (${finalId}) lacks strict EARS trigger (${EARS_TRIGGERS.join('/')}) or normative modal (THE SYSTEM SHALL).`
        });
      }

      const complexity = Math.min(
        100,
        Math.round(
          20 +
          (precondition.split(/\s+/).length * 2.5) +
          (response.split(/\s+/).length * 2.0) +
          (hasLatencyBound ? 12 : 0)
        )
      );

      const node = {
        id: finalId,
        line: i + 1,
        section: currentSection,
        triggerType: matchedTrigger || 'NONE',
        modal: matchedModal || 'NONE',
        precondition: precondition || 'UNBOUNDED_TRIGGER',
        response: response || body,
        hasLatencyBound,
        complexity,
        status,
        raw: body
      };
      nodes.push(node);

      if (nodes.length > 1) {
        const prev = nodes[nodes.length - 2];
        edges.push({
          from: prev.id,
          to: node.id,
          type: prev.section === node.section ? 'same-domain' : 'cross-domain'
        });
      }
    }

    const elapsedMs = Number(((typeof performance !== 'undefined' ? performance.now() : Date.now()) - startTime).toFixed(2));
    const validCount = nodes.filter(n => n.status === 'VALID_EARS').length;

    return {
      version: '1.0.0-kiroween26',
      elapsedMs,
      totalNodes: nodes.length,
      validCount,
      ambiguousCount: nodes.length - validCount,
      specHealthScore: nodes.length ? Math.round((validCount / nodes.length) * 100) : 0,
      nodes,
      edges,
      warnings
    };
  }

  /**
   * Formats a valid AST node back into canonical EARS markdown (used for Property 1 Round-Trip verification).
   * @param {object} node
   * @returns {string}
   */
  function formatEarsNode(node) {
    const trig = EARS_TRIGGERS.includes(node.triggerType) ? node.triggerType : 'WHEN';
    let pre = (node.precondition || 'a valid event occurs').trim();
    if (!pre.toUpperCase().startsWith(trig)) {
      pre = `${trig} ${pre}`;
    }
    const resp = (node.response || 'process the request deterministically').trim();
    return `[${node.id}] ${pre}, THE SYSTEM SHALL ${resp}`;
  }

  return {
    EARS_TRIGGERS,
    NORMATIVE_MODALS,
    parseEarsSpec,
    formatEarsNode
  };
});
