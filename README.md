# Frontend Testing Workshop

## Requirements ⚠️

- [NodeJS](https://nodejs.org) v10 or greater
- [git](https://git-scm.com) v2 or greater
- [npm](https://www.npmjs.com) v6 or greater(or [yarn](https://yarnpkg.com) v1 or greater)

All of thest must be available in your `PATH`. To verify things are setup properly, you can run this:

```sh
$ git --version
$ node --version
$ npm --version
```

## Setup 🔌

After you've made sure to have the correct things (and versions) installed, you should be able to just run a few commands to get set up:

```sh
$ git clone https://github.com/DeathSy/frontend-test-workshop.git
$ cd frontend-testing-workshop
$ npm setup
```

## Quick Check ✅

You can test the installation by starting todo-app in your first terminal

```sh
$ npm run demo
```

In the second terminal you can run our prepeare test suite by running

```sh
# to start running jest
$ npm run test:unit

# to start running cypress
$ npm run cy:open
``` 

## Content

### Testing Basics
||topic|contents|
|:--:|:--:|:--:|
|🔗|Why should we test?||
|🔗|Unit Test vs Integration Test vs e2e Test|

### Basic Cypress

||topic|contents|
|:--:|:--:|:--:|
|🔗|Introduction to Cypress||
|🔗|Setting up cypress||
|🔗|Selector Playground||
|🔗|Basic Assertion||
|🔗|Get deeper in RegEX||
|🔗|How should you structure your test||
|🔗|Fixture||

### Advance Cypress

||topic|contents|
|:--:|:--:|:--:|
|🔗|Testing on modern Frontend||
|🔗|Create Cypress Custom Commands||
|🔗|Visual Testing with Cypress||
|🔗|Cypress CI configuration and Reports with Separate Testing Environment||
|🔗|BDD testing style with Cypress and Cucumber||
