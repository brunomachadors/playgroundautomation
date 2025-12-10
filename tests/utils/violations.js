export function formatViolations(violations, path) {
  if (!violations.length) {
    return `No violations found on ${path}`;
  }

  return violations
    .map(
      (v) => `
Page: ${path}
Rule: ${v.id}
Impact: ${v.impact}
Description: ${v.description}
Affected nodes:
${v.nodes.map((n) => `  - ${n.target.join(' ')}`).join('\n')}
`
    )
    .join('\n\n');
}
