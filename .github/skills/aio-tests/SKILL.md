---
name: aio-tests
description: Fetch, create, and update AIO Tests cases via REST API using curl. Includes pagination and markdown table output.
---

# AIO Tests skill

This skill allows you to fetch, create, or update AIO Tests cases (in JIRA project) repository using REST API via simple curl commands.

## When to use

Trigger when user mentions: "fetch AIO tests", "create AIO tests", "update AIO tests", "AIO tests repository", "AIO tests API".
Use this skill to interact with the AIO Tests repository for retrieving, creating, or updating test cases programmatically.

## API reference

The complete API specification is available in the OpenAPI/Swagger file: [openapi.json](.github/skills/aio-tests/openapi.json)

Refer to this file for detailed endpoint definitions, request/response schemas, and available operations.

## How to fetch tests

To fetch tests from the AIO Tests repository, you can use the following curl command:

```bash
AIO_TOKEN="YOUR_AIO_API_TOKEN"
JIRA_PROJECT_ID_OR_KEY="JIRA_PROJECT_ID_OR_KEY"

curl -i -sS \
 -H "Accept: application/json" \
 -H "Authorization: AioAuth ${AIO_TOKEN}" \
  "https://tcms.aiojiraapps.com/aio-tcms/api/v1/project/${JIRA_PROJECT_ID_OR_KEY}/testcase?startAt=0&maxResults=100&needDataInRTF=false"
```

### Fetch cases endpoint

Endpoint (from Swagger):

- `GET /api/v1/project/{jiraProjectId}/testcase`

Query params:

- `startAt` default `0`
- `maxResults` default `100`. If value is less than 10 or more than 100, page size becomes 100.
- `needDataInRTF` optional boolean (default false recommended for smaller payloads)

AIO_API_TOKEN and JIRA_PROJECT_ID_OR_KEY can be found in the `.env` file.
Replace `YOUR_AIO_API_TOKEN` and `JIRA_PROJECT_ID_OR_KEY` with your actual token and project ID or key.

When user does not specify output format, return list of test case names and IDs in markdown table format.
After that table, add information how many test cases were found in total.

## How to create tests

To create a new test case in the AIO Tests repository, use the following curl command:

```bash
AIO_TOKEN="YOUR_AIO_API_TOKEN"
JIRA_PROJECT_ID_OR_KEY="JIRA_PROJECT_ID_OR_KEY"

curl -i -sS -X POST \
 -H "Content-Type: application/json" \
 -H "Accept: application/json" \
 -H "Authorization: AioAuth ${AIO_TOKEN}" \
  -d '{
    "title": "Test case title"
  }' \
  "https://tcms.aiojiraapps.com/aio-tcms/api/v1/project/${JIRA_PROJECT_ID_OR_KEY}/testcase"
```

### Create case endpoint

Endpoint (from Swagger):

- `POST /api/v1/project/{jiraProjectId}/testcase`

Request body (JSON):

- `title` (required) - The title/name of the test case
- `description` (optional) - Description or objective of the test (RTF field)
- `precondition` (optional) - Preconditions for the test case (RTF field)
- `priority` (optional) - Test case priority object (not a simple string)
- `status` (optional) - Test case status object (not a simple string)
- `folder` (optional) - Folder object where the test case should be created
- `ownedByID` (optional) - Jira Account ID of the owner
- `customFields` (optional) - Array of custom field values
- `steps` (optional) - Array of test steps

**CRITICAL:** Use `title` not `name`. The field must be `title` according to the API schema.

**Note:** A quick case can be created by just specifying the `title` field. No other field is mandatory.
Status will default to "Draft" if not specified.

**Working minimal example:**

```bash
curl -X POST \
 -H "Content-Type: application/json" \
 -H "Accept: application/json" \
 -H "Authorization: AioAuth ${AIO_TOKEN}" \
  -d '{"title":"Add 4 products into shopping cart"}' \
  "https://tcms.aiojiraapps.com/aio-tcms/api/v1/project/${JIRA_PROJECT_ID_OR_KEY}/testcase"
```

The response will include the created test case details including its ID and key.

### Common creation errors

1. **Using `name` instead of `title`** → Error: "Mandatory data is missing. Please provide value for Title."
2. **Passing status as string** (e.g., `"status": "Draft"`) → Error: "Cannot construct instance of PublicTestStatusTo"
3. **Passing priority as string** → Similar error as status
4. Complex fields like `status`, `priority`, `folder` require object structures as defined in the OpenAPI schema

## How to update tests

To update an existing test case, use the following curl command:

```bash
AIO_TOKEN="YOUR_AIO_API_TOKEN"
JIRA_PROJECT_ID_OR_KEY="JIRA_PROJECT_ID_OR_KEY"
TEST_CASE_ID="12345"

curl -i -sS -X PUT \
 -H "Content-Type: application/json" \
 -H "Accept: application/json" \
 -H "Authorization: AioAuth ${AIO_TOKEN}" \
  -d '{
    "title": "Updated test case title",
    "description": "Updated description"
  }' \
  "https://tcms.aiojiraapps.com/aio-tcms/api/v1/project/${JIRA_PROJECT_ID_OR_KEY}/testcase/${TEST_CASE_ID}/detail"
```

### Update case endpoint

Endpoint (from Swagger):

- `PUT /api/v1/project/{jiraProjectId}/testcase/{testCaseId}/detail`

Path parameters:

- `testCaseId` (required) - The ID of the test case to update

Request body (JSON) - same fields as create, all optional:

- `title` - Updated test case title
- `description` - Updated description
- `precondition` - Updated preconditions
- `priority` - Updated priority (object)
- `status` - Updated status (object)
- `folder` - Updated folder (object)
- `ownedByID` - Updated owner Jira Account ID
- `customFields` - Updated custom field values
- `steps` - Updated test steps

**Note:** Only include the fields you want to update. Unspecified fields will retain their current values.

The response will include the updated test case details.

## Context and constraints

- Environment variables are in `.env`. Never print the token back to the user.
  - `AIO_TOKEN`
  - `JIRA_PROJECT_ID_OR_KEY`
- The Cases endpoints are defined in Swagger. Use the exact paths and schemas from the Swagger "API Reference".
- **ALWAYS use `title` field for test case name, not `name`**
- For simple field updates, use basic types (string, number)
- For complex fields (status, priority, folder), refer to OpenAPI schema for exact object structure

## Best practices

1. **For quick test creation:** Use only the `title` field
2. **For field names:** Always verify against the OpenAPI schema (`CaseFullDetails` object)
3. **For complex updates:** Consider updating simple fields first, then complex objects separately
4. **Default values:** Status defaults to "Draft", no need to specify for new tests
5. **Error handling:** If you get field-related errors, check the OpenAPI schema for the exact field structure

## Output rules

When the user does not specify output format:

1. **For fetch operations:** Return a markdown table with columns: `ID`, `key`, `title`. Then print `Total fetched: N` and clarify whether it is full total or per-page total based on pagination.
2. **For create operations:** Return a success message with:
   - Created test case key (e.g., "KAN-TC-3")
   - Title
   - Status
   - Version
   - Any other relevant fields from the response
3. **For update operations:** Return a success message confirming the test case was updated with the key and updated fields.
