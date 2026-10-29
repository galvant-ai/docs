# Galvant documentation skeleton

Status: Updated to 17 pages after the navigation, page-splitting, and Chat content reviews on October 28, 2026. This outline supersedes the earlier navigation tables in `documentation-plan.md`. See `page-reviews.md` for the sequential source/editorial reviews and `media-checklist.md` for the visual captures still to supply.

Audience: Customers already onboarded to Galvant.

In the tree below, sections contain pages and optional nested groups. Items below a page are headings within that page unless explicitly marked as subpages. Extra indentation under a heading represents a subheading. Sections, nested groups, and pages belong in the sidebar; headings belong in the page's table of contents.

```text
Galvant documentation
│
├── Start here
│   └── Quickstart [page]
│       ├── Open a new chat
│       ├── Choose your first question
│       │   └── Sales, Finance, and Production tabs with independent starter questions
│       └── Where to go next
│
├── Chat
│   ├── Ask questions with Scout [parent page]
│   │   ├── Start a chat [heading]
│   │   ├── Dictate a message [heading]
│   │   ├── Respond to Scout's questions [heading]
│   │   ├── Ask follow-up questions [heading]
│   │   ├── Leave and return while Scout works [heading]
│   │   ├── Use tables and charts [subpage]
│   │   │   ├── Explore a table
│   │   │   ├── Inspect chart values
│   │   │   ├── Refresh a table or chart
│   │   │   └── Download a table as Excel
│   │   ├── Agent trace and Show logic [subpage]
│   │   │   ├── Open the agent trace
│   │   │   └── See how Scout reached an answer
│   │   └── Give feedback on answers [subpage]
│   │       ├── Submit feedback
│   │       └── Ask Scout to revise the answer
│   │
│   ├── Work with files [page]
│   │   ├── File-type cards linking to each section
│   │   ├── Attach a file and ask about it
│   │   ├── Spreadsheets
│   │   │   └── Example, formats, row coverage, and formula behavior
│   │   ├── PDFs
│   │   ├── Images
│   │   ├── CAD models
│   │   ├── Keep working with a file
│   │   │   └── Accordions for new chats, revised files, and dashboard use
│   │   └── Download files Scout creates
│   │
│   ├── Reusable workflows [page]
│   │   ├── Why create a workflow?
│   │   │   └── Preserve a repeatable method and vary its inputs
│   │   ├── What a workflow saves
│   │   ├── Create a workflow with Scout
│   │   ├── Review and approve changes
│   │   ├── Run a workflow and provide inputs
│   │   ├── Update a workflow or create a separate variant
│   │   ├── Ownership, visibility, and pinning
│   │   └── Delete a workflow
│   │
│   └── Manage conversations [page]
│       ├── Choose a conversation, a new chat, or a workflow
│       ├── Find and reopen conversations
│       ├── Pin and unpin conversations
│       ├── Rename a conversation
│       └── Delete a conversation
│
├── Dashboards
│   ├── Dashboard quickstart [page]
│   │   ├── Open a new dashboard
│   │   ├── Describe what you want to track
│   │   │   └── Sales, Finance, Production, Procurement, Inventory, and Quality examples
│   │   ├── Review and save your dashboard
│   │   ├── Share it with your company
│   │   └── Receive it by email every week
│   │
│   ├── Build and manage dashboards [page]
│   │   ├── Ask Dash to build or change your dashboard
│   │   ├── Review and approve changes
│   │   ├── Available cards and visualizations
│   │   ├── Explore a result with Dash
│   │   ├── Arrange and refresh your dashboard
│   │   └── Find and manage saved dashboards
│   │       └── Optional rename, pin, duplicate, and delete instructions
│   │
│   ├── Use dashboard variables [page]
│   │   ├── Change what your dashboard shows
│   │   ├── Choose a reporting period
│   │   │   └── Dynamic and Static walkthroughs
│   │   ├── See which cards use a variable
│   │   ├── Ask Dash to add or change variables
│   │   ├── Current selections and saved defaults
│   │   └── Linked variables and shared views
│   │       └── Optional other inputs, dynamic titles, and organization
│   │
│   ├── Cards and visualizations [nested group]
│   │   ├── Table cards [page]
│   │   │   ├── Find and filter records
│   │   │   ├── Format and highlight values
│   │   │   ├── Show totals and summaries
│   │   │   ├── Compare groups with a pivot table
│   │   │   └── Adjust columns and understand saved changes
│   │   │
│   │   ├── Chart cards [page]
│   │   │   ├── Examples of charts Dash can create
│   │   │   ├── Combine measures in one chart
│   │   │   ├── Show components and proportions
│   │   │   ├── Add targets and trends
│   │   │   └── Adjust labels, colors, and axes
│   │   │
│   │   └── Numbers and gauges [page]
│   │       ├── Track a key metric
│   │       ├── Compare periods or a target
│   │       └── Show performance against a range
│   │
│   ├── Share dashboards [page]
│   │   ├── Share with selected people or your company
│   │   ├── Send a dashboard link
│   │   ├── What viewers can do
│   │   └── Change or remove access
│   │
│   └── Export and email reports [page]
│       ├── Download Excel
│       ├── Send a report now
│       ├── Schedule recurring emails
│       ├── Change or stop a schedule
│       ├── Which dates and variable values are used
│       └── Check scheduled sends and delivery
│
└── Help
    └── Troubleshooting [page]
        ├── Scout's answer is unexpected or incomplete
        ├── A file cannot be uploaded or fully read
        ├── A dashboard or card is unavailable
        ├── Changes are waiting for approval
        ├── Data does not look current
        ├── An export or scheduled email fails
        └── Report a problem
```

