// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Tests](#tests)
  * [Questions](#questions)
  * [GitHub](#github)

  ## Installation 
  ${data.installation}

  ## Usage
  ${data.usage}
   
  ## License
  This project is licensed under the ${data.license}.

  ## Credits
  ${data.credits}

  ## Tests
  ${data.tests}
  
  ## Questions
  Feel free to reach out at ${data.email}.

  ## GitHub
  https://github.com/${data.username}.
`;
}

module.exports = generateMarkdown; 
