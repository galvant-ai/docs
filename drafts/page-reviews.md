# Page reviews

Each page is written, read back, and reviewed sequentially. Reviews check source evidence, exact UI labels, plain language, scope, internal links, built-in components, and placement of visual placeholders. These are editorial and source reviews, not claims of testing against a live customer account.

Media placeholders use Mintlify's built-in Info callout. Each has a unique capture ID, requested format, and capture instructions. No missing media URL is inserted into the page.

## Review log

### 1. Quickstart (`index.mdx`)

- Evidence: app Sidebar; Chat ConversationListPanel; AgentChatComposer; QuestionCard; SqlShowLogic.
- Review: starts with clicks and the two agreed copyable messages; does not assume a particular customer dataset or require a dashboard. Retained conditional clarification and suggested-follow-up wording.
- Visuals: QS-01 through QS-04 cover navigation, discovery, first analysis, and inspecting logic.
- Outcome: source and editorial review complete. Final navigation/build and rendered-page checks follow after all pages exist.

### 2. Ask questions with Scout (`chat/ask-questions.mdx`)

- Evidence: ChatInput; AgentChatComposer; VoiceInputControls and useVoiceInput; QuestionCard and QuestionField; stream client navigation tests.
- Review change: clarified that selecting an offered answer advances automatically, while written answers use Next or Send. Distinguished accepting a suggestion from sending it. Limited background-work guidance to navigation within Galvant.
- Visuals: CHAT-01 through CHAT-05 cover the composer, dictation, clarification, suggestions, and returning to work.
- Outcome: source and editorial review complete; no unsupported claims about closing the browser or indefinite live-stream retention.

### 3. Explore and verify results (`chat/results.mdx`)

- Evidence: SqlShowLogic; CardLogic; CardView; ChatCardView; ChatTableExpandDialog; ChatTableDownloadButton; FileAttachmentCard; MessageFeedback.
- Review changes: used the exact Data picker label; separated answer-level and card-level logic; gave a generated-file capture its own placeholder. Distinguished refreshing data from rewriting the original answer or syncing source systems.
- Visuals: RESULTS-01 through RESULTS-06 cover results, logic, table exploration, controls, generated files, and feedback.
- Outcome: source and editorial review complete. Shared card detail links lead to the agreed Tables and Charts pages.

### 4. Work with files (`chat/files.mdx`)

- Evidence: file reader registry and each registered reader; workbook extraction; upload validation; conversation file scope; AttachFileButton, ConversationFilesTray, and MessageFiles.
- Review: kept formats, upload size, coverage, formulas, and file scope on one page. Checked all extensions and distinguished 50 MB upload size from 1,000-row reading coverage. Did not invent retention periods or a full-workbook computation path.
- Visuals: FILES-01 through FILES-06 cover upload, workbook evidence, documents/images, STEP, focused re-reading, and downloads.
- Outcome: source and editorial review complete. Built-in Tabs separate format families without adding pages.

### 5. Reuse tasks with workflows (`chat/workflows.mdx`)

- Evidence: workflow tools and saved_workflows ownership checks; shared approval_question; workflow list and pin controls; workflow presentation fields.
- Review change: added the verified Yes/No approval choices and explained that a written response requests a revision. Led with preserving an agreed method, distinguished saving from execution and scheduling, and kept the full lifecycle together.
- Visuals: WF-01 through WF-05 cover creation, approval, running, updating, and ownership/pinning.
- Outcome: source and editorial review complete. No invented universal workflow commands or claims that viewers can edit shared definitions.

### 6. Manage conversations (`chat/conversations.mdx`)

- Evidence: ConversationListPanel; conversation delete route; conversation history and attachment scope.
- Review: defined conversation versus New chat before management actions; checked View all, Pin/Unpin, Rename, Enter/Escape, and Delete labels. Kept browser-local pins distinct from access or sharing.
- Visuals: CONV-01 through CONV-04 cover thread choice, history, pinning, and the menu/rename flow.
- Outcome: source and editorial review complete; no invented restore or retention guarantees.

### 7. Dashboard quickstart (`dashboards/quickstart.mdx`)

