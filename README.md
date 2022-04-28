<div align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" alt="logo" width="150" />
  <h1>Todo-app project</h1>
  <p>
    Basic Todo-app made with React for learning purposes.
  </p>
<!-- Badges -->
<p>
  <a href="https://github.com/enzom-uy/todoapp/commits">
    <img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/y/enzom-uy/todoapp">
  </a>
  <a href="https://github.com/enzom-uy/todoapp/commits">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/enzom-uy/todoapp" /> 
  </a>
</p>
<h4>
    <a href="https://enzom-uy.github.io/todoapp//">Demo</a>
  </h4>
</div>

<br />

<!-- Table of Contents -->

# :notebook_with_decorative_cover: Table of Contents

- [:notebook_with_decorative_cover: Table of Contents](#notebook_with_decorative_cover-table-of-contents)
  - [:star2: About the project](#star2-about-the-project)
    - [:camera: Screenshots](#camera-screenshots)
  - [:space_invader: Technologies](#space_invader-technologies)
  - [Starting the project](#starting-the-project)
    - [Prerequirements](#prerequirements)
    - [:running: Running the project locally](#running-running-the-project-locally)
<!-- About the Project -->

## :star2: About the project

<!-- Screenshots -->

### :camera: Screenshots

<div align="center"> 
  <img src="https://thumbs.gfycat.com/HandsomeBouncyBabirusa-size_restricted.gif" alt="Demo gif" />
</div>

<!-- TechStack -->

## :space_invader: Technologies

* [React.js](https://reactjs.org/)
  * React is the Javascript framework that I chose for this project, since it's currently the one that interests me the most.
* [Create React App](https://create-react-app.dev/)
  * The project environment was built using Create-react-app.
* [Firebase](https://firebase.google.com/)
  * Google's Firebase allowed me to use Firestore as a free and easy-to-use database.
* [Chakra UI](https://chakra-ui.com/), [Chakra UI Icons](https://chakra-ui.com/icons/)
  * I chose to use a Component Library like Chakra UI because it allowed me to be more focused on my code, instead of styling. It increased my development time, and it's the one that I find more easy to customize if I need to.
  * Chakra needs [Framer-motion](https://www.framer.com/motion/) to work 
* [uuid](https://www.npmjs.com/package/uuid)
  *  I used uuid to generate unique IDs for each task. At the moment of making the web app, React 18 was not officially released yet, so I couln't use the new useId() hook.
<!-- Getting Started -->

## Starting the project.

<!-- Prerequisites -->

### Prerequirements

This project uses either yarn or npm as dependency/package manager. You should have npm installed if you already have Node. If you choose to use yarn, run the next command to install it:

```bash
 npm i -g yarn
```

<!-- Run Locally -->

### :running: Running the project locally

Clone the project:

```bash
  git clone https://github.com/enzom-uy/todoapp.git
```

Go to the project directory:

```bash
  cd todoapp
```

Install dependencies:

```bash
# with yarn:
  yarn
# with npm:
  npm install
```

Start the development server:

```bash
# with yarn:
  yarn start
# with npm:
  npm start
```
