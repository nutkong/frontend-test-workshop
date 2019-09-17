# React Boilerplate

## Requirements

- node @^10
- codecov project([codecov.io](https://codecov.io))
- cypress dashboard([cypress.io/dashboard](https://www.cypress.io/dashboard/))

## Features
|Feature|Library|
|:-:|:-:|
|Unit Test|jest|
|Integration Test|cypress|
|Bundler|webpack|
|Dev Server|webpack-dev-server|
|JS transpiler| babel|
|CSS-IN-JS|emotion-js|
|linter|eslint|
|Code Style|standard|
|Code formatter|prettier|

## Installation

project setup

```sh
$ npm setup
```

if you wanted to use travis-ci you should configure travis env as below

```env
NETLIFY_PUBLISH_KEY=[your netlify token]
NETLIFY_SITE_ID=[your netlify site_id can be found in]
CYPRESS_RECORD_KEY=[your cypress record key]
```