- Evidence: dashboard creation hook; DashboardDetailView and Sidebar; pending-change approval bar; SharedDashboardAlert; DashboardDeleteDialog.
- Review change: added the deletion consequences confirmed by the dialog, and corrected the capture instructions to show the underlying dashboard header rather than claiming the dialog contains a title. Kept the agreed starter message and introduced variables before management details.
- Visuals: DQ-01 through DQ-06 cover creation, proposed cards, variables, library, rename/pin, and deletion confirmation.
- Outcome: source and editorial review complete; independent of the Chat-to-Dashboard handoff.

### 8. Build and investigate with Dash (`dashboards/use-dash.mdx`)

- Evidence: DashboardAgentPanel and card context; CardView and grid; proposal review bar and pending list; duplicate/copy menus; card deletion dialog; refresh controller.
- Review: kept focused investigation separate from configuration changes; checked approval, copying, layout, and refresh controls. Avoided promising that all card types have every control or that a shared dashboard can be edited directly.
- Visuals: DASH-01 through DASH-07 cover the panel, card families, selected context, proposal review, layout/copying, refreshing, and a point breakdown.
- Outcome: source and editorial review complete. Approval and source-data refresh distinctions are explicit.

### 9. Dashboard variables (`dashboards/variables.mdx`)

- Evidence: variable bar, controls, affected-card list, dependent-value resolution, URL selections, dynamic text, dashboard links, and scheduled-export value handling.
- Review: distinguished saved defaults from current selections, variable scope from table filters, and browser-address sharing from Copy link. Checked that schedules retain saved selections while relative dates resolve at send time.
- Visuals: VAR-01 through VAR-07 cover connected cards, proposals, input types, card scope, dependencies, dynamic labels, and renaming/reordering.
- Outcome: source and editorial review complete. Variables have their own full guide and are introduced in the dashboard quickstart.

### 10. Tables (`dashboards/cards/tables.mdx`)

- Evidence: TableCard, heading/menu, search/filter controls, value formatting, calculation options, conditional rules, pivot settings, and server pivot limits.
- Review: separated temporary exploration from saved presentation; checked single-column sorting, filtering across result rows, first-match rule priority, five-rule and 50-pivot-column limits, and weighted percentage summaries. Explained that pivot structure changes go through Dash.
- Visuals: TABLE-01 through TABLE-05 cover exploration, column layout, conditional rules, summaries, and pivot creation.
- Outcome: source and editorial review complete. Shared dashboard viewers are not instructed to change saved table settings.

### 11. Charts (`dashboards/cards/charts.mdx`)

- Evidence: ChartSettingsMenu, ChartAxisFields, goal-line controls, trend-label interaction, chart model, and series validation.
- Review: limited direct chart settings to line/bar cards; distinguished adding measures or assigning axes through Dash from styling existing series directly. Checked 10-series and five-goal limits, stacking modes, and the effect of manual ranges.
- Visuals: CHART-01 through CHART-06 cover chart choice, combined series, stacking, axes, appearance, and goals/trends.
- Outcome: source and editorial review complete. Trend guidance does not promise forecasts, and pie/donut grouping is handled through Dash.

### 12. Numbers and gauges (`dashboards/cards/numbers-and-gauges.mdx`)

- Evidence: NumberSettingsMenu, NumberPeriodComparison, CardView's date-variable eligibility, GaugeSettingsMenu, and GaugeResult.
- Review: checked previous-period eligibility, target entry, percentage-point changes, zero comparisons, favorable-direction settings, and gauge range/zone limits. Included the distinction between an out-of-range needle and the actual displayed value.
- Visuals: METRIC-01 through METRIC-04 cover settings, comparisons, favorable direction, and gauge zones.
- Outcome: source and editorial review complete. Period comparisons are correctly limited to cards using one date-range dashboard variable.

### 13. Share dashboards (`dashboards/sharing.mdx`)

- Evidence: sharing dialog/form, company user picker, owner-managed sharing service, dashboard access checks, base-link utility, and shared-dashboard notice.
- Review: checked exact Private/Specific people/Everyone labels, Save changes, eligible viewers, and owner-only changes. Kept company visibility distinct from anonymous access and copied links distinct from access grants.
- Visuals: SHARE-01 through SHARE-03 cover granting access, copying links, and the viewer experience.
- Outcome: source and editorial review complete. Report delivery and scheduled recipients remain a separate task from live-dashboard access.

