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

### Quickstart (`index.mdx`)

| ID | Format | Capture brief |
| --- | --- | --- |
| QS-01 | Screenshot | Show Galvant Chat with the sidebar, New chat button, and message box visible. Use this as the opening product image for the guide. |
| QS-02 | Screenshot | Show one of the starter questions and Scout's completed answer with its result cards. Use an example supported by the capture account's connected data. |

### Ask questions with Scout (`chat/ask-questions.mdx`)

| ID | Format | Capture brief |
| --- | --- | --- |
| CHAT-01 | Screenshot | Show **New chat**, the message box, and the send button. Include the connected-source indicators beneath the composer. |
| CHAT-02 | GIF or video | Record starting dictation, speaking a short English question, stopping, correcting one transcribed word, and sending the edited message. |
| CHAT-03 | GIF | Show a clarification card, selecting an option or entering a custom answer, and Scout continuing. Include the question counter if several questions are shown. |
| CHAT-04 | GIF | Show a suggested follow-up, pressing Tab to accept it, editing the draft, and pressing Enter to send. Make the difference between accepting and sending visible. |
| CHAT-05 | Video | Send an analysis, navigate elsewhere within Galvant, and return to the same conversation. Show ongoing output or the completed result when you return. |

### Use tables and charts (`chat/ask-questions/tables-and-charts.mdx`)

| ID | Format | Capture brief |
| --- | --- | --- |
| RESULTS-03 | GIF | Open Expand table, search for a value, and sort a column. End with the matching rows and active sort visible. |
| RESULTS-08 | GIF | Enable Data picker on a Chat chart and inspect two plotted values. Keep the card title, legend, and axis labels visible so the measure and units are clear. |
| RESULTS-04 | Screenshot | Show Refresh card, Excel, and Expand table on a table card. |

### Agent trace and Show logic (`chat/ask-questions/agent-trace-and-logic.mdx`)

| ID | Format | Capture brief |
| --- | --- | --- |
| RESULTS-01 | Screenshot | Show Worked for above a completed answer and Show logic below it. Include a result card with its own Show logic control, keeping the original question visible. |
| RESULTS-07 | GIF | Record Scout working, then open Worked for above the completed answer. Expand a Queried database step and show its SQL and Rows details. Keep the trace distinct from the final answer and Show logic. |
| RESULTS-02 | Screenshot | Capture Show logic expanded beneath an answer, with Scout's narrative steps and Tables used. Include the separate Show logic control in a result card's header. |

### Give feedback on answers (`chat/ask-questions/give-feedback.mdx`)

| ID | Format | Capture brief |
| --- | --- | --- |
| RESULTS-06 | Screenshot | Show Give feedback beneath an answer and the open form with an example describing a mismatched time period. Include Submit and Cancel. Do not submit feedback just to capture the image. |

### Work with files (`chat/files.mdx`)

| ID | Format | Capture brief |
| --- | --- | --- |
| FILES-01 | GIF | Show Add file, a completed upload, and a focused question sent with the attachment. End on Scout's answer with the filename still visible. |
| FILES-02 | Screenshot | Show a small costing workbook with its total in Costing!F20, then Scout tracing that formula to its input cells and any referenced sheets. Keep the formula and its inputs within the documented reading coverage and visible in the capture. |
| FILES-03 | Screenshot | Show a PDF question and Scout's answer referring to a specific page, table, or requirement. Include the relevant part of the document in the capture. |
| FILES-07 | Screenshot | Show an image or diagram attached to a question and an answer about its visible annotations. Keep the referenced details readable in the original image. |
| FILES-04 | Screenshot | Show a STEP attachment and an answer about the part's geometry. Include prepared views if they appear in the product flow. |
| FILES-05 | GIF | Ask an initial file question, then follow up about one sheet, page, or feature in the same conversation. Show how the follow-up builds on the earlier answer. |
| FILES-06 | Screenshot | Show a sent message's attachment filename and its download interaction. |
| RESULTS-05 | Screenshot | Show a file tile produced by a verified workflow, with its filename and open/download action visible. |

### Reusable workflows (`chat/workflows.mdx`)

| ID | Format | Capture brief |
| --- | --- | --- |
| WF-01 | GIF or video | Show the customer sales analysis, one refinement if needed, and the request to save Monthly sales review. End on Scout's proposed workflow, with the sales method and month input visible. Use the same example for WF-02 through WF-04. |
| WF-02 | Screenshot | Show the approval card for creating Monthly sales review. Keep the proposed name, actual command, private visibility, description, and Yes/No choices visible. Use the saved command from this capture in WF-03. |
| WF-03 | GIF | Select the actual saved command for Monthly sales review. Append Use the month before last and send it. End on the report with the requested dates, customer sales in descending order, and overall total visible. |
| WF-04 | Screenshot | Show the request to add each customer's percentage of total sales to Monthly sales review. Capture the update proposal with the existing method preserved and Yes/No choices visible. Make clear that this changes future runs. |
| WF-05 | Screenshot | Show private and team-visible workflow indicators and the pin control revealed on hover. Use neutral names that do not reveal customer information. |

