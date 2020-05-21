function generateMarkdown(data) {
  return `
# ${data.title}

![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

## Description
  ${data.description}
    
## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Contributing](#contributing)
  * [Test](#tests)
  * [Questions](#questions)
  * [Author](#author)

## Installation
  ${data.install}

## Usage
  ${data.usage}

## License
  ${data.license}

## Contributing
  ${data.contributers}

## Tests
  ${data.tests}

## Questions
    
## Author
  ${data.name}
`;
}

module.exports = generateMarkdown;
