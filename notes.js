const fs = require('fs')
const getNotes = function() {
    return 'Your notes...'
}

const addNote = function(title, body){
   const notes = loadNotes()
   const duplicateNotes = notes.filter(function(note){
      return note.title === title  
   })

   if(duplicateNotes.length === 0){
        notes.push({
        title:title,
        body:body
      })
       saveNotes(notes)
    console.log(' Title Added!')

   }else{
    console.log('Ops Title Taken!')
   }
 
}
const saveNotes = function(notes){
const dataJSON = JSON.stringify(notes)
   fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch (e){
        return []
    }
}
// Craete Remove Command 
const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter(function(note){
        return note.title !== title
    });
    saveNotes(notesToKeep)
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
}