### Manage conversations (`chat/conversations.mdx`)

| ID | Format | Capture brief |
| --- | --- | --- |
| CONV-01 | Screenshot | Show an existing conversation, New chat, and a saved workflow in the conversation panel. Use one repeatable task to illustrate continuing the discussion, starting separately, and reusing the task. |
| CONV-02 | Screenshot | Show the conversation panel with **Recents**, an expanded recent list, and the currently selected conversation. |
| CONV-03 | GIF | Show the pin control on hover, pinning a conversation, and finding it under **Pinned**. End with unpinning it if the recording remains short. |
| CONV-04 | GIF | Open the three-dot menu, select **Rename**, edit the title, and save it. Keep the selected conversation visible. |

### Dashboard quickstart (`dashboards/quickstart.mdx`)

| ID | Format | Capture brief |
| --- | --- | --- |
| DQ-01 | Screenshot | Show a newly created dashboard with Ask Dash open. Mark the New dashboard and Ask Dash controls so the starting point is clear. |
| DQ-02 | Video | Send one business-area message, show the resulting dashboard, and approve it. End on the saved dashboard. Use one example throughout the rest of the quickstart. |
| DQ-07 | GIF | Share the quickstart dashboard with Everyone, save the change, and copy its link. Keep Everyone in the company visible in the saved access list. |
| DQ-08 | Video | Schedule the same dashboard to a publishable sample email every Monday at 09:00. Show the recipient, timezone, recurrence summary, and saved schedule in the list. End before any email is sent for the capture. |

### Build and manage dashboards (`dashboards/use-dash.mdx`)

| ID | Format | Capture brief |
| --- | --- | --- |
| DASH-01 | Screenshot | Show a sales dashboard beside the open Dash panel with the customer-breakdown request. Keep the existing reporting period visible. |
| DASH-03 | GIF | Select one saved card using Ask Dash about this card, show it in the panel's context, and send a change request for that card. |
| DASH-04 | Video | Show one proposed change, request one revision, then review and approve the revised change. End with the updated dashboard visible. |
| DASH-02 | Screenshot | Show a gallery of a table, chart, number, and gauge from the same documentation dashboard. Label each type and keep titles and units readable. |
| DASH-07 | Video | Select one chart point with Data picker and send its prepared question to Dash. Show the investigation beside the original chart. |
| DASH-08 | Screenshot | Capture Show logic open on a saved dashboard card, with its steps and the original result both visible. |
| DASH-05 | GIF | Enlarge one table and move it into a useful position. End with the saved layout and its neighboring cards visible. |
| DASH-06 | GIF | Use the dashboard's Refresh button. Show the refreshing state and completed dashboard; do not demonstrate individual-card refresh controls. |
| DQ-04 | Screenshot | Show Personal, Shared, and Pinned in the dashboard list. Use clear dashboard names and highlight the selected dashboard. |
| DQ-05 | GIF | Rename an owned dashboard and show its updated title in the dashboard list. |
| DASH-09 | GIF | Pin one dashboard and show it appearing under Pinned. |
| DASH-10 | Screenshot | Show Duplicate and edit on a shared dashboard, paired with the resulting owned copy. Make the different dashboard titles clear. |
| DQ-06 | Screenshot | Show the deletion confirmation for a sample dashboard. Do not confirm deletion to capture the image. |

### Use dashboard variables (`dashboards/variables.mdx`)

| ID | Format | Capture brief |
| --- | --- | --- |
| VAR-01 | GIF | Select one customer in the variable bar. Show the sales total, trend, and order table updating together, with a company-wide card unchanged. Keep the selected customer visible. |
| VAR-03 | GIF | Open Dynamic and set Last 3 Months with Complete periods only. Click Apply and show the resulting date label and updated cards. |
| VAR-08 | Screenshot | Show Static with Start and End filled in, the matching calendar range, and Apply visible. |
| VAR-04 | Screenshot | Open a variable's 3 cards menu beside its name. Show Used by these cards and the matching variable values below a card title. |
| VAR-02 | Screenshot | Show Dash proposing a Reporting period variable for the named sales cards. Keep the proposed variable, connected cards, and Approve all visible. |
| VAR-05 | GIF | Use a linked Company and Location control. Select a company and location, then change the company to show how the available locations and dependent selection change. |
| VAR-09 | Screenshot | Show a multiple-choice variable with two values selected and its search field visible. Keep the affected cards in view. |
| VAR-06 | GIF | Change the reporting period and show a configured sales-trend title updating to match it. |
| VAR-07 | GIF | Move one variable to a new position in the bar. Keep its name and connected-card count visible so it can be followed through the move. |

### Table cards (`dashboards/cards/tables.mdx`)

