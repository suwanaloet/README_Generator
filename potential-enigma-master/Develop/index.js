const fs = require('fs');
const inquirer = require('inquirer');
const generateREADME = require('./utils/generateMarkdown.js');



// array of questions for user
const init = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'email',
            message: 'What is your email? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your project name!');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'description',
            message: 'Please add a description for your project (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a description!');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'installation',
            message: 'Please add installation instructions for your project (optional)',
        },

        {
            type: 'input',
            name: 'usage',
            message: 'Please provide instructions and examples for use (optional)',
        },

        {
            type: 'input',
            name: 'credits',
            message: 'Please list your collaborators, if any (optional)',
        },

        {
            type: 'checkbox',
            name: 'license',
            message: 'Please select applicable licenses',
            choices: ["Apache 2.0", "MIT", "ISC", "GNU GPLv3", "GNU GPLv2", "GNU AGPLv3", "GNU LGPLv3", "Mozilla Public License 2.0", "Boost Software License 1.0", "The Unlicense", "BSD 2-Clause", "BSD 3-Clause"],
        },

        {
            type: 'input',
            name: 'tests',
            message: 'Go the extra mile and write tests for your app. Then provide examples on how to run them (optional)',
        },
    ]);
};



// function to write README file


// function call to initialize program
init()
    .then(answers => {
        const answerData = generateREADME(answers);
        console.log(answers);
        fs.writeFile('READMEnode.md', answerData, err => {
            if (err) {
                reject(err);
                return;
            }
            console.log('README.md created!');
        });
    });