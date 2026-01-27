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