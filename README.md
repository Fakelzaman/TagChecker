# README #

## What is this repository for? ##
The Repository is to demonstrate some simple nodejs skills by creating a program that checks a paragraph of text to see if it has valid tag formatting

### Tag Examples ###
Typically every tag has an opening tag of the form <TAG> and a closing tag of the form </TAG>, so that portions of text can be bracketed as above. Tags can then be combined to achieve more than one effect on a particular piece of text simply by nesting them properly, for instance:<CENTER><B>This text is centred and in boldface</B></CENTER>

This program takes a paragraph of text and returns whether or not the Tags are valid or not.

If the paragraph is correctly tagged then the output is “Correctly tagged paragraph”

Otherwise a message indicating which tag is causing the error will respond to you.

## How do I get set up? ##

### Summary of set up ###
Ensure node and npm is installed on your machine:
https://nodejs.org/en/

Clone the repository to your directory and Open a terminal and navigate to the project
Run the folling command to install dependencies
`npm install`

and finally run
`npm start`
to run the function in the terminal.

The terminal will then ask for you to paste in the text to use.

### Running Tests ###
Jest is used for unit testing. To run the tests simply use command `npm test`

### Code Coverage ###
In order to commit changes, all new changes must have 80% code coverage. This can be done by providing a jest test.js file in the same location as the edited file. ie index.js = index.test.js
