const chalk = require('chalk');
const yargs= require('yargs');
const fs= require('fs');
const { argv } = require('process');
const notes=require('./notes');


// add, remove , read ,list...

//create add command
yargs.command({
    command:'add',
    builder:{
        title:{
        describe:'Note title',
        type:'string',
        demandOption:true
        
        },
        body:{
            describe:'body of title',
            type:'string',
            demandOption:true
        }
    },
    describe:'add a new note',
    handler:(argv)=>{
        notes.addNote(argv.title,argv.body);
    
    }
    
});
// create remove command
yargs.command({
    command:'remove',
    describe:'removing a note',
    type:'string',
    handler:(argv)=>{
        notes.removeNote(argv.title);
    }
    
});
//create list command
yargs.command({
    command:'list',
    describe:'list the notes!',
    type:'string',
    handler:()=>{
        
        
       notes.listNotes();
    }
    
});

// setting up read command
yargs.command({
    command:'read',
    describe:'reading the notes!',
    handler:(argv)=>{
     notes.readNote(argv.title);

    }
    
});

yargs.command({
    command:'clear',
    describe:'empty the notes data',
    handler:()=>notes.clearNotes()
})

yargs.parse();
//console.log(yargs.argv);