## Later addition

Add the following page under Chat after both product areas have their own complete documentation. It is optional when learning either area.

```text
Save results to a dashboard [page]
├── Choose one or more result cards
├── Add them to a new or existing dashboard
└── Review the dashboard changes
```

## Grouping decisions

- The first page is a quickstart whose opening content gives exact clicks, messages, and an observable result. Put background and navigation choices after the reader's first action.
- Asking, dictating, answering clarification questions, and returning to a running chat are parts of the same interaction. Keep them on **Ask questions with Scout**. Use that page as the clickable parent of three separate guides for tables/charts, agent trace/Show logic, and feedback.
- Remove the generic "Ask a useful question" section. Use concrete messages in the quickstart and task-specific examples elsewhere. Put suggested follow-ups under **Ask follow-up questions**.
- Formats, limits, Excel behavior, and downloads of files Scout creates belong on **Work with files**. Use native file-type cards linking to anchored sections, one upload walkthrough, and useful examples. Put formats and reading limits beside the relevant task.
- Creating, approving, running, changing, and deleting a saved workflow form one lifecycle. Keep them on one **Reusable workflows** page, using one example throughout.
- The workflow walkthrough uses **Monthly sales review**: agree on customer sales and an overall total, save the method privately, run it for another month using its actual saved command, then update future runs to include each customer's share of sales.
- The first Dashboard page is **Dashboard quickstart**. Follow one path: describe the business information, approve the dashboard, share with Everyone in the company, and schedule a Monday 09:00 report to yourself. Give six business-area example messages without prescribing card types. Dashboard management belongs on **Build and manage dashboards**.
- **Dashboard variables** replaces the earlier **Filter and refresh data** page. Variables are a central feature, not just table filters. Explain what they control, creating and changing them, defaults, dependent choices, affected cards, dynamic labels, and the values used by exports and schedules. Cover whole-dashboard refresh once under **Build and manage dashboards**. Do not inventory individual-card refresh controls in the Dashboard guides.
- Group Tables, Charts, and Numbers and gauges under **Cards and visualizations**, using a nested Mintlify group. This adds one useful navigation level without creating another page. Keep each family's detailed settings and limits on its own page. Include examples for conditional formatting, pivots, and chart combinations.
- The card-type gallery belongs inside the Dash guide and shows what Dash may choose; it is not a decision the reader must make. Card-family guides use concrete examples, visual outcomes, and optional secondary settings.
- Downloads, immediate email sends, and recurring sends are ways to deliver a report. Start with one **Export and email reports** page.
- Keep sharing separate: it changes access to the live dashboard and has different consequences from sending an exported report.
- Use **Troubleshooting** as a symptom index with links to the relevant page sections. Keep detailed fixes beside the feature instructions to avoid repeating them.

## Mintlify navigation decisions

Research checked against Mintlify's current documentation on October 28, 2026:

- Header navigation tabs can hold separate content sections and their own sidebar structures. Reserve them for future **Documentation**, **API reference**, and **Changelog** content. Keep the initial documentation in a single sidebar while it is the only content section; add the header tabs when there is useful content to switch between.
- Sidebar groups can contain pages and nested groups. Nested groups can collapse; current docs say top-level groups always expand. **Ask questions with Scout** and **Cards and visualizations** use nested groups.
- A group can have a `root` page, making its label open that page while retaining child pages. **Ask questions with Scout** uses its existing guide as the root, with three answer-related child guides.
- A root page can automatically list its children as cards or an accordion using `directory`. **Ask questions with Scout** uses a native card directory after its guide content.
- Headings and subheadings create anchors and page-table-of-contents entries. Keep dictation, clarification, file limits, and Excel within the agreed pages, using those anchors for direct links.
- Other supported navigation choices include tab menus, anchors, dropdowns, product selectors, versions, languages, and breadcrumbs. They remain available as the site grows; this proposal does not require adding them now.
- The navigation schema requires one primary root pattern and compatible child divisions at each level. We can nest the current groups under a future Documentation tab. Do not add empty sections in anticipation of future work.

