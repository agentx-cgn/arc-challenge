const path = require('path');
const fs = require('fs');
const { writeFileSync } = require('fs');

//joining path of directory
const directoryPath = path.join(__dirname, 'training');

const tasks = {}
let counter = 0

//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {

    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }

    //listing all files using forEach
    files.forEach(function (file) {

        // Do whatever you want to do with the file

        const filepath = path.join(__dirname, 'training', file);
        const task = JSON.parse(fs.readFileSync(filepath))
        const taskname = file.split('.')[0]

        // console.log(taskname);

        tasks[taskname] = task

        counter += 1;

    });

    fileTarget = path.join(__dirname, 'training.all.json');
    fs.writeFileSync(fileTarget, JSON.stringify(tasks, function replacer(key, value) {

        if (Array.isArray(value)) {
        //   return JSON.stringify(value) + '\n'; // Converts empty array with string properties into a POJO
          return JSON.stringify(value); // Converts empty array with string properties into a POJO
        }

        return value;

      }, 2) .replace(/\\/g,   '')
            .replace(/\"\[/g, '[')
            .replace(/\]\"/g, ']')
            .replace(/\"\{/g, '{')
            .replace(/\}\"/g, '}')
            .replace(/\[\{\"input\"\:/g, '[{\n      "input":')
            .replace(/\,\{\"input\"\:/g, ',{\n      "input":')
            .replace(/\,\"output\"\:/g,  ',\n      "output":')
        , 'utf8');

    console.log('Done importing', 'training', counter, fileTarget)

});

