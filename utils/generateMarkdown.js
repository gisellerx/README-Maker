// Creates a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
   
  if(license==="MIT"){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else if(license==="No License"){
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
  }
  else if(license==="Apache"){
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  else if(license==="IBM"){
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
  }

}

// Creates a function that returns the license link
function renderLicenseLink(license) {
  if (license==="MIT") {
    return ``
  }
  else if (license==="No License") {
    return `http://unlicense.org/`
  }
  else if (license==="Apache") {
    return `https://opensource.org/licenses/Apache-2.0`
  }
  else if (license==="IBM") {
    return `https://opensource.org/licenses/IPL-1.0`
  }
}

// Create a function that returns the license section of README
function renderLicenseSection(license) {
  if (license==="MIT") {
    return `https://opensource.org/licenses/MIT 

    THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
  }
  else if (license==="No License") {
    return `http://unlicense.org/ 
    
    No license.`
  }
  else if (license==="Apache") {
    return `https://opensource.org/licenses/Apache-2.0
    
    Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.

    You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.

    See the License for the specific language governing permissions and
    limitations under the License.`
  }
  else if (license==="IBM") {
    return `https://opensource.org/licenses/IPL-1.0
    
    Copyright [yyyy] [name of copyright owner]

    Licensed under the IBM License, You may not use this file except in compliance with the License.`
  }
}

// CreateS a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

    ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribute](#contribute)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${renderLicenseSection(data.license)}

  ## Contribute

  ${data.contribute}

  ## Tests

  ${data.test}

  ## Questions
  <ul>
    <li> <a href="https://github.com/${data.username}">Github Profile</a> </li>
    <li> <a href="mailto:${data.email}">Email Me</a> </li>
  </ul>

`;
}

module.exports = generateMarkdown;
