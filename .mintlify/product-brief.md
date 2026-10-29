# Galvant product brief

## Description

Galvant helps manufacturing teams investigate their connected business data and build repeatable reporting. Customers ask Scout questions in Chat and use Dash to build and investigate dashboards.

## Primary audience

Confirmed by the user: customers already onboarded to Galvant, with an account, their company's app URL, and access to connected data. Write for business users without assuming SQL or programming knowledge.

## Jobs to be done

1. Open Chat and ask a first question relevant to sales, finance, or production.
2. Explore tables and charts, follow Scout's work through the agent trace and Show logic, use attached reference files, and save repeatable methods as workflows.
3. Create dashboards directly with Dash, use dashboard variables, inspect and customize cards, share access, and export or schedule reports.

## Motivation

Help customers use the product independently, understand what it can analyze, and interpret results within their data coverage and permissions. Save repeated explanations through reusable workflows and dashboards.

## Confirmed writing decisions

- The approved outline is in `drafts/documentation-skeleton.md`.
- The current navigation has 17 pages. Review content sequentially when writing or splitting pages.
- The homepage starts with opening Chat and choosing one Sales, Finance, or Production question. Use native Tabs for these choices. Do not require a generic discovery reply followed by a second "run the first analysis" message.
- Dashboard quickstart follows one business-goal creation, approval, company-sharing, and Monday 09:00 self-email flow. Offer six independent business-area example messages; Dash chooses the visualizations. Keep variables and library management on the other guides.
- Keep individual frontmatter descriptions for SEO. The user approved the single rule in `styles.css` that hides the visible page-header subtitle throughout the site. Start the visible page with its useful introductory paragraph.
- Ask questions with Scout is a clickable parent page with three child guides: Use tables and charts, Agent trace and Show logic, and Give feedback on answers. Use Mintlify's native group root and child directory.
- Use descriptive sidebar labels, including Work with files, Reusable workflows, and Manage conversations. Do not shorten these to Files, Workflows, or Conversations.
- Use agent trace for Scout's recorded work and tool calls. Show logic explains the thought process and steps Scout took to reach its answer. Do not call it a calculation view.
- Keep dictation and clarification within asking questions; keep formats, limits, Excel, and generated-file downloads within Work with files.
- Explain why to create workflows. Begin Manage conversations with a table comparing continuing a discussion, starting a separate chat, and saving a repeatable method as a workflow.
- Reusable workflows follows one Monthly sales review through agreeing the method, saving it privately, approving it, running another month with its actual saved command, and updating future runs to include customer share of sales. The user declined additional explanation of Skip; keep that guidance brief.
- Treat Dashboard variables as a first-class feature, distinct from table row filters. **Use dashboard variables** begins with changing a current view and the actual Dynamic/Static/Apply controls before teaching creation.
- Use Mintlify's built-in components. The description-visibility rule is the only approved custom CSS. Add no other custom CSS, components, or JavaScript without discussing them first.
- Work with files uses native cards, upload steps, separate anchored file-type sections, and accordions for follow-up questions. Keep useful reading limits beside the spreadsheet example; omit byte conversions and the legacy-format lecture.
- The Galvant logo and footer website link open galvant.ai. Do not add a separate Visit Galvant navbar button.
- Put visible, identified placeholders where screenshots, GIFs, or videos are needed. Keep each capture focused on one interaction or outcome. The user will supply those assets.
- Dashboard guides use native galleries, task Tabs, comparison cards, and optional accordions. Show available card types without requiring a card-type choice. Use practical invoice, sales, and completion-rate examples; minor controls stay out of the main path.
- Cover whole-dashboard refresh once. Library management belongs under Build and manage dashboards, outside Quickstart.
- Saving Chat results to a dashboard is a later guide. Standalone Alerts, other product modules, API reference, and infrastructure are outside this release.

## Evidence boundaries

Check the current `takt-platform` source for UI labels, defaults, limits, and permissions. Do not claim live customer verification. Examples must adapt to the customer's available data. Stop and ask the user if a required fact cannot be verified or the scope needs to change.