The main navigation model can grow as follows. The header tabs are future structure, not a change to the current site:

```text
Documentation [future header tab]
├── Start here [group]
├── Chat [group]
├── Dashboards [group]
│   ├── Dashboard quickstart [page]
│   ├── Build and manage dashboards [page]
│   ├── Use dashboard variables [page]
│   ├── Cards and visualizations [nested group]
│   │   ├── Tables [page]
│   │   ├── Charts [page]
│   │   └── Numbers and gauges [page]
│   ├── Share dashboards [page]
│   └── Export and email reports [page]
└── Help [group]

API reference [future header tab]
Changelog [future header tab]
```

### Dashboard variable coverage

Use the UI's term **Dashboard variables** consistently. A variable is a reusable dashboard input, such as a date range, a selected company, or a number. Explain what changes when the input changes, rather than introducing SQL parameter syntax in the customer guide.

Include a worked example with a variable driving multiple cards, plus an independent card that does not use it, using a verified dataset. Cover the distinction between a dashboard variable and a table's own row filter.

Code evidence reviewed:

- Supported types are text, number, single choice, multiple choices, and date range.
- Cards track the variables their queries use. The UI identifies affected cards and shows current variable values beneath card titles.
- Dependent choices can narrow available values, such as Company then Location. Changing a parent resets its dependent values.
- The current viewer's changed values are carried in the dashboard address. Saved defaults are distinct from these selections.
- **Copy link** currently copies the base dashboard URL rather than the address containing the viewer's current selections. Explain the distinction when teaching links.
- Variable values can also appear dynamically in dashboard names, card titles, and column labels.
- Exports and immediate sends receive current variable values. Scheduled sends retain the values saved with the schedule; relative dates resolve in the schedule's timezone on each send.
- Owners can rename and reorder variables. Creating, changing, or deleting definitions through Dash follows the dashboard proposal approval flow.

Verify all of these behaviors against the target deployed version when writing the actual guide. Keep code-level details and storage encodings in authoring evidence, outside customer instructions.

## Opening examples and explanations

These are the proposed walkthroughs and explanatory openings for the pages. Verify the examples in an explicitly chosen deployed environment during authoring. Do not promise a fixed dataset, metric, or answer across customer companies.

### Site quickstart

After the user's review, the homepage starts with the preferred introductory paragraph and an opening Chat image placeholder. Remove its description subtitle and the repeated introductory copy.

1. Open your company's Galvant app and click **Chat** > **New chat**.
2. Choose a native tab for **Sales**, **Finance**, or **Production**.
3. Send that tab's independent question. Each question names the business area and an initial analysis; none depends on a previous discovery response.
4. Answer a clarification question if Scout asks one, then read its answer.

Do not add a generic follow-up or a separate Run an analysis step. Use the exact current questions in `index.mdx` as the source for capture. Link to **Ask questions with Scout**, **Use tables and charts**, and the independent Dashboard quickstart afterward.

### Suggested follow-ups

Explain this inside **Ask follow-up questions**:

> Scout may suggest a follow-up in the message box. With the message box focused, press **Tab** to put the suggestion into your draft. You can edit it before pressing **Enter** to send. Press **Escape** to dismiss the suggestion.

Accepting a suggestion does not send it. Suggestions are conditional; do not imply that every answer produces one.

### Answer-related subpages

The former combined results page is split into three child pages under Ask questions with Scout:

- **Use tables and charts** covers table exploration, chart values, refresh, and Excel downloads.
- **Agent trace and Show logic** covers recorded work, tool-call details, and the thought process and steps Scout took to reach an answer. Do not describe Show logic as a calculation view.
- **Give feedback on answers** covers submitting feedback and the separate action of asking Scout to revise an answer.

Generated-file downloads belong on Work with files. Do not recreate a combined results page. Keep individual descriptions for SEO; the approved rule in `styles.css` hides their visible subtitles. Keep sidebar labels descriptive.

### Why create a workflow?

Lead **Reusable workflows** with the reason to save one:

> Create a workflow when you want to reuse an analysis method you have refined with Scout. Save the agreed calculations, scope, and presentation, then provide different inputs on later runs instead of explaining the method again. A workflow can also make an approved method available to teammates when shared.

Use a concrete example of repeating the same analysis for a different month or customer, where the available data supports it. Distinguish the saved method from a past answer: running the workflow retrieves fresh data. Explain that changing this answer and updating the workflow for future runs are separate requests. Avoid suggesting that a workflow guarantees identical outputs or automatically runs on a schedule.

### Conversation, New chat, or reusable workflow

Begin **Manage conversations** by defining the relationship:

> A conversation is a thread of messages with Scout. You can pick up an existing discussion, start a separate one, or save a repeatable task as a workflow.

