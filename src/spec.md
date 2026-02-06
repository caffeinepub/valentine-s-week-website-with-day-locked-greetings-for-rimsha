# Specification

## Summary
**Goal:** Add an English apology note to the unlocked greeting message for Rose Day only.

**Planned changes:**
- Update the Rose Day (id: "rose-day") message in `frontend/src/lib/valentinesSchedule.ts` to append the apology note: "sorry for all the mistakes I have done before and I'll try to improve myself".
- Ensure no other day’s message text is changed so the UI continues to render messages directly from the schedule data without additional conditional logic.

**User-visible outcome:** When Rose Day is unlocked, its greeting includes the added apology note; all other days’ unlocked greetings remain exactly the same as before.
