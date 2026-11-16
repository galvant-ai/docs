# Visual capture checklist

All 90 placeholders are visible in the documentation. Each uses Mintlify's built-in Info callout and has a unique ID. The page contains the full capture brief; this checklist collects those briefs in navigation order.

The requested format is a recommendation. A short video can replace a GIF, and one recording can supply several captures. Keep the capture IDs in filenames, such as `qs-01.png` or `var-01.mp4`, so each asset can be matched to its placeholder.

## Capture approach

- Capture the two quickstarts first, then variables and the main Chat interactions.
- Keep the action, exact control label, and resulting state visible. Pause briefly at the result.
- Use one consistent example dashboard where possible. Choose measures and data that exist in the capture account.
- Confirm the documented labels and behavior in the deployed app while recording. The written guides were checked against repository source, not a live customer account.
- Use data, names, addresses, and records that can appear in customer documentation.
- A placeholder is editorial guidance. Replace the whole callout once its asset is ready; do not leave the capture instructions in the final page.

## Add the finished assets

Store screenshots and GIFs in `images/` and videos in `videos/`. Create these folders when adding the first asset. Reference them with root-relative paths. Use descriptive alt text and a short caption that explains the outcome.

Use Mintlify's native Frame component for screenshots and GIFs:

```mdx
<Frame caption="Scout answers the Sales starter question.">
  <img src="/images/qs-02.png" alt="Scout's answer to the Sales starter question with a table of customers" />
</Frame>
```

For a video, use the native Frame and HTML video element documented by Mintlify. This is an ordinary supported media embed, with no custom component or player:

```mdx
<Frame caption="Change a variable and see the connected cards update.">
  <video controls playsInline src="/videos/var-01.mp4" aria-label="Changing a dashboard variable updates the connected cards" />
</Frame>
```

Use captions or an adjacent text description for information conveyed through audio. Keep the written steps on the page so the procedure remains usable without playing the video.