Use one comparison table: continue a conversation to build on earlier work; start a new chat for a separate discussion; create a workflow to repeat an agreed method with new inputs or fresh data. Include an example for each choice. Explain that the previous conversation remains available to reopen. Do not imply that starting a new chat changes the user's connected-data access, clears company knowledge, or carries attachments over from the previous conversation. Avoid promising unlimited verbatim history retention.

### Dashboard quickstart

Begin with describing business information, then complete one creation-to-delivery flow:

1. Open **Dashboards** > **New dashboard** > **Ask Dash**.
2. Describe what you want to track. Offer independent Sales, Finance, Production, Procurement, Inventory, and Quality messages in native Tabs. Dash chooses the visualizations.
3. Review the proposed dashboard and click **Approve all**. Request a revision in the conversation if needed.
4. Open **Share**, choose **Everyone**, save, and copy the link. Explain the audience as company users with Dashboards access.
5. Create a schedule to your own email every Monday at 09:00 in your timezone, starting next Monday. End with the saved schedule in the list.

Keep variables, card-type explanations, and dashboard-library management outside this quickstart. Put management under **Build and manage dashboards**. Keep deeper option choices on the relevant task guides.

### Dashboard guide treatment

- **Build and manage dashboards** starts with a concrete change request, then review, a native gallery of available visualizations, investigation/Show logic, layout and whole-dashboard refresh, and optional library management.
- **Use dashboard variables** starts with selecting a value and seeing connected cards update. Use Dynamic/Static tabs with exact Apply behavior, current-view/default comparison cards, and connected-card navigation. Keep linked choices and report selections visible.
- **Table cards** uses an outstanding-invoices example for searching, overdue filters, conditional highlighting, summed balances, and customer-by-month pivots. Independent viewing actions are native Tabs rather than a forced sequence.
- **Chart cards** shows visual examples first, then monthly sales/margin combined axes, product-group proportions, and separate goal/trend walkthroughs. Let Dash choose the form unless the customer requests one.
- **Numbers and gauges** uses a sales metric comparison and a completion-rate range. Keep period and target examples separate; put raw-unit boundary editing in optional details.
- **Share dashboards** keeps audience choices, the live link, permissions, and access changes together. **Export and email reports** starts with download/send/schedule actions; keep schedule variable capture prominent and put secondary recurrence/workbook details later.
- Every capture should teach one interaction or clearly defined outcome. Preserve descriptive IDs and regenerate the manifest after revising them.

## Authoring notes

- The current structure contains 17 pages, with one optional later page for saving Chat results to Dashboards. Page boundaries follow the topic rather than a fixed count.
- Examples, settings tables, and screenshots sit under the headings above. They do not become separate pages by default.
- The Tables, Charts, and Numbers and gauges guides can also be linked from Chat where the same card controls apply. Explain context-specific differences once in those guides.
- If a card is changed through an agent request rather than a direct control, make that distinction explicit in the procedure.
- State permissions, availability, reading coverage, and saved versus temporary effects alongside the affected task. Verify exact behavior in the intended deployed version.
- Keep **Dashboard variables** distinct from table-column filters. Preserve the current defaults-versus-selections, affected-card, and dependent-choice behavior in the guide, including consequences for copied links and scheduled reports.
- Keep file upload size separate from reading coverage. For Excel, document first-1,000-rows-per-sheet coverage, possible earlier truncation, and formula text versus recalculation. Do not promise that a focused re-read expands coverage.
- Document leaving the conversation within Galvant. Verify browser-close, reload, disconnect, and expiry cases before making broader promises.
- The Knowledge panel remains availability-dependent. If included in the initial release, add a section within **Agent trace and Show logic** about what Scout knows and how to inspect changes, after verifying the customer-facing controls.
- Use the site **Quickstart** as the action-first homepage and **Dashboard quickstart** as the first Dashboard page. Keep deeper Chat and Dash guidance focused on additional controls and decisions, and link to the walkthroughs instead of repeating them.
- Explain why a customer would save a workflow and when they should continue a conversation before showing management controls.
- Check the first draft for excessive length. Split a page only when there are distinct substantial tasks that customers need to find independently.

## References

- [Mintlify navigation guidance](https://www.mintlify.com/docs/guides/navigation)
- [Mintlify navigation: groups, root pages, directories, tabs, selectors, and nesting](https://www.mintlify.com/docs/organize/navigation)
- [Mintlify page metadata and layouts](https://www.mintlify.com/docs/organize/pages)
- [Mintlify headings and page anchors](https://www.mintlify.com/docs/create/text)
- [Mintlify content types](https://www.mintlify.com/docs/guides/content-types)
- [Mintlify tutorial and guide templates](https://www.mintlify.com/docs/guides/content-templates)
- Product evidence and scope are recorded in `documentation-plan.md`.
