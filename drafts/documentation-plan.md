# Galvant documentation plan

Status: Background research and feature inventory. The current proposed hierarchy is in [documentation-skeleton.md](documentation-skeleton.md), which supersedes the earlier navigation tables below. Chat and Dashboards are independent entry points. The Chat-to-Dashboard connection is a later guide. No product pages or navigation changes have been created from this plan.

Latest navigation review: Mintlify supports header tabs, nested groups, clickable group root pages, child-page directories, and in-page heading navigation. The current skeleton proposes one nested **Cards and visualizations** group and an explicit **Dashboard variables** page, replacing the old filter/refresh grouping. Header tabs are reserved for future Documentation, API reference, and Changelog content. The skeleton includes the supporting research and variable behavior to verify during authoring.

Scope: Customer documentation for Chat and Dashboards.

Evidence reviewed: The current `takt-platform` working tree and Mintlify's documentation on October 28, 2026. Code confirms available UI and behavior, but does not establish which version is deployed for each customer.

## Reader and outcome

Confirmed audience: Customers already onboarded to Galvant, with an account and access to their company's connected data. Readers can include manufacturing, sales, procurement, finance, and management teams. The first version should use plain language and assume no SQL or programming knowledge. Prioritize everyday Chat and Dashboard tasks; keep signup, initial onboarding, and connecting company data outside this release.

The documentation should help you:

1. Ask a business question and refine the answer with Scout in Chat.
2. Understand the answer, its logic, and its result cards.
3. Create, read, customize, and investigate dashboards with Dash, then share or send reports.

Use independent examples: the homepage quickstart discovers the customer's available data and runs one suggested analysis; the Dashboard quickstart creates cards directly with Dash. Cover saving Chat results to a dashboard later as an optional connection between the two. Use concrete task-specific prompts and fictional names in illustrations and screenshots prepared for documentation. The current skeleton contains the proposed exact starter messages and replaces the earlier generic question-writing section.

## How deep to document features

Aim for complete coverage of customer capabilities and consequential limitations, with detail available at different levels. Do not treat the initial page count as a cap.

1. Overview: Explain what the feature lets you accomplish, when to use it, and a short example. Keep the entry page easy to scan.
2. Task guide: Show how to perform a meaningful task, change the result, and recognize success. Give workflows, file analysis, pivots, chart combinations, and scheduling enough room for complete examples.
3. Reference: List supported file types, reading limits, card types, available settings, persistence, and permissions in compact tables linked from the relevant guide. Cover customer-visible controls without making a page for every menu item.

Create a separate guide when the feature has its own goal, meaningful choices, multiple steps, important limitations, or recurring failure modes. Keep a small convenience feature as a section or a short guide. Use reference rows for controls such as colors, decimal places, line styles, and label positions unless they need an explanatory example.

Document agent behavior in customer language. Use titles such as "Answer Scout's follow-up questions" and "Create and update a saved workflow". Explain what the customer sees, what the agent is waiting for, what is saved, and what requires approval. Keep tool names and execution architecture in authoring evidence, outside the customer instructions.

Before drafting, keep a feature coverage inventory with: customer task, how to invoke it (UI, asking the agent, or both), availability, saved versus temporary effects, permissions, limits, failure states, source evidence, documentation location, and review status. This catches features absent from the navigation without turning the sidebar into a list of every control.

File limits, data coverage, workflow changes, saved versus temporary settings, sharing, and running/waiting/completed states belong in the first relevant guide. They are essential to correct use even when advanced styling reference is written later.

## Earlier topic inventory

Use Mintlify's `navigation.groups` for one sidebar. The initial scope is small enough to keep Chat and Dashboards visible together. Keep `index` and `quickstart`, replacing their starter content when writing begins.

### Get started

| Page | Proposed path | What the reader accomplishes |
| --- | --- | --- |
| Welcome to Galvant | `index.mdx` | Understand when to use Chat and Dashboards, how Scout and Dash relate, and where to begin. Link directly to the first-question tutorial and both product sections. |
| Get useful answers in Chat | `quickstart.mdx` | Open Chat, ask one question, refine the result, and inspect its logic. End with an answer the reader understands. Link separately to the Dashboard introduction without making it a required next step. |

Keep access prerequisites short. Mention that the reader needs their company's Galvant URL and the relevant feature access. Do not invent a self-service signup flow or a universal login URL.

### Chat

