// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
   ${data.description}
  ## Table of Contents:
  * [Installation](#Installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${data.license}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
    ${data.contactInfo}
   * [${data.username}](https://github.com/${data.username})
   * [email](${data.email})
`;
}

module.exports = generateMarkdown;
