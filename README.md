# Playwright Visual Testing (Wopee.io Examples)

## A) Run in the cloud using [Wopee.io Commander](https://cmd.wopee.io)

- Open [cmd.wopee.io](https://cmd.wopee.io)
- Open existing project or create a new one
- Click on `START TESTING` button

## B) Run in the cloud using GitHub Actions

### Setup (already done if repo created via [cmd.wopee.io](https://cmd.wopee.io))

- Open: _Settings_ tab -> _Secrets & Variables_ -> _Actions_
  - Set `WOPEE_API_KEY` in **Secrets**
  - Set `WOPEE_PROJECT_UUID` in **Variables**

### Run

- **Run Playwright tests** workflow from [_Actions_](/../../actions) tab

## C) Run locally on your machine

### Setup

- Install Node.js
- Install Playwright
- Clone the repo
- Create a `.env` file using `.env.example` as a template

### Run locally using Playwright

- Run `npm run tests`

## D) AIO Tests Integration

This project includes a GitHub Copilot skill for interacting with [AIO Tests (JIRA Test Management)](https://marketplace.atlassian.com/apps/1222843/aio-tests-qa-testing-and-test-management-for-jira).

### Available Operations

- **Fetch test cases** - Retrieve test cases from AIO Tests repository
- **Create test cases** - Create new test cases with title, description, and steps
- **Update test cases** - Modify existing test cases

### Setup

Add to your `.env` file:

```env
AIO_ACCESS_TOKEN=your_aio_api_token
JIRA_PROJECT_ID_OR_KEY=your_project_key
```

### Usage with GitHub Copilot

Ask Copilot:

- "Fetch AIO tests"
- "Create a new test case in AIO Tests"
- "Update AIO test case KAN-TC-1"
