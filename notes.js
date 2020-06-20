const fs=require('fs');
const chalk = require('chalk');




const addNote=(title,body)=>{
    const notes=loadNotes();
   const duplicateNotes= notes.filter((note)=>{
      return note.title===title;
   })
   if(duplicateNotes.length===0){
    notes.push({
        title,
        body
    })
    saveNotes(notes);
    console.log('a new note added');
   }
   else{
       console.log('Note title taken')
   }
}


const loadNotes=()=>{
   try {
    const dataBuffer=fs.readFileSync('notes.json');
    const dataJSON= dataBuffer.toString();
    return JSON.parse(dataJSON);   
   } catch (error) {
       return [];
   }
}


const saveNotes=(notes)=>{
      const dataJSON=JSON.stringify(notes);
      fs.writeFileSync('notes.json',dataJSON);
}

const removeNote=(title)=>{
 const notes=loadNotes();
try {
    const index= notes.findIndex(note=>note.title===title) ;
    
    
    if(index!=-1){
        notes.splice(index,1);
        console.log(notes);
        
      
     saveNotes(notes);
     console.log(chalk.bgGreenBright.black('removed!'));
    }
   else{
       console.log(chalk.bgRed.white('Note Not found!'));
       
   }
    
} catch (error) {
    console.log(`error occured ${error}`);
    
}
   
}
const listNotes=()=>{
    const notes=loadNotes();
    if(notes.length>0){
        console.log(chalk.bgWhite.black('Your Notes:'));}
        else{
            console.log(chalk.bgRedBright.white('Notes does not exist!'));
            
        }
        notes.forEach((element,index) => {
            console.log(`${chalk.greenBright(index+1)}: ${chalk.green(element.title)}`);
            
        });
    
    
   
    
}
const readNote=(title)=>{
  const notes=loadNotes();
const note=notes.find(note=>note.title===title);
if(note){
    console.log(`${chalk.bgWhite.black('we found')}: `);
    console.log(`${note.title}: ${note.body}`);
}
else {
    console.log(chalk.bgRedBright.white('Note not found!'));
    
}}


const clearNotes=()=>{
    let notes=loadNotes();
     notes=[];
     saveNotes(notes);
     console.log(chalk.bgGreen.white('Notes removed'));
     
}

module.exports={
    getNotes:getNotes,
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote,
    clearNotes
}