### 14. Export and email reports (`dashboards/reports.mdx`)

- Evidence: export actions, workbook builder, email dialog/forms, recurrence controls, recipient validation, schedule ownership, calendar, and delivery jobs.
- Review changes: distinguished a one-card workbook from multi-card worksheets, included the cell cap and partial-card failures, and called out that every schedule save captures the currently open variable values. Checked queued versus delivered wording and sender-owned schedules on shared dashboards.
- Visuals: REPORT-01 through REPORT-06 cover download, coverage summary, immediate send, recurrence setup, editing, and the calendar.
- Outcome: source and editorial review complete. No invented delivery guarantees, shared editing rights, or promise that temporary table filters are exported.

### 15. Troubleshooting (`help/troubleshooting.mdx`)

- Evidence: the reviewed feature pages plus recording error messages, stream states, sharing eligibility, proposal conflicts, refresh behavior, and export/schedule failures.
- Review: used visible symptoms and linked to full procedures rather than duplicating every feature. Kept recovery steps within verified behavior, retained spreadsheet coverage limits, and avoided inventing a support email, restore flow, or delivery guarantee.
- Visuals: HELP-01 through HELP-03 show a run error, a failed card, and a failed email occurrence. Other symptoms link to the feature's existing visual walkthrough.
- Outcome: source and editorial review complete. All 15 planned pages now have an individual review entry.

## Final site review

- Rechecked current Mintlify Frames and Prompt documentation. Changed all 20 Prompt descriptions to display the exact text they copy, rather than a short label that hides the example message.
- Added page search keywords and checked all descriptions are 130–160 characters.
- Collected all 77 unique visual IDs and full capture briefs in `media-checklist.md`. The media guidance uses native Frame, image, and video markup.
- Replaced the starter README with local preview, validation, and review instructions. Updated the skeleton status and kept authoring context outside the published pages.
- Corrected two heading-anchor links found by Mintlify's link checker. A subsequent anchor check passed.
- Replaced a vague card editing instruction with the verified **Ask Dash about this card** label, and explained the separate shared-dashboard path.
- Full Mintlify validation and build passed with zero errors and zero warnings. The build needed access to Mintlify's local preview cache outside the repository.
- Browser checks confirmed the quickstart's exact messages are visible, its native copy control responds, file-format Tabs switch content, the nested card group renders, and the page uses the Galvant logo/colors. Light and dark views were inspected. Footer links are LinkedIn and the website.
- Product procedures were reviewed against the app source. Deployed-product verification and real visual capture remain part of replacing the placeholders; no live customer account was used.

## Opening-page revision after user review

### Quickstart

- Removed the visible description and repeated introductory copy. Kept the preferred opening paragraph and moved QS-01 directly beneath it as the opening product image.
- Replaced the generic two-message sequence with independent Sales, Finance, and Production starter questions in native Mintlify Tabs. Removed the separate Run an analysis step and generic follow-up.
- Reviewed the examples as questions whose answers depend on the account's connected data, without promising a fixed result. QS-02 now captures one of these questions and its answer; QS-03 and QS-04 are retired.

### Ask questions with Scout

- Removed the visible description, shortened the opening, and updated the Quickstart link to its business-area questions.
- Removed the generic follow-up prompt while retaining the documented suggested-follow-up controls, including Tab, editing, Enter, and Escape.
- Updated the running-state guidance to name the agent trace and linked the renamed results guide.

### Answers and agent trace

- Renamed the page and sidebar label, retaining its existing route. Removed the generic result-type overview and the copyable verification prompt.
- Rechecked AgentWorkPanel and AgentToolRow for Working, Worked for, expandable tool details, SQL, and Rows. Kept the agent trace distinct from final answer text and the separate Show logic view, verified in SqlShowLogic and CardLogic.
- Revised RESULTS-01 and RESULTS-02, and added RESULTS-07 for opening the trace and a query's details. Kept the existing table/chart, refresh, download, and feedback instructions.

### Revision checks

