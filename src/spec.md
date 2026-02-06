# Specification

## Summary
**Goal:** Remove any anniversary date example/format hint text from the access gate UI while keeping validation behavior unchanged.

**Planned changes:**
- Remove the anniversary date input placeholder example text in `frontend/src/components/AnniversaryGate.tsx`.
- Remove any helper/hint text under the input that describes the date format.
- Ensure no other user-facing text in the AnniversaryGate UI includes an expected date string or sample date.

**User-visible outcome:** The access gate no longer shows a sample anniversary date or formatting guidance; users only see the input field and can still enter a date that is validated as before.
