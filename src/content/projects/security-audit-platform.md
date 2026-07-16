---
title: 'Automated Server Audit Platform'
summary: 'Automated security audits for Windows server fleets: 48 checks run with zero manual effort, and every finding flows through human approval.'
year: 2026
tags: ['TypeScript', 'Node.js', 'PostgreSQL', 'Express', 'PowerShell']
featured: true
order: 1
stat: '48 checks, zero manual effort'
---

A production backend that automates security audits of Windows servers.
A read-only collector gathers the state of every host, an audit engine
scores it against a catalog of 48 checks, and operators get findings,
ready-made reports and proposed fixes without doing any of the collection
work themselves.

The point of the system is labor. An audit that used to mean an engineer
remoting into servers for days now runs on its own, and the team spends
its time deciding what to fix instead of hunting for what's broken.

## How it's built

- The engine never fabricates a pass. If evidence is missing or nobody
  reviewed it, the check stays neutral instead of turning green.
- Fixes go through a state machine with explicit operator approval, and
  the execution agent only runs actions from a strict allow-list.
- Collector, agent and operator are three separate identities with their
  own credentials and per-route access control.
- Every state change writes to an append-only audit trail in the same
  transaction. Nothing gets deleted or rewritten after the fact.
- State transitions use guarded atomic writes, so two operators racing
  each other can't apply the same change twice.
