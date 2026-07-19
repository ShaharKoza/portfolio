---
title: 'NOC Team Portal'
summary: 'One portal for a network operations team: shift boards, alert runbooks, troubleshooting flows, onboarding, and instant search.'
year: 2026
tags: ['JavaScript', 'HTML', 'CSS', 'Knowledge Systems']
featured: true
order: 4
stat: 'one search box, zero frameworks'
---

_Internal tool: runs inside the team network, code is private._

An internal portal I built for a network operations team. NOC knowledge
tends to live in ten places at once: who's on shift, what an alert means,
how to troubleshoot it, who to call at 3 AM. The portal puts all of it
behind one search box.

It covers shift schedules, an alert catalog with runbooks, troubleshooting
flows, checklists, contacts, message templates and a glossary, plus a
guided onboarding path so a new team member doesn't spend their first week
asking where things are.

Technically it's deliberately boring: hand-written HTML, CSS and
JavaScript, no framework, with all the content stored as structured data
files. Updating a runbook means editing a record, not redesigning a page.
It loads instantly, and nothing in it can rot with a dependency update.
