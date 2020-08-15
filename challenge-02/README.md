<h1 align="center">
  <img alt="GoStack" src="temp/reactjs-banner.png"/>
</h1>

<h3 align="center">
  Gostack Challenge 02: React.js concepts
</h3>

<blockquote align="center">“Your only limitation is yourself”!</blockquote>

<p align="center">
  <a href="#rocket-about-the-challenge">About the Challenge</a>&nbsp;&nbsp;&nbsp;
  |&nbsp;&nbsp;&nbsp;<a href="#electric_plug-how-to-use">How to Use</a>
  &nbsp;
  |&nbsp;&nbsp;&nbsp;<a href="#memo-license">License</a>
</p>

## :rocket: About the challenge

In this challenge, you must create create an application with *ReactJS* from scratch using good programming practices, in addition, *create communication with the repository backend* created in [CHALLENGE 02](https://github.com/thiagobonisoficial/gostack-challenges/tree/master/challenge-01) *with Nodejs*.

In this challenge, the following topics were addressed:

- *Webpack and Babel*
- *Componentization*
- *State and Immutability*


### Application Features
- `List the repositories for your API`: You should be able to create a list with the title field of all the repositories that are registered in your API.

- `Adding a repository to your API`: You should be able to add a new item to your API via a button with the text Add and, after creation, you should be able to display its name after registration.

- `Remove a repository from your API`: For each item on your list, you must have a button with the text Remove which, when clicked, will call a function to remove that item from the list of your frontend and your API.


### Testing Specification

In each test, you have a brief description of what the challenge must meet in order to pass the test.

The tests are the following tests:
- `Should be able to add new repository`: For this test to pass, your application must allow a repository to be added to your backend and listed on your frontend within an LI.

- `Should be able to remove repository`: In order for this test to pass, your application must allow the item to be removed from the list by clicking on the remove button that will be inside the LI of the added repository.

## :electric_plug: How to use

So when this project is cloned on your machine, it is necessary to install its modules using the package manager `YARN`...
If you do not have `YARN` properly installed on your machine, [access this link](https://yarnpkg.com/) to download and install...
If you already have `YARN` installed, open `terminal` (linux) or `cmd` (windows) at the root of the project where the `package.json` file is located and run the following command:

```
yarn
```

After that, `YARN` will install all the project dependencies for you...
The second and last step is to start the project, for this I have already prepared a command in the script of the file `package.json`, just just run the following command:

```
yarn start
```

## :memo: License

This project is under the MIT license. See the [LICENSE](LICENSE) for more details..

---

Made with ♥ and the intention of learning through the bootcamp of [Rocketseat](https://rocketseat.com.br/) 👋