| Page | Proposed path | Coverage |
| --- | --- | --- |
| Ask questions with Scout | `chat/ask-questions.mdx` | Start a new chat; specify metrics, dates, and grouping; ask follow-up questions; use suggested messages. Explain which connected sources are shown, without promising every customer has the same data. Link to dictation and clarification guidance. |
| Answer questions and return to running chats | `chat/questions-and-progress.mdx` | Explain why Scout asks follow-up questions; choosing an option or writing an answer; multiple questions; skipping; and when a run is waiting rather than working. Explain navigating away within Galvant and returning to live or completed output. Verify reload, browser-close, disconnect, and timeout behavior separately before promising those cases. |
| Dictate a message | `chat/dictate-a-message.mdx` | A short guide to microphone access, speaking, stopping and transcribing, reviewing or editing text, sending, discarding, and retrying. Verify supported language and recording limits. Distinguish dictation from a live voice conversation. |
| Understand answers and result cards | `chat/understand-results.mdx` | Read numbers, tables, charts, and gauges; open **Show logic** and the tables used; expand and download tables; refresh a card; distinguish an answer's context from a new question. Verify snapshot and refresh behavior before describing it. |
| Work with files | `chat/work-with-files.mdx` | Attach files, ask focused questions, inspect the attachment, and download generated files. Show a useful task for each format family. Link to the format reference and Excel guide. Explain conversation scope and that uploaded reference files are not data sources for dashboard refreshes. |
| Supported files and limits | `chat/files/supported-types.mdx` | Reference table of accepted formats, useful tasks, upload size, reading coverage, and unsupported formats. Distinguish successful upload from complete analysis. Derive exact entries from the reader registry and upload validation. |
| Understand an Excel workbook | `chat/files/excel.mdx` | Explain workbook structure, cell references, and formulas using one example. Document first-1,000-rows-per-sheet coverage and possible earlier truncation; formulas are shown as written, not recalculated. Explain what conclusions that coverage supports. Do not imply that a focused re-read bypasses coverage limits or provides whole-workbook computation. |
| Manage conversations | `chat/manage-conversations.mdx` | Reopen recent conversations; view more history; pin, unpin, rename, and delete a chat; submit feedback on an answer. Explain that pins are specific to the browser, as currently stored. Confirm deletion effects before adding detailed guidance. |
| Save results to a dashboard | `chat/save-to-dashboard.mdx` | Use **Add to dashboard** or the multiple-card action; choose an existing personal dashboard or create a new one; follow the pending-change review flow where applicable. Link to the Dash guide rather than duplicating its approval instructions. |
| Reuse tasks with workflows | `chat/workflows/overview.mdx` | Explain when a saved workflow is useful, how it differs from an ordinary prompt, and how inputs let you reuse the task. Link to creating, editing, and running a workflow. |
| Create and update workflows | `chat/workflows/create-and-update.mdx` | Ask Scout to create, inspect, update, or delete a saved workflow. Walk through proposed changes and approval. Explain ownership and private versus team-visible access. Show that saving or updating a definition is separate from running it. Distinguish editing an existing workflow from creating a separate variant. |
| Run saved workflows | `chat/workflows/run.mdx` | Launch from the workflow list or `/` menu, provide requested inputs, review results, and pin a workflow. Include one repeatable business task with changed inputs. Do not assume every customer has particular preset workflows. |

The Knowledge panel is enabled selectively. Keep it as a clearly marked, availability-dependent subsection in the Chat guide until its intended launch audience is confirmed. Do not imply that every customer sees it or that uploaded files automatically become company-wide knowledge.

### Dashboards