References checked October 28, 2026: [Mintlify Frames](https://www.mintlify.com/docs/components/frames), [Mintlify components](https://www.mintlify.com/docs/components/steps).

## Captures by page

### Ask questions with Scout (`chat/ask-questions.mdx`)

| ID | Format | Capture brief |
| --- | --- | --- |
| CHAT-01 | Video (done) | Captured as `assets/clips/new_chat.mp4` and embedded on the page. Original brief: show **New chat**, the message box, and the send button. |
| QS-02 | Dropped | Placeholder removed from the page on 2026-11-08 (the new chat clip already sits at the top of this page). |
| CHAT-02 | Video (done) | Captured as `assets/clips/chat_talk.mp4` and embedded on the page. Original brief: dictate a short question, correct one word, and send. |
| CHAT-03 | Video (done) | Captured as `assets/clips/chat_clarification.mp4` and embedded on the page. Original brief: clarification card, choose or type an answer, Scout continues. |
| CHAT-04 | Video (done) | Captured as `assets/clips/chat_autocomplete.mp4` and embedded on the page. Original brief: suggested follow-up, Tab to accept, edit, Enter to send. |

### Use tables and charts (`chat/ask-questions/tables-and-charts.mdx`)

| ID | Format | Capture brief |
| --- | --- | --- |
| RESULTS-03 | Video (done) | Captured as `assets/clips/chat_table.mp4` and embedded on the page. Original brief: Expand table, search, sort, end on matching rows. |
| RESULTS-08 | Video (done) | Captured as `assets/clips/chat_chart.mp4` and embedded on the page. Original brief: enable Data picker and inspect two plotted values. |

### Agent trace and Show logic (`chat/ask-questions/agent-trace-and-logic.mdx`)

| ID | Format | Capture brief |
| --- | --- | --- |
| RESULTS-01 | Video (done) | Captured as `assets/clips/chat_showlogic.mp4` and embedded on the page. Original brief: Worked for above the answer, Show logic below it. |
| RESULTS-07 | Video (done) | Captured as `assets/clips/chat_workedfor.mp4` and embedded on the page. Original brief: Scout working, open Worked for, expand a Queried database step. |
| RESULTS-02 | Video (done) | Captured as `assets/clips/chat_logic.mp4` and embedded on the page. Original brief: Show logic expanded with steps and Tables used. |

### Give feedback on answers (`chat/ask-questions/give-feedback.mdx`)

| ID | Format | Capture brief |
| --- | --- | --- |
| RESULTS-06 | Video (done) | Captured as `assets/clips/chat_feedback.mp4` and embedded on the page. Original brief: Give feedback beneath an answer and the open form. |

### Work with files (`chat/files.mdx`)

| ID | Format | Capture brief |
| --- | --- | --- |
| FILES-01 | Video (done) | Captured as `assets/clips/chat_attachfiles.mp4` and embedded on the page. Original brief: Add file, completed upload, focused question, end on the answer. |

### Reusable workflows (`chat/workflows.mdx`)

| ID | Format | Capture brief |
| --- | --- | --- |
| WF-01 | Video (done) | Captured as `assets/clips/chat_workflow.mp4` and embedded on the page. Original brief: sales analysis, save request, end on the proposed workflow. Same example continues in WF-02 to WF-04. |
| WF-03 | Video (done) | Captured as `assets/clips/chat_useworkflow.mp4` and embedded on the page. Original brief: select the saved command, add a month, send, end on the report. |

### Manage conversations (`chat/conversations.mdx`)

| ID | Format | Capture brief |
| --- | --- | --- |
| CONV-01 | Video (done) | Captured as `assets/clips/chat_navigation.mp4` and embedded on the page. Original brief: existing conversation, New chat, and a saved workflow in the panel. |
| CONV-03 | Video (done) | Captured as `assets/clips/chat_pin.mp4` and embedded on the page. Original brief: pin control on hover, pin, find under Pinned, unpin. |
| CONV-04 | Video (done) | Captured as `assets/clips/chat_rename.mp4` and embedded on the page. Original brief: three-dot menu, Rename, edit the title, save. |

### Dashboard quickstart (`dashboards/quickstart.mdx`)

| ID | Format | Capture brief |
| --- | --- | --- |
| DQ-01 | Video (done) | Captured as `assets/clips/dashboard_create.mp4` and embedded on the page. Original brief: new dashboard with Ask Dash open. |
| DQ-02 | Video (done) | Captured as `assets/clips/dashboard_generate.mp4` and embedded on the page. Original brief: send one message, show the proposed dashboard, approve it. |
| DQ-07 | Video (done) | Captured as `assets/clips/dashboard_share.mp4` and embedded on the page. Original brief: share with Everyone, save, copy link. |
| DQ-08 | Video (done) | Captured as `assets/clips/dashboard_schedule.mp4` and embedded on the page. Original brief: schedule the dashboard to a sample email every Monday at 09:00; show recipient, timezone, recurrence summary, and the saved schedule. |

### Build and manage dashboards (`dashboards/use-dash.mdx`)

| ID | Format | Capture brief |
| --- | --- | --- |
| DASH-01 | Dropped | Placeholder removed from the page on 2026-11-08; the example prompt stands on its own. |
| DASH-03 | Dropped | The Ask Dash about this card paragraph was removed from the page on 2026-11-08, so no capture is needed. |
| DASH-04 | Video (done) | Captured as `assets/clips/dashboard_edit.mp4` and embedded on the page. Original brief: one proposed change, one revision request, then review and approve, ending on the updated dashboard. |
| DASH-02 | Screenshot (done) | Captured as `assets/clips/image_dashboardcards.png` and embedded on the page. Original brief: a table, chart, number, and gauge from one dashboard, each type labeled. |
| DASH-07 | Video (done) | Captured as `assets/clips/dashboard_datapicker.mp4` and embedded on the page. Original brief: pick one chart point with Data picker and send its prepared question to Dash. |
| DASH-08 | Dropped | Placeholder removed from the page on 2026-11-08; the Show logic sentence stands on its own. |
| DASH-05 | Video (done) | Captured as `assets/clips/dashboard_draganddrop.mp4` and embedded on the page. Original brief: enlarge one table and move it into a useful position, ending on the saved layout. |
| DASH-06 | Dropped | Placeholder removed from the page on 2026-11-08; the Refresh sentence stands on its own. |
| DQ-04 | Dropped | Placeholder removed from the page on 2026-11-08; the Dashboards list sentence stands on its own. |
| DQ-05 | Merged | Folded into DASH-09 on 2026-11-08 to keep one capture per section. |
| DASH-09 | GIF | Rename an owned dashboard, then pin it. Show the new title in the list and the dashboard appearing under Pinned. |
| DASH-10 | Dropped | Placeholder removed from the page on 2026-11-08 (minor control). |
| DQ-06 | Dropped | Placeholder removed from the page on 2026-11-08 (minor control). |

### Use dashboard variables (`dashboards/variables.mdx`)

| ID | Format | Capture brief |
| --- | --- | --- |
| VAR-01 | Video (done) | Captured as `assets/clips/dashboard_variables.mp4` and embedded on the page. Original brief: select one customer in the variable bar and show the cards that use it updating together. |
| VAR-03 | Video | One clip below the Dynamic/Static tabs, covering both. Dynamic: set Last 3 months with Complete periods only, Apply, show the date label and updated cards. Static: fill in Start and End with the matching calendar range, Apply. |
| VAR-08 | Merged | Folded into VAR-03 on 2026-11-08; the Static half of that clip covers this brief. |
| VAR-04 | Dropped | Placeholder removed from the page on 2026-11-08 (minor control). |
| VAR-02 | Screenshot | Show Dash proposing a Reporting period variable for the named sales cards. Keep the proposed variable, connected cards, and Approve all visible. |
| VAR-05 | GIF | Use a linked Company and Location control. Select a company and location, then change the company to show how the available locations and dependent selection change. |
| VAR-09 | Dropped | Placeholder removed from the page on 2026-11-08 (minor control). |
| VAR-06 | Dropped | Placeholder removed from the page on 2026-11-08 (minor control). |
| VAR-07 | Dropped | Placeholder removed from the page on 2026-11-08 (minor control). |

### Table cards (`dashboards/cards/tables.mdx`)

| ID | Format | Capture brief |
| --- | --- | --- |
| TABLE-06 | Merged | Folded into TABLE-01 on 2026-11-08 to keep one capture per section. |
| TABLE-01 | GIF | Search the invoice table for one customer, then filter Days overdue to greater than 30 and sort Outstanding amount descending. Show the active search, filter, and sort indicator, then clear them. |
| TABLE-07 | Merged | Folded into TABLE-01 on 2026-11-08 to keep one capture per section. |
| TABLE-08 | Merged | Folded into TABLE-03 on 2026-11-08 to keep one capture per section. |
| TABLE-03 | GIF | Open the Outstanding amount Format menu and set its currency and decimal places, then add a fill rule for Days overdue greater than 30. Show matching and nonmatching cells together. |
| TABLE-04 | Dropped | Placeholder removed from the page on 2026-11-08 (minor control). |
| TABLE-05 | Video | Show the invoice rows, send the pivot request, and inspect the proposed customer-by-month grid. Highlight its row groups, month columns, and totals before approving. |
| TABLE-02 | Dropped | Placeholder removed from the page on 2026-11-08 (minor control). |

### Chart cards (`dashboards/cards/charts.mdx`)

| ID | Format | Capture brief |
| --- | --- | --- |
| CHART-01 | Screenshot | Show labeled examples of a line, bar, pie, donut, and combined bar-and-line chart from one sales dataset. Keep titles and units readable, and on the combined chart keep the left currency axis and right percentage axis legible. |
| CHART-02 | Merged | Folded into CHART-01 on 2026-11-08 to keep one capture per section. |
| CHART-03 | Dropped | Placeholder removed from the page on 2026-11-08 (minor control). |
| CHART-06 | GIF | Add one Monthly target goal line to the sales axis, then enable a trend line. End with the goal label, the fitted line, and the monthly results visible. |
| CHART-07 | Merged | Folded into CHART-06 on 2026-11-08 to keep one capture per section. |
| CHART-05 | Dropped | Placeholder removed from the page on 2026-11-08 (minor control). |
| CHART-04 | Dropped | Placeholder removed from the page on 2026-11-08 (minor control). |

### Numbers and gauges (`dashboards/cards/numbers-and-gauges.mdx`)

| ID | Format | Capture brief |
| --- | --- | --- |
| METRIC-01 | Dropped | Placeholder removed from the page on 2026-11-08 (minor control). |
| METRIC-02 | GIF | Show a sales number with Previous period enabled and change the reporting period so both sets of dates and values update. Then compare an actual result with an entered Target and show the difference. |
| METRIC-05 | Merged | Folded into METRIC-02 on 2026-11-08 to keep one capture per section. |
| METRIC-03 | Merged | Folded into METRIC-02 on 2026-11-08 to keep one capture per section. |
| METRIC-04 | GIF | Request the completion-rate gauge and approve it, then open Edit gauge and adjust one zone boundary. Show the value, needle, three zones, and a 0.7 boundary displayed as 70%. |
| METRIC-06 | Merged | Folded into METRIC-04 on 2026-11-08 to keep one capture per section. |

### Share dashboards (`dashboards/sharing.mdx`)

| ID | Format | Capture brief |
| --- | --- | --- |
| SHARE-01 | GIF | Add one teammate under Specific people, check People with access, and save the change. Use a publishable name and email address. |
| SHARE-02 | Video (done) | Reuses `assets/clips/dashboard_share.mp4` from the quickstart; embedded on the page on 2026-11-08. |
| SHARE-03 | Dropped | Placeholder removed from the page on 2026-11-08 (minor control). |

### Export and email reports (`dashboards/reports.mdx`)

| ID | Format | Capture brief |
| --- | --- | --- |
| REPORT-01 | GIF | Download a multi-card dashboard and open its workbook. Show the dashboard overview and one card's worksheet. |
| REPORT-03 | Dropped | Placeholder removed from the page on 2026-11-08 (minor control). |
| REPORT-04 | Video (done) | Reuses `assets/clips/dashboard_schedule.mp4` from the quickstart; embedded on the page on 2026-11-08. |
| REPORT-05 | Dropped | Placeholder removed from the page on 2026-11-08 (minor control). |
| REPORT-06 | Dropped | Placeholder removed from the page on 2026-11-08 (minor control). |
| REPORT-02 | Dropped | Placeholder removed from the page on 2026-11-08 (error state). |

### Manage users (`admin/users.mdx`)

| ID | Format | Capture brief |
| --- | --- | --- |
| ADMIN-01 | GIF | Click New user, fill in a fictional person's details, select one role under Initial roles, and click Save user. End with the new person visible on the Dashboard. |

### Roles and permissions (`admin/roles.mdx`)

| ID | Format | Capture brief |
| --- | --- | --- |
| ADMIN-02 | Screenshot | Show a role's Permissions table with the Feature access and Table access groups visible, a mix of None and Full selections, and the Grant all, Clear, and Search permissions controls in view. |

### Troubleshooting (`help/troubleshooting.mdx`)

| ID | Format | Capture brief |
| --- | --- | --- |
| HELP-01 | Dropped | Placeholder removed from the page on 2026-11-08 (error state). |
| HELP-02 | Dropped | Placeholder removed from the page on 2026-11-08 (error state). |
| HELP-03 | Dropped | Placeholder removed from the page on 2026-11-08 (error state). |
