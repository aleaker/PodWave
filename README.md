# PodWave

Deployed site: https://podwave.netlify.app/

This README file describes the architecture, structure, test coverage, how to download, run the project in development mode, and build and run the project in production mode.

### Table of ContentsTable of Contents

1. [architecture](#architecture)
2. [structure](#structure)
3. [test coverage](#test-coverage)
4. [downloading the project](#downloading-the-project)
5. [running the project in development mode](#running-the-project-in-development-mode)
6. [building and running the project in production mode](#building-and-running-the-in-production-mode)

## Architecture

This React project follows a modular architecture based on components, which promotes code reusability and maintainability. The main components are organized as follows:

**UI Components**: These are the reusable components that represent the visual elements of the application.
**Containers:** These components are responsible for managing the application state and connecting the UI components to the business logic.

#### Structure
The components folder contains subfolders to organize the components of each view. Within each component folder we can find a jsx file and a styles file.
The containers folder contains each page container with the respective test.js file.
The project structure is organized as follows:
```json
├── public
│   ├── index.html
│   └── favicon.ico
├── src
│   ├── components
│   │   ├── general
│   │   │   ├── DisplayCard
│   │   │   │   ├── DisplayCard.jsx
│   │   │   │   ├── DisplayCard.styles.js
│   │   ├── landing
│   │   ├── layouts
│   │   └── podcast
│   ├── containers
│   │   ├── App
│   │   │   ├── App.jsx
│   │   │   ├── App.test.js
│   │   ├── Landing
│   │   └── Podcast
│   ├── constants
│   ├── util
│   ├── mocks
│   ├── theme
│   ├── index.js
├── .gitignore
├── setupTests.js
├── README.dm
├── .eslintrc.json
├── package.json
└── package-lock.json
```

## Test Coverage
This project uses Jest, Mock Service Worker and React Testing Library for testing. Test files are located inside the corresponding containers folders. Test coverage is set up to cover most critical parts of the application with integration tests.

Run the tests with the following command:
`npm run test`

## Downloading the Project

To download the project locally, follow these steps:

1. Clone the repository:
`git clone https://github.com/aleaker/PodWave.git`
2. Change into the project directory:
`cd PodWave`
3. Install the required dependencies:
`npm install`

## Running the Project in Development Mode

To run the project in development mode:
`npm start`

Now, the application should be running on http://localhost:3000.

## Building and Running the Project in Production Mode

To build the project for production, run the following command:
`npm run build`

This command generates an optimized production build of the application in the build directory.

To serve the production build locally, you can use a package like serve. Install it globally:
`npm install -g serve`

Then, serve the production build:
`serve -s build`

Now, the application should be running on http://localhost:5000 or another available port.
