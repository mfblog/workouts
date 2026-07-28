# Responsive layout design

## Goal

Make the dashboard readable without horizontal page overflow on compact iPhone,
regular iPhone, iPad portrait, and iPad landscape viewports while preserving the
desktop layout.

## Design

- Use a two-row compact header below 1024 px: identity and utility actions on the
  first row, horizontally scrollable sport/page navigation on the second row.
- Keep the dashboard in one column until 1280 px so iPad landscape does not get a
  narrow desktop sidebar layout.
- Change summary cards from 1 to 2 to 4 columns at phone/tablet/desktop breakpoints.
- Make the complete 53-week heatmap use fluid equal-width week columns. Cells shrink
  to fit the card instead of clipping or requiring horizontal scrolling. On phones,
  show quarterly month labels to avoid text collisions.
- Replace the activity table with readable stacked activity cards below 640 px;
  retain the complete table on larger screens.

## Verification

Build with TypeScript/Vite, check for page-level horizontal overflow, and capture
screenshots at 320x568, 390x844, 768x1024, 1024x768, and 1440x900.
