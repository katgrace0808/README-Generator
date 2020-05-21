const fs = require("fs");
const genMarkdown = require("./utils/generateMarkdown.js")
const inquirer = require("inquirer");

const questions = [
  {
    type: 'input',
    name: 'name',
    message: "What is your name?"
  },
  {
    type: 'input',
    name: 'username',
    message: "What is your Github username?"
  },
  {
    type: 'input',
    name: 'email',
    message: "What is your Github email?"
  },
  {
    type: 'input',
    name: 'title',
    message: "What is the title of your project?"
  },
  {
    type: 'input',
    name: 'description',
    message: "Describe your project."
  },
  {
    type: 'input',
    name: 'install',
    message: "What are the install instructions for your project?",
    default: ['npm i']
  },
  {
    type: 'input',
    name: 'usage',
    message: "What is the usage of your project?"
  },
  {
    type: 'list',
    name: 'license',
    message: "What license are you using?",
    choices: [
      'MIT',
      'ISC',
      'Apache',
      'BSD'
    ]
  },
  {
    type: 'input',
    name: 'contributers',
    message: "Who contributed to your project?"
  },
  {
    type: 'input',
    name: 'tests',
    message: "What tests did you perform?"
  },
];


function writeToFile(fileName, data) {
  // console.log("success");

  fs.writeFile(fileName, data, "utf8", function (err) {
    if (err) throw err;
  });  
  console.log("Success!");
}

function init() {
  inquirer
    .prompt(questions)
    .then(function (data) {
      // console.log(data);
      var fileName = 'README.md';

      // fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {

      let readme = genMarkdown(data);
      writeToFile(fileName, readme);
      
    });

}

init();


// ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

// ## Description
//   ${data.description}

// ## Table of Contents
//   * [Installation](#installation)
//   * [Usage](#usage)
//   * [Credits](#credits)
//   * [License](#license)
//   * [Contributing](#contributing)
//   * [Test](#tests)
//   * [Questions](#questions)
//   * [Author](#author)

// ## Installation
//   ${data.install}

// ## Usage
//   ${data.usage}

// ## License
//   ${data.license}

// ## Contributing
//   ${data.contributers}

// ## Tests
//   ${data.tests}

// ## Questions

// ## Author
//   ${data.name},
//   ${data.username.profilepicture}