- Mintlify's current Pages documentation confirms description frontmatter is optional. Omitted it on these three pages without custom CSS or components.
- Fast validation and all internal links/heading anchors pass. Full build validation passes with zero errors and warnings.
- Browser review at localhost:3000 confirmed the new title/sidebar label and absence of the description subtitle. Sales, Finance, and Production tabs each display their own exact question.
- Synchronized the skeleton, product brief, README, and media checklist. There are now 76 unique visual placeholders.

## Site-wide descriptions and nested Chat guides

- Applied the user's description preference to all 17 current pages by omitting optional description frontmatter. No custom CSS or components were added.
- Checked Mintlify's current navigation documentation for group root pages and native directory cards. Ask questions with Scout is now the root of a nested group; its three child guides also appear as native cards after the parent content.

### Use tables and charts

- Split table exploration, chart inspection, refresh, and Excel downloads into `chat/ask-questions/tables-and-charts.mdx`.
- Reviewed the scope against the previous content and shared card guides. Kept detailed formatting in those guides and calculation inspection in the trace/logic guide.
- Retained RESULTS-03 and RESULTS-04, and added RESULTS-08 for the chart's Data picker. Moved generated-file downloads and RESULTS-05 to Work with files.

### Agent trace and Show logic

- Split tool-call inspection and answer/card calculations into `chat/ask-questions/agent-trace-and-logic.mdx`.
- Reviewed the distinctions between recorded work, answer-level query steps, and card-level calculation/display settings. Kept the verified Working, Worked for, Queried database, SQL, and Rows labels.
- Retained RESULTS-01, RESULTS-07, and RESULTS-02 with their existing IDs.

### Give feedback on answers

- Interpreted the user's final feedback instruction as a request for a separate guide, `chat/ask-questions/give-feedback.mdx`.
- Rechecked MessageFeedback: Give feedback opens the form, Submit requires nonempty text, Cancel closes it, and successful submission closes the form. Conversation/message context is attached automatically.
- Reviewed the short procedure and kept the distinction between reporting feedback and requesting a revised answer. Retained RESULTS-06.

### Navigation and checks

- Sidebar labels now use Work with files, Reusable workflows, and Manage conversations. Dashboard labels also identify the task or card family more clearly.
- Removed the former combined results page and updated all customer-facing links to the appropriate child guide. Updated the current skeleton, product brief, README, and capture checklist.
- Confirmed 17 unique navigation pages, no description subtitles, and 77 unique visual IDs.
- Full Mintlify build passed with zero errors or warnings. All internal links and heading anchors passed.
- Browser review confirmed that clicking Ask questions with Scout opens the parent guide, its three guides are nested beneath it, and the native child directory renders. The trace guide shows the new sidebar labels and starts directly with its introductory paragraph.

## Chat revision after the next user review

### Manage conversations

- Replaced the two-way explanation with a three-column table comparing an existing conversation, a new chat, and a reusable workflow. Each choice has a purpose and an example.
- Reviewed the distinction: conversations retain the discussion context; new chats separate discussions; workflows save a method to repeat with new inputs or fresh data. Kept the explanation that new chats do not change connected-data access.
- Simplified the comparison from four columns to three before preview review so it remains readable in the documentation content area. Updated CONV-01 and the workflow cross-link.

### Reusable workflows

- Bolded the complete sentence explaining that a written response requests a change and does not approve or save the workflow.
- Removed the instruction to wait for Scout to confirm the save. Kept the actual Yes/No approval procedure and ownership rules.
- Replaced the repeated conversation-choice table with a link to the new comparison in Manage conversations.

### Ask questions with Scout

- Removed the "Distinguish these states" table. The leave-and-return section now explains the normal action directly: navigate elsewhere within Galvant, reopen the conversation, and see ongoing work or the answer.
- Kept one separate sentence for a request waiting on the Question card. Did not expand the promise to closing the browser or an unlimited retention period.

### Use tables and charts

- Added an opening that explains Scout may produce a table or chart and that the customer can ask for either. Included short examples before introducing result cards and their controls.
- Rewrote table exploration as expand, search, then sort/filter. Kept chart values, refresh, and Excel downloads in their existing sections.
- Corrected the Show logic cross-link to describe the thought process and steps behind a result.