| Page | Proposed path | Coverage |
| --- | --- | --- |
| Create and manage dashboards | `dashboards/create-and-manage.mdx` | Provide an independent Dashboard starting point: find **Personal**, **Shared**, and **Pinned** dashboards; create a dashboard and ask Dash to populate it; rename, pin, duplicate, and delete it. Explain **Duplicate and edit** for a shared dashboard. Link to saving Chat cards as an optional later guide. |
| Build and investigate with Dash | `dashboards/use-dash.mdx` | Open **Ask Dash**; ask for cards or dashboard changes; select cards or data points for focused investigation; inspect proposed changes; choose **Approve all** or **Discard**. Explain that some direct edits wait until pending changes are resolved, and that Dash investigates shared dashboards without editing the original. |
| Filter and refresh data | `dashboards/filter-and-refresh.mdx` | Use date ranges and other filters; understand which cards a filter affects; use linked choices where configured; refresh one card or the dashboard. Verify how filter values affect URLs, copies, and scheduled exports before describing persistence. |
| Arrange and manage cards | `dashboards/customize-cards.mdx` | Rename cards, inspect card logic, move and resize cards, duplicate or copy cards, and remove cards. Link to the relevant table, chart, or number guide for deeper settings. |
| Choose a card type | `dashboards/cards/choose-a-card.mdx` | A visual comparison of numbers, tables, line and bar charts, pie and donut charts, and gauges. Explain when each helps, what question it answers, and supported combinations. |
| Explore tables | `dashboards/cards/explore-tables.mdx` | Search, sort, filter, hide or freeze columns, resize, and inspect more rows. Distinguish temporary viewing choices from saved formatting and dashboard-wide filters. Verify how those choices affect exported results. |
| Format tables | `dashboards/cards/format-tables.mdx` | Apply number formats and conditional formatting with a meaningful example such as highlighting overdue balances. Explain rule precedence and supported conditions. Link to a complete settings reference for colors, wrapping, widths, and related controls. |
| Summarize and pivot tables | `dashboards/cards/pivot-and-calculate.mdx` | Show a real row/column/value example, supported aggregations, totals, and relevant limits. Explain which operations are requested from Dash and which are exposed directly in the UI. Distinguish summarizing full filtered results from only visible rows. |
| Combine chart series | `dashboards/cards/combine-chart-series.mdx` | Show line/bar combinations, series, left and right axes, and stacking with a useful example. Explain which measures and units belong together. State supported combinations and series limits. |
| Customize charts | `dashboards/cards/customize-charts.mdx` | Axes, scales, labels, legends, goals, trend lines, and series appearance. Use short examples for settings that change interpretation and reference tables for decorative options. |
| Use numbers and gauges | `dashboards/cards/numbers-and-gauges.mdx` | Explain period and target comparisons, direction of improvement, number formats, gauge bounds, and colored zones using representative examples. |
| Card settings reference | `dashboards/cards/settings-reference.mdx` | Index supported settings by card family, with their effect, availability, and persistence. Keep limits near the affected setting. This is a lookup page linked from task guides. |
| Share a dashboard | `dashboards/share.mdx` | Choose **Private**, **Specific people**, or **Everyone in the company**; select viewers; save changes; copy the link. Explain that company visibility does not mean public internet access and that recipients still need the relevant account and feature access. Document shared dashboards as read only, with duplication for personal edits. |
| Download and email a dashboard | `dashboards/export.mdx` | Use **Download Excel** and **Send now**; choose recipients and email text; explain how the current filter values affect the export. Verify workbook contents and data-access behavior before making detailed claims. |
| Schedule dashboard emails | `dashboards/schedule-emails.mdx` | Create, edit, and delete recurring sends; select recurrence, time, timezone, recipients, and email text; understand saved filter values; inspect **Scheduled sends** in month or week view and delivery failures. Verify relative date behavior and schedule ownership before documenting examples. |

### Help

| Page | Proposed path | Coverage |
| --- | --- | --- |
| Troubleshoot Chat and Dashboards | `help/troubleshooting.mdx` | Organize by symptoms: an unexpected answer, unavailable data, a rejected upload, a card that fails to refresh, missing edit controls, pending changes, a shared dashboard that cannot be opened, or a failed scheduled email. Link to the relevant task page and use the in-app feedback flow where available. |

This is a topic inventory, not a fixed page-count target. Split substantial tasks and keep small controls together. Card guides can serve both Chat and Dashboards where the same controls are available; link to one explanation and note context-specific differences rather than duplicating it.

## Writing order

1. Inventory customer-facing capabilities in Chat and Dashboards, including behaviors without a dedicated button. Mark consequential limits and permission differences before drafting.
2. Draft Chat's independent starting guide and everyday use: questions, answers, clarification, progress, dictation, and conversation management. Draft files and workflows as substantive topics, with limits and approval behavior included from the start.
3. Draft Dashboards' independent starting guide, Dash interaction, filters, refresh, card selection, table exploration, and charts. Add task examples for pivots, conditional formatting, and combinations, then compact settings references.
4. Cover sharing, exports, scheduled sends, and symptom-based troubleshooting. Verify the difference between owner and viewer, saved and temporary choices, and displayed and fully analyzed data.
5. Add the optional Chat-to-Dashboard guide after the two areas stand on their own. Remove remaining starter material and review every navigation entry.

Draft and verify each group before adding it to the live navigation. Do not add empty pages or links to unwritten content. Existing `drafts/` content is excluded from Mintlify by `.mintignore` but should remain tracked in Git.

## Page format and visuals

