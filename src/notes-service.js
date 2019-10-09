const NotesService = {
  getAllNotes(db) {
    return db
      .select('*')
      .from('notes_table');
  },
  getNoteById(db, id) {
    return db
      .select('*')
      .from('notes_table')
      .where('id', id)
      .first();
  },
  insertNote(db, newNote) {
    return db
      .insert(newNote)
      .into('notes_table')
      .returning('*')
      .then(rows => rows[0])
  },
  deleteNote(db, id) {
    return db
      .from('notes_table')
      .where('id', id)
      .delete()
  },
  updateNote(db, id, newNoteFields) {
    return db
      .from('notes_table')
      .update(newNoteFields)
      .where('id', id)
  }
}

module.exports = NotesService