### Agent trace and Show logic

- Corrected the earlier overly narrow calculation-view description. Show logic explains Scout's thought process and steps taken to reach the answer.
- Replaced the answer/card calculation headings with See how Scout reached an answer. Kept the recorded trace and its available tool details separate from Show logic.
- Revised RESULTS-02 and aligned the feedback guide, troubleshooting, skeleton, and product brief with this terminology.

### Work with files

- Rebuilt the page with four native file-type cards, one native upload walkthrough, separate anchored sections for spreadsheets, PDFs, images, and CAD, and short example questions.
- Removed the format matrix, arbitrary format Tabs, byte conversion, and legacy-XLS lecture. Kept 50 MB, supported extensions, spreadsheet row coverage, possible truncation, and formula behavior beside the relevant instructions.
- Used native accordions for reattaching in a new chat, revised versions, and dashboard data use. Kept downloads and focused follow-ups on the same page.
- Reviewed the copy for clear actions and useful limits. Retained existing capture IDs and added FILES-07 for the image example. The capture manifest now has 78 unique placeholders across 17 pages.
- Browser review confirmed the card layout, upload steps, and opening/closing the new-chat accordion.

### SEO, navigation, and verification

- Rechecked current Mintlify Pages, Cards, and custom CSS documentation. The user approved the CSS approach after the native metadata research.
- Restored a distinct description in frontmatter on all 17 pages. Added only the approved `#header > .prose` rule in `styles.css` to hide the subtitle.
- Confirmed standard, Open Graph, and Twitter descriptions and computed `display: none` on Quickstart, Work with files, the Scout parent, the trace child guide, Reusable workflows, and Dashboard variables. Titles, body content, and page controls remain visible.
- Removed the Visit Galvant navbar button. Preview navigation retains the Galvant logo link and the LinkedIn/website footer links.
- Fast validation, full Mintlify build, heading-anchor and internal-link checks, and `git diff --check` pass. The full build reports zero errors and warnings.
- Saved a current Files-page screenshot at `/tmp/galvant-docs-files-reviewed.png`. These checks use the local documentation preview; customer-product capture and deployed-product verification remain with the media replacement work.

## Dashboard rewrite after the approved self-review plan

### 1. Dashboard quickstart

- Replaced the card-prescribing starter request with six business-goal examples: Sales, Finance, Production, Procurement, Inventory, and Quality. Dash chooses the visualizations.
- Kept one path through creation, review/approval, company-wide sharing, and a Monday 09:00 email to the reader. Checked sharing and schedule field labels against DashboardSharingForm, DashboardExportScheduleDialog, and DashboardExportScheduleForm.
- Reviewed the page after writing. Removed variable and library-management detours; kept the only choices in the business-area examples. The sharing text uses Everyone in the company, and the schedule has one recipient and one weekly pattern.
- Retained DQ-01 and DQ-02. Added DQ-07 for sharing and DQ-08 for scheduling. DQ-03's variable detour is retired; management captures DQ-04 through DQ-06 move to Build and manage dashboards.
- Source and editorial review complete. Preview and site-wide link/build checks follow after the sequential page rewrites. No live dashboard was created, shared, or emailed.

### 2. Build and manage dashboards

- Replaced the generic opening with a concrete request to add a customer breakdown. Changed the card-type decision table into a native gallery that explains what Dash may create and makes explicit that the reader can request a format.
- Consolidated review/approval into one section, added discoverable Show logic guidance, and limited refresh instructions to the whole dashboard.
- Moved dashboard library management here from Quickstart, with optional native accordions. Reduced card layout instructions and removed the card-copy/delete control inventory.
- Read the new page and removed duplicated selected-card instructions from the investigation section. Kept owner versus shared-viewer behavior and immediate presentation saves accurate to DashboardDetailView/CardView.
- Retained relevant DASH and DQ captures with narrower briefs; added DASH-08 for Show logic, DASH-09 for pinning, and DASH-10 for an owned copy. Source and editorial review complete.

### 3. Use dashboard variables

