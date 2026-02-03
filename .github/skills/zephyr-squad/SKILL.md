---
name: zephyr-squad
description: Fetch, create, and update Zephyr Squad test cases, executions, and cycles via REST API using curl. Includes JWT authentication and markdown table output.
---

# Zephyr Squad skill

This skill allows you to fetch, create, or update Zephyr Squad test steps, executions, and cycles (in JIRA project) using REST API via simple curl commands.

## When to use

Trigger when user mentions: "fetch Zephyr tests", "create Zephyr test", "update Zephyr test", "Zephyr Squad", "Zephyr API", "Zephyr executions", "Zephyr cycles", "test steps Zephyr".
Use this skill to interact with the Zephyr Squad repository for retrieving, creating, or updating test cases, executions, and cycles programmatically.

## API reference

The complete API documentation is available at: [Zephyr Squad Cloud REST API](https://zephyrsquad.docs.apiary.io/)

For JWT token generation, refer to: [SmartBear JWT Authentication Guide](https://support.smartbear.com/zephyr-squad-cloud-v1/docs/en/zephyr-squad-cloud-rest-api/generating-a-jwt-authentication-token-for-zephyr-squad-cloud-api.html)

## Authentication

Zephyr Squad uses JWT (JSON Web Token) authentication. You need:

- `ZEPHYR_ACCESS_KEY` - Your Zephyr API access key
- `ZEPHYR_SECRET_KEY` - Your Zephyr API secret key
- `ZEPHYR_ACCOUNT_ID` - Your Jira account ID

Generate JWT tokens using the access key, secret key, and the canonical string of the request. For simplicity, you can use pre-generated tokens or libraries to generate them.

**Base URL:** `https://prod-api.zephyr4jiracloud.com/connect/public/rest/api/1.0`

## How to fetch test steps

To fetch test steps for a test issue, use the following curl command:

```bash
ZEPHYR_JWT_TOKEN="YOUR_JWT_TOKEN"
ISSUE_ID="10001"
PROJECT_ID="10000"

curl -i -sS \
 -H "Accept: application/json" \
 -H "Authorization: JWT ${ZEPHYR_JWT_TOKEN}" \
  "https://prod-api.zephyr4jiracloud.com/connect/public/rest/api/1.0/teststep/${ISSUE_ID}?projectId=${PROJECT_ID}"
```

### Fetch test steps endpoint

Endpoint:

- `GET /teststep/{issueId}?projectId={projectId}`

Path parameters:

- `issueId` (required) - The Jira issue ID of the test

Query parameters:

- `projectId` (required) - The Jira project ID

The response returns an array of test steps with fields: `id`, `orderId`, `step`, `data`, `result`.

## How to create test steps

To create a new test step for a test issue:

```bash
ZEPHYR_JWT_TOKEN="YOUR_JWT_TOKEN"
ISSUE_ID="10001"
PROJECT_ID="10000"

curl -i -sS -X POST \
 -H "Content-Type: application/json" \
 -H "Accept: application/json" \
 -H "Authorization: JWT ${ZEPHYR_JWT_TOKEN}" \
  -d '{
    "step": "Navigate to login page",
    "data": "URL: https://example.com/login",
    "result": "Login page is displayed"
  }' \
  "https://prod-api.zephyr4jiracloud.com/connect/public/rest/api/1.0/teststep/${ISSUE_ID}?projectId=${PROJECT_ID}"
```

### Create test step endpoint

Endpoint:

- `POST /teststep/{issueId}?projectId={projectId}`

Request body (JSON):

- `step` (required) - The test step description
- `data` (optional) - Test data for the step
- `result` (optional) - Expected result

**Working minimal example:**

```bash
curl -X POST \
 -H "Content-Type: application/json" \
 -H "Accept: application/json" \
 -H "Authorization: JWT ${ZEPHYR_JWT_TOKEN}" \
  -d '{"step":"Click the submit button"}' \
  "https://prod-api.zephyr4jiracloud.com/connect/public/rest/api/1.0/teststep/${ISSUE_ID}?projectId=${PROJECT_ID}"
```

## How to update test steps

To update an existing test step:

```bash
ZEPHYR_JWT_TOKEN="YOUR_JWT_TOKEN"
ISSUE_ID="10001"
TEST_STEP_ID="12345"

curl -i -sS -X PUT \
 -H "Content-Type: application/json" \
 -H "Accept: application/json" \
 -H "Authorization: JWT ${ZEPHYR_JWT_TOKEN}" \
  -d '{
    "step": "Updated step description",
    "data": "Updated test data",
    "result": "Updated expected result"
  }' \
  "https://prod-api.zephyr4jiracloud.com/connect/public/rest/api/1.0/teststep/${TEST_STEP_ID}?issueId=${ISSUE_ID}"
```

### Update test step endpoint

Endpoint:

- `PUT /teststep/{testStepId}?issueId={issueId}`

Path parameters:

- `testStepId` (required) - The ID of the test step to update

Query parameters:

- `issueId` (required) - The Jira issue ID

Request body (JSON) - all fields optional:

- `step` - Updated step description
- `data` - Updated test data
- `result` - Updated expected result

## How to fetch executions (using ZQL)

To fetch test executions using Zephyr Query Language (ZQL):

```bash
ZEPHYR_JWT_TOKEN="YOUR_JWT_TOKEN"
PROJECT_KEY="PROJ"

curl -i -sS \
 -H "Accept: application/json" \
 -H "Authorization: JWT ${ZEPHYR_JWT_TOKEN}" \
  "https://prod-api.zephyr4jiracloud.com/connect/public/rest/api/1.0/zql/executeSearch?zqlQuery=project%3D${PROJECT_KEY}"
```

### ZQL Search endpoint

Endpoint:

- `GET /zql/executeSearch?zqlQuery={query}`

Common ZQL queries:

- `project=PROJ` - All executions in project
- `project=PROJ AND cycleName="Regression"` - Executions in specific cycle
- `project=PROJ AND executionStatus=PASS` - Passed executions
- `assignee=currentUser()` - Executions assigned to current user

**Note:** URL-encode the ZQL query string.

## How to create executions

To create a new test execution:

```bash
ZEPHYR_JWT_TOKEN="YOUR_JWT_TOKEN"

curl -i -sS -X POST \
 -H "Content-Type: application/json" \
 -H "Accept: application/json" \
 -H "Authorization: JWT ${ZEPHYR_JWT_TOKEN}" \
  -d '{
    "projectId": 10000,
    "issueId": 10001,
    "versionId": -1,
    "cycleId": "ad-hoc",
    "assigneeType": "currentUser"
  }' \
  "https://prod-api.zephyr4jiracloud.com/connect/public/rest/api/1.0/execution"
```

### Create execution endpoint

Endpoint:

- `POST /execution`

Request body (JSON):

- `projectId` (required) - Jira project ID (integer)
- `issueId` (required) - Jira issue ID of the test (integer)
- `versionId` (required) - Version ID (-1 for unscheduled)
- `cycleId` (optional) - Cycle ID or "ad-hoc" for ad-hoc executions
- `folderId` (optional) - Folder ID within the cycle
- `assigneeType` (optional) - "currentUser" or "assignee"
- `assignee` (optional) - Jira account ID if assigneeType is "assignee"

**Working minimal example:**

```bash
curl -X POST \
 -H "Content-Type: application/json" \
 -H "Accept: application/json" \
 -H "Authorization: JWT ${ZEPHYR_JWT_TOKEN}" \
  -d '{"projectId":10000,"issueId":10001,"versionId":-1}' \
  "https://prod-api.zephyr4jiracloud.com/connect/public/rest/api/1.0/execution"
```

## How to update execution status

To update an execution's status:

```bash
ZEPHYR_JWT_TOKEN="YOUR_JWT_TOKEN"
EXECUTION_ID="0001234567890123-abcd1234-1234"

curl -i -sS -X PUT \
 -H "Content-Type: application/json" \
 -H "Accept: application/json" \
 -H "Authorization: JWT ${ZEPHYR_JWT_TOKEN}" \
  -d '{
    "status": {"id": 1}
  }' \
  "https://prod-api.zephyr4jiracloud.com/connect/public/rest/api/1.0/execution/${EXECUTION_ID}"
```

### Update execution endpoint

Endpoint:

- `PUT /execution/{executionId}`

Request body (JSON):

- `status` (object) - Status object with ID
  - `1` = PASS
  - `2` = FAIL
  - `3` = WIP (Work in Progress)
  - `4` = BLOCKED
  - `-1` = UNEXECUTED

## How to manage test cycles

### Fetch cycles

```bash
ZEPHYR_JWT_TOKEN="YOUR_JWT_TOKEN"
PROJECT_ID="10000"
VERSION_ID="-1"

curl -i -sS \
 -H "Accept: application/json" \
 -H "Authorization: JWT ${ZEPHYR_JWT_TOKEN}" \
  "https://prod-api.zephyr4jiracloud.com/connect/public/rest/api/1.0/cycle?projectId=${PROJECT_ID}&versionId=${VERSION_ID}"
```

### Create cycle

```bash
curl -i -sS -X POST \
 -H "Content-Type: application/json" \
 -H "Accept: application/json" \
 -H "Authorization: JWT ${ZEPHYR_JWT_TOKEN}" \
  -d '{
    "name": "Regression Cycle",
    "projectId": 10000,
    "versionId": -1,
    "description": "Weekly regression tests"
  }' \
  "https://prod-api.zephyr4jiracloud.com/connect/public/rest/api/1.0/cycle"
```

### Cycle endpoints

- `GET /cycle?projectId={id}&versionId={id}` - Fetch cycles
- `POST /cycle` - Create cycle
- `PUT /cycle/{cycleId}` - Update cycle
- `DELETE /cycle/{cycleId}` - Delete cycle

Cycle request body fields:

- `name` (required) - Cycle name
- `projectId` (required) - Jira project ID
- `versionId` (required) - Version ID (-1 for unscheduled)
- `description` (optional) - Cycle description
- `build` (optional) - Build number
- `environment` (optional) - Test environment
- `startDate` (optional) - Start date (format: "d/MMM/yy")
- `endDate` (optional) - End date (format: "d/MMM/yy")

## Context and constraints

- Environment variables are in `.env`. Never print the token back to the user.
  - `ZEPHYR_ACCESS_KEY`
  - `ZEPHYR_SECRET_KEY`
  - `ZEPHYR_ACCOUNT_ID`
  - `JIRA_PROJECT_ID`
- **JWT tokens expire** - tokens need to be regenerated periodically
- **Use integer IDs** for `projectId`, `issueId`, `versionId` (not strings)
- **Version ID -1** represents "Unscheduled" version
- **Cycle ID "ad-hoc"** is a special value for ad-hoc executions

## Best practices

1. **For test step management:** Always include the `projectId` query parameter
2. **For executions:** Use ZQL queries to filter and find executions efficiently
3. **For status updates:** Use the numeric status ID, not string names
4. **For cycles:** Create cycles before adding test executions to organize tests
5. **For pagination:** Check response for `totalCount` and use `offset` and `maxRecords` parameters

## Output rules

When the user does not specify output format:

1. **For fetch operations:** Return a markdown table with relevant columns based on resource type:
   - Test steps: `ID`, `Order`, `Step`, `Data`, `Expected Result`
   - Executions: `ID`, `Issue Key`, `Status`, `Cycle`, `Assignee`
   - Cycles: `ID`, `Name`, `Version`, `Start Date`, `End Date`
   Then print `Total fetched: N`.

2. **For create operations:** Return a success message with:
   - Created resource ID
   - Resource type (test step, execution, cycle)
   - Key identifying fields from the response

3. **For update operations:** Return a success message confirming the resource was updated with the ID and updated fields.