| ID | Format | Capture brief |
| --- | --- | --- |
| TABLE-06 | GIF | Search the invoice table for one customer and show the matching records and active search. End with the search result visible. |
| TABLE-01 | GIF | Filter Days overdue to greater than 30. Show the active filter and the remaining invoices, then clear it. |
| TABLE-07 | Screenshot | Show Outstanding amount sorted descending, with the column's active sort indicator and the largest balances at the top. |
| TABLE-08 | Screenshot | Show the Outstanding amount Format menu and the column displaying its chosen currency and decimal places. |
| TABLE-03 | GIF | Add a fill rule for Days overdue greater than 30. Show matching and nonmatching cells together so the outcome is clear. |
| TABLE-04 | GIF | Add Sum to Outstanding amount, then filter Days overdue to greater than 30. Show the total changing to match the filtered invoices. |
| TABLE-05 | Video | Show the invoice rows, send the pivot request, and inspect the proposed customer-by-month grid. Highlight its row groups, month columns, and totals before approving. |
| TABLE-02 | GIF | Freeze Customer, then scroll the invoice table horizontally. Show the customer names staying visible beside the later columns. |

### Chart cards (`dashboards/cards/charts.mdx`)

| ID | Format | Capture brief |
| --- | --- | --- |
| CHART-01 | Screenshot | Show labeled examples of a line, bar, pie, and donut chart using one sales dataset. Keep titles and units readable. The combined chart has its own capture below. |
| CHART-02 | Screenshot | Show monthly sales as bars and gross margin percentage as a line. Mark the left currency axis, right percentage axis, and matching legend entries. |
| CHART-03 | GIF | Switch one monthly product-group chart from Stacked to Stacked to 100%. Show how the axis and interpretation change from amounts to shares. |
| CHART-06 | GIF | Add one Monthly target goal line to the sales axis. End with its label and the monthly results visible. |
| CHART-07 | GIF | Enable a trend line for monthly sales. Show the original points and fitted line together. |
| CHART-05 | GIF | Give one series a clearer name and color. End with its matching legend entry and plotted values visible. |
| CHART-04 | Screenshot | Show the right-axis menu on the combined sales/margin chart, with a clear percentage title and Percent format. Keep the resulting axis in view. |

### Numbers and gauges (`dashboards/cards/numbers-and-gauges.mdx`)

| ID | Format | Capture brief |
| --- | --- | --- |
| METRIC-01 | Screenshot | Show a total-sales number card beside Edit number, with its Label and Format controls visible. Keep the reporting period in view. |
| METRIC-02 | GIF | Show a sales number with Previous period enabled. Change the reporting-period variable and show both sets of dates and values updating together. |
| METRIC-05 | Screenshot | Show a number card comparing an actual result with an entered target. Keep the Target field, both values, and the difference visible. |
| METRIC-03 | Screenshot | Show an overdue-work metric with Bad (red) selected and a decrease displayed as a favorable change. |
| METRIC-04 | GIF | Request the completion-rate gauge and approve it. Show its numeric value, needle, and the three defined zones together. |
| METRIC-06 | Screenshot | Show Edit gauge with the first zone open and a 0.7 boundary displayed as 70% on the gauge. Include Starts at, Ends at, and Color. |

### Share dashboards (`dashboards/sharing.mdx`)

| ID | Format | Capture brief |
| --- | --- | --- |
| SHARE-01 | GIF | Add one teammate under Specific people, check People with access, and save the change. Use a publishable name and email address. |
| SHARE-02 | Screenshot | Show Copy link beside a saved Everyone in the company audience. Keep the dashboard title visible. |
| SHARE-03 | Screenshot | Show a shared dashboard's Read only notice and Duplicate and edit button, with usable variable controls below the header. |

### Export and email reports (`dashboards/reports.mdx`)

| ID | Format | Capture brief |
| --- | --- | --- |
| REPORT-01 | GIF | Download a multi-card dashboard and open its workbook. Show the dashboard overview and one card's worksheet. |
| REPORT-03 | Screenshot | Show the Send now form ready to send, with sample recipients, subject, message, and the Send now button. Do not send an email just to capture the form. |
| REPORT-04 | Video | Create one weekly schedule. Show the recipients, timing, timezone, Occurs summary, and saved entry in the list. Use a controlled capture account and end before delivery. |
| REPORT-05 | Screenshot | Show one selected schedule with Save schedule and Delete visible. Keep its recipients and timing readable. |
| REPORT-06 | Screenshot | Show a weekly report on the Scheduled sends calendar with its date, time, and You send/Sent to you legend readable. |
| REPORT-02 | Screenshot | Show an Export Summary identifying one truncated or failed card. Highlight its Status, Truncated, and Error fields. |

### Troubleshooting (`help/troubleshooting.mdx`)

| ID | Format | Capture brief |
| --- | --- | --- |
| HELP-01 | Screenshot | Show a conversation with a visible run error, keeping the preceding request and error text readable. Use a controlled example with no private data. |
| HELP-02 | Screenshot | Show one failed card with its title, current variable pills, error, and refresh control. Keep other successful cards visible to distinguish a card failure from an unavailable dashboard. |
| HELP-03 | Screenshot | Show a schedule's Last email failed message and the corresponding Delivery failed calendar entry. Capture the error and occurrence time clearly. |