- Reordered the guide around changing an existing view before creating a variable. Added native Dynamic/Static tabs with actual preset, Customized, Complete periods only, Start/End, and Apply instructions.
- Replaced the generic creation prompt with a reporting-period example tied to three named sales results. Added the exact connected-card count/menu and jump interaction from DashboardVariableCards.
- Used native cards to compare current selections with saved defaults. Kept linked choices and report/link behavior visible; moved other types, dynamic titles, and reordering into optional accordions.
- Reviewed the written page against the date, variable, and linked-choice components. Corrected the unit label to lowercase months and replaced a misleading return-to-dashboard promise with the precise fixed-calendar-date behavior.
- Added VAR-08 for Static dates and VAR-09 for multiple choices. Narrowed the remaining media briefs. Source and editorial review complete.

### 4. Table cards

- Replaced a menu inventory with an outstanding-invoices example: find a customer, filter Days overdue above 30, highlight exceptions, total Outstanding amount, and pivot customer by invoice month.
- Used native Tabs for independent search/filter/sort actions and Steps for conditional formatting. Retained saved-versus-temporary behavior and moved weighted rates and pivot constraints into optional details.
- Reviewed menus against TableColumnFilter, TableConditionFields, TableColumnRules, TableColorRuleForm, ValueFormatMenu, and TableColumnCalculate. The numeric operator is the actual > control; rule creation and edit labels match the UI.
- On readback, moved editing prerequisites to the opening so shared-dashboard viewers understand which tasks require a copy before reaching those instructions.
- Added TABLE-06 through TABLE-08 for separate search, sort, and currency captures. Reduced each older capture to one outcome. Source and editorial review complete.

### 5. Chart cards

- Replaced the choose-a-chart instruction with a native gallery of what Dash can create. Used concrete sales, product-group, and gross-margin examples for combined axes and stacked proportions.
- Separated target and trend walkthroughs into native Tabs and separate capture briefs. Cut marker-size and control-by-control detail from the main path; kept optional presentation details in an accordion.
- Read ChartSettingsMenu, ChartGoalLines, and ChartAxisFields to verify the direct controls. On editorial readback, corrected a sentence that could imply Format exists on the X-axis menu; numeric formatting is now explicitly limited to numeric axes.
- Added CHART-07 for the separate trend example and narrowed CHART-02/03/04/05/06 to distinct outcomes. Source and editorial review complete.

### 6. Numbers and gauges

- Replaced the settings-first opening with a total-sales example. Kept one focused comparison section with native tabs for an earlier period and a target, followed by a concrete completion-rate gauge example.
- Split METRIC-02's overloaded brief into period-only METRIC-02 and target-only METRIC-05. Added METRIC-06 for the optional raw-unit zone-editing detail.
- Checked NumberSettingsMenu/NumberPeriodComparison and the already reviewed GaugeSettingsMenu. Preserved the exactly-one-date-variable requirement, percentage-point interpretation, color direction, and fraction-based gauge boundaries.
- On readback, moved shared-dashboard editing prerequisites to the opening. Put range/zero-value edge cases in optional details. Source and editorial review complete.

### 7. Share dashboards

- Retained the page's clear task boundaries and shortened its steps. Used native Tabs for selected people, company access, and private access, keeping the UI's Everyone label and company scope explicit.
- Kept the live-link/defaults distinction and the effect of removing access on already delivered files. Moved account-eligibility troubleshooting into an accordion.
- Reviewed the new copy against DashboardSharingForm and the previously traced sharing behavior. Replaced an initial two-column capability list with a true owner/viewer action matrix so unrelated actions are not paired misleadingly.
- Kept SHARE-01 through SHARE-03 with focused capture briefs. Source and editorial review complete.

### 8. Export and email reports

- Put download, send-now, and recurring-send paths first, with native action cards and short walkthroughs. Moved workbook/recurrence/email option reference into optional accordions.
- Kept variable capture, Dynamic versus Static schedule dates, schedule ownership, and delivery-status behavior. The consequence of Save schedule replacing variables remains prominent beside that action.
- Reviewed ScheduleRecurrenceFields, DashboardExportScheduleForm/Dialog, and workbook limits. On readback, clarified that On is conditional on recurrence type and that readers should review existing recipients before adding addresses.
- Retained REPORT-01 through REPORT-06 with narrower capture briefs. Source and editorial review complete. No report was downloaded from customer data or emailed.

