---
name: Video link verification
description: Durable rules for maintaining educational chapter video links.
---

Use direct YouTube watch IDs only after checking both the chapter/title match and the required channel through video metadata. If either check cannot be completed reliably, store an empty ID rather than preserving or inventing a link.

**Why:** The original catalog contained many topic-only, inaccessible, or wrong-channel links, and bulk YouTube searches can be throttled.

**How to apply:** Search in small batches, validate candidates with metadata, and treat an empty chapter video as an explicit unavailable state in the UI.