- Give each page a clear outcome and a short opening answer.
- Add `title` and `description` frontmatter, with a concise `sidebarTitle` when needed.
- Use Mintlify **Steps** for procedures, **Tabs** only for meaningful variants, **Notes** for availability or permission details, and **Cards** for next tasks.
- Use exact UI labels, sentence case headings, active voice, and second person.
- Put screenshots beside the step they explain. Prioritize the Chat composer, clarification, **Show logic**, workflow approval, file reading, Dash's proposal review, tables, chart combinations, dashboard filters, sharing, and scheduling. Capture **Add to dashboard** when writing the later cross-feature guide.
- Choose an explicit demo account or customer environment before checking the running app. Verify its enabled features and use documentation-safe sample data for screenshots.
- Keep internal implementation details and customer-specific configuration out of customer instructions.

## Evidence to verify during authoring

The following source locations were reviewed in `takt-platform`. Re-check them and the intended deployed UI while drafting rather than treating this outline as a permanent feature contract.

| Topic | Main source locations |
| --- | --- |
| Chat, Scout, conversation history, workflows | `frontend/src/features/chat/ChatPage.tsx`, `components/ChatConversation.tsx`, `components/ChatInput.tsx`, `ConversationListPanel.tsx`, `workflows/WorkflowRowControls.tsx` |
| Answer logic and feedback | `frontend/src/features/chat/agent/SqlShowLogic.tsx`, `frontend/src/features/chat/components/MessageFeedback.tsx` |
| Chat cards and dashboard handoff | `frontend/src/features/cards/components/ChatCardView.tsx`, `AddCardToDashboardDialog.tsx`, `ChatTableDownloadButton.tsx` |
| Files | `frontend/src/features/conversation-files/`, `backend/core/routers/conversation_files.py` |
| File coverage and scope | `backend/core/services/files/README.md`, `workbook.py`, `registry.py`, `conversations.py`, `readers/` |
| Workflow changes and approval | `backend/core/agent_v2/workflow_tools.py`, `backend/core/workflows/schemas.py` |
| Clarification, dictation, and returning to chats | `frontend/src/features/agent-chat/questions/`, `frontend/src/features/voice-input/`, `frontend/src/features/agent-chat/stream/AgentStreamClient.test.ts` |
| Cards, table controls, and chart combinations | `frontend/src/features/cards/types.ts`, `schemas.ts`, `components/TableColumnMenu.tsx`, `frontend/src/features/dashboards/components/ChartSettingsMenu.tsx`, `backend/core/services/card_guide.py` |
| Dashboard library, editing, filters | `frontend/src/features/dashboards/components/DashboardSidebar.tsx`, `DashboardDetailView.tsx`, `DashboardPendingChanges.tsx`, `DashboardProposalReviewBar.tsx` |
| Sharing and access | `frontend/src/features/dashboards/components/DashboardSharingDialog.tsx`, `SharedDashboardAlert.tsx`, `frontend/src/features/dashboards/utils/dashboardVisibility.ts`, `backend/core/services/dashboard_access.py` |
| Exports and scheduled sends | `frontend/src/features/dashboards/components/DashboardExportActions.tsx`, `DashboardExportScheduleDialog.tsx`, `DashboardExportScheduleForm.tsx`, `DashboardSendCalendarPage.tsx` |
| Feature availability | `frontend/src/app/Sidebar.tsx`, `frontend/src/features/assistant-knowledge/useKnowledgeFeedEnabled.ts` |

Important checks before publication:

- Verify the exact UI and permissions in the intended deployed version.
- Verify file formats, limits, retention, and conversation scope.
- Verify what each exported workbook contains and which user's data access applies.
- Verify filter behavior, refresh behavior, and relative dates in scheduled sends.
- Confirm whether Knowledge and voice input should be highlighted in the first release.
- Walk through the tutorial using a representative dataset and check that each step reaches the described result.
- Run Mintlify build validation and link checks after the actual pages are created.

## Scope boundaries

Cover Chat and Dashboards, including workflows launched within Chat and dashboard email schedules. Leave standalone Alerts, sales and RFQ tools, procurement workflows, admin tools, API reference, infrastructure, and integrations setup outside this initial release.

## Current Mintlify references

- [Navigation configuration](https://www.mintlify.com/docs/organize/navigation)
- [How to structure documentation navigation](https://www.mintlify.com/docs/guides/navigation)
- [Documentation content types](https://www.mintlify.com/docs/guides/content-types)
- [Mintlify's official authoring skill](https://github.com/mintlify/docs/tree/main/agent-context/context/skills/mintlify)
