const notes = require('./notes.js')
const yargs = require('yargs')


// Customize Yarg Version 
yargs.version('1.1.0')
// Craete The Add Command 
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
       notes.addNote(argv.title, argv.body)
    }
})
// Craete the Remove Command
yargs.command({
    command: 'remove',
    describe: 'Removing The note',
    builder:{
        describe: 'Note title',
        demandOption: true,
        type: 'string'
    },
    handler:  (argv) => {
        notes.removeNote(argv.title)
    }
})
// Craete the List Command
yargs.command({
    command: 'list',
    describe: 'Listing Out all The Notes',
    handler: () => {
        console.log('Listing Out all The Notes')
    }
})
// Craete the Read Command
yargs.command({
    command: 'read',
    describe: 'Read The note',
    handler: () => {
        console.log('Reading The Note!')
    }
})
// Add, Remove, Read, List

yargs.parse()