### Dashboard integration and preview review

- Updated the canonical skeleton and product brief to match the eight-page rewrite. Refreshed Help's proposal/refresh links and kept whole-dashboard refresh as the Dashboard procedure.
- Regenerated the media manifest in navigation order, including the Chat parent root. There are 90 unique placeholders across 17 pages; DQ-03 is retired, and DQ-04/05/06 now accompany management on the Dash guide. README reflects the current count.
- All Dashboard Prompt descriptions match the exact message copied by their bodies.
- Fast validation, full Mintlify build validation, internal links/heading anchors, and git diff whitespace checks pass. The full build reports zero errors and warnings.
- Browser review covered all eight Dashboard routes. Confirmed current titles and sidebar labels, distinct standard/Open Graph/Twitter descriptions, hidden header subtitles, and the absence of individual-card refresh instructions.
- Switched through all six business-area prompts. Checked Static dates, table Filter rows, chart Trend, number Target, company sharing, and the management-copy accordion. Native cards, Tabs, Steps, and accordions render as expected.
- Reloaded the preview after hot updates to refresh the table of contents. Saved current screenshots at /tmp/galvant-dashboard-quickstart-revised.png and /tmp/galvant-dashboard-chart-guide-revised.png.
- Review and documentation-preview verification are complete. The user will supply real product media; procedures have source evidence, not a claim of live customer-app verification. No customer dashboard, sharing settings, or email schedule was changed.

## Full-review follow-up — October 28, 2026

### Reusable workflows

- Replaced abstract creation and update prompts with a Monthly sales review carried through agreeing the method, saving it privately, approving it, running it for another month, and adding customer share of sales to future runs.
- Rechecked workflow tool contracts, approval behavior, and conversation-panel launching. The walkthrough uses the actual command Scout saves; it does not invent a preinstalled command. The default month is explicitly requested and checked before approval.
- Read the rewritten page back. Added checking the new percentages after the updated workflow runs, retained the bold distinction between a written response and approval, and kept creating a separate version in a native optional accordion.
- Updated WF-01 through WF-04 to use the same business example. The existing five workflow capture IDs remain; media production is paused.
- The user declined expanding the Skip explanation. Leave that customer guidance unchanged.

### Card controls and Chat table views

- Added short hover instructions at the first relevant card action in the Chat results, agent trace, Dash, table, chart, and number guides. Kept actual control labels and named the search, sliders, and speech-bubble icons where helpful.
- Clarified that Chat's expanded table is for searching, sorting, and filtering. Saved formatting and summaries use the original card's column menus. The dashboard pivot walkthrough remains scoped to Dash.
- Read back each changed paragraph against the shared card and expanded-table behavior verified in the full review. No new page, component, or capture was needed.

### Work with files

- Replaced the ambiguous main-total question with a Costing!F20 formula example. Readers are told to substitute a sheet and cell from their own workbook.
- Put the smaller-file remedy next to reading coverage and retained the distinction between reading formulas and recalculating them. On readback, added preserving referenced inputs when preparing a formula example.
- Updated FILES-02 to match the bounded costing example. Its capture ID is unchanged.

### Dashboard variable links

- Clarified that the browser address preserves values changed from defaults; other inputs use the defaults in effect when the link opens. Added a customer/reporting-period example and explained that dynamic dates and refreshed results can change.
- Read back the prose and the sharing/reporting comparison table against the URL behavior verified in the full review. The table now uses the same distinction as the surrounding prose.

### Follow-up validation

- Fast validation, full Mintlify build, internal links and heading anchors, and whitespace checks pass. The build reports zero errors and warnings.
- All 22 Prompt descriptions match their copy bodies. All 90 capture IDs and full briefs match the media checklist; no captures were added.
- Preview review confirmed the new workflow Steps and optional version accordion render correctly. Checked the updated text on all eight other edited routes. The workflow SEO description remains present and its visual subtitle remains hidden.
- The complete Ask questions with Scout page has the same checksum as before this follow-up, confirming that the declined Skip change was not applied.
- No product workflow was created or run. No media was recorded; capture placeholders remain for later work.
