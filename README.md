# NOTES-APP USING CLI : A NODEJS APPLICATION

## Table of Contents

1. [Introduction](#Introduction)
2. [MODULES_USED](#MODULES_USED)
3. [NODEJS_FILE-SYSTEMS_MODULE](#NODEJS_FILE-SYSTEMS_MODULE)
4. [CHALK_MODULE](#CHALK_MODULE)
5. [YARGS_MODULE](#YARGS_MODULE)

## introduction

<a name="introduction"></a>

NOTE-APP is the nodejs application developed by Aazim Parwaz. The App uses command line interface to perform I/O operations. Yargs module customizes/creates the commands in CLI where read,write,delete,update, and find commands are created to perform the operations. The Input taken from command line is store in _yargs.argv()_ in the form of an object. The object is parsed to get the input queries with the data like _title_ and _note_. Then information is stored in .json file using _FILE SYSTEMS MODULE(fs)_. Queries like reading reads the .json file using _fs_ and logs the information in the console. To make data look pleasent to eyes _CHALK MODULE_ is used. _chalk_ adds color, font,etc to the output text.

## MODULES USED

<a name="MODULES_USED"></a>

1. NODEJS FILE SYSTEMS MODULES
2. CHALK NPM MODULE
3. YARGS NPM MODULE

## NODEJS FILE SYSTEM MODULE

<a name="NODEJS_FILE-SYSTEMS_MODULE"></a>
**About Node.js file system**: To handle file operations like creating, reading, deleting, etc., Node.js provides an inbuilt module called FS (File System). Node.js gives the functionality of file I/O by providing wrappers around the standard POSIX functions. All file system operations can have synchronous and asynchronous forms depending upon user requirements.

#### To use this File System module, use the require() method:

      const fs= require('fs')

#### fs methods used in the app:

- writeFileSync()
- readFileSync()

## CHALK NPM MODULE

<a name="CHALK_MODULE"></a>

Chalk module in Node.js is the third-party module that is used for styling the format of text and allows us to create our own themes in the node.js project.

#### Advantages of Chalk Module:

- It helps to customize the color of the output of the command-line output.
- It helps to improve the quality of the output by providing several color options like for warning message red color and many more.

#### Installing Module:

        npm install chalk

## YARGS MODULE

<a name="YARGS_MODULE"></a>

Yargs module is used for creating your own command-line commands in node.js and helps in generating an elegant user interface. This module makes command-line arguments flexible and easy to use.

## you can use it as shown below in CLI:

#### For adding note

     node app.js add --title="name" --body="aazim parwaz"

#### Deleting note

     node app.js remove --title="c++"

#### Reading note

     node app.js read --title="c++"
