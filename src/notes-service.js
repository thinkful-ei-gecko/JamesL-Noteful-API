const NotesService = {
  getAllNotes(db) {
    return db
      .select('*')
      .from('notes');
  },
  getNoteById(db, id) {
    return db
      .select('*')
      .from('notes')
      .where('id', id)
      .first();
  },
  insertNote(db, newNote) {
    return db
      .insert(newNote)
      .into('notes')
      .returning('*')
      .then(rows => rows[0])
  },
  deleteNote(db, id) {
    return db
      .from('notes')
      .where({id})
      .delete()
  },
  updateNote(db, id, newNoteFields) {
    return db
      .from('notes')
      .update(newNoteFields)
      .where({id})
  }
}

module.exports = NotesService