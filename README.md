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

## E) Zephyr Squad Integration

This project includes a GitHub Copilot skill for interacting with [Zephyr Squad (JIRA Test Management)](https://marketplace.atlassian.com/apps/1014681/zephyr-squad-test-management-for-jira).

### Available Operations

- **Test Steps** - Create, fetch, update, and delete test steps for test issues
- **Executions** - Create and update test executions, search using ZQL
- **Cycles** - Manage test cycles for organizing test executions

### Setup

Add to your `.env` file:

```env
ZEPHYR_ACCESS_KEY=your_zephyr_access_key
ZEPHYR_SECRET_KEY=your_zephyr_secret_key
ZEPHYR_ACCOUNT_ID=your_jira_account_id
JIRA_PROJECT_ID=your_project_id
```

For JWT token generation, see: [SmartBear JWT Authentication Guide](https://support.smartbear.com/zephyr-squad-cloud-v1/docs/en/zephyr-squad-cloud-rest-api/generating-a-jwt-authentication-token-for-zephyr-squad-cloud-api.html)

### API Reference

- [Zephyr Squad Cloud REST API Documentation](https://zephyrsquad.docs.apiary.io/)

### Usage with GitHub Copilot

Ask Copilot:

- "Fetch Zephyr test steps"
- "Create a new test execution in Zephyr Squad"
- "Update Zephyr execution status to PASS"
- "Create a test cycle in Zephyr"
