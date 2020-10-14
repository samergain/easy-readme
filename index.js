let generator = require("./utils/generateMarkdown.js")
let inquirer = require("inquirer");
let fs = require('fs');

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter your project title:"
    },
    {
        type: "input",
        name: "description",
        message: "Enter a description for your project:"
    },
    {
        type: "input",
        name: "installation",
        message: "Enter installation instructions:"
    },
    {
        type: "input",
        name: "usage",
        message: "Enter usage instructions:"
    },
    {
        type: "input",
        name: "contributing",
        message: "Enter contributing instructions:"
    },
    {
        type: "input",
        name: "tests",
        message: "Enter tests applied:"
    },
    {
        type: "input",
        name: "contactInfo",
        message: "Enter instructions on how to contact you:"
    },
    {
        type: "input",
        name: "username",
        message: "Enter your GitHub username:"
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email:"
    },
    {
        type: "list",
        message: "What is your license type?",
        name: "license",
        choices: [
          "None",
          "Apache License 2.0",
          "GNU General Public License v3.0",
          "MIT License",
          "BSD 2-Clause License",
          "BSD 3-Clause Licesne",
          "Boost Software License 1.0",
          "Creative Commons Zero v1.0 Universal",
          "Mozilla Public License 2.0",
          "The Unlicense"
        ]
      }
    
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=> (err) ? console.log(err) : console.log("Done!"));
}

// function to initialize program
function init() {
inquirer.prompt(questions).then((data) => {
console.log(generator(data));
let filename = data.title.toLowerCase().split(' ').join('') + ".md";
let initReadme = generator(data)
writeToFile(filename, initReadme);  
});

}

// function call to initialize program
init();
