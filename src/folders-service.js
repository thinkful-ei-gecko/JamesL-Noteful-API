const FoldersService = {
  getAllFolders(db) {
    return db
      .from('folders_table')
      .select('*')
  },
  getFolderById(db, id) {
    return db
      .from('folders_table')
      .select('*')
      .where('id', id)
      .first();
  },
  insertFolder (db, newFolder) {
    return db
      .insert(newFolder)
      .into('folders_table')
      .returning('*')
      .then(rows => rows[0])
  },
  deleteFolder(db, id) {
    return db
      .from('folders_table')
      .where('id', id)
      .delete()
  },
  updateFolder(db, id, newFolderFields) {
    return db
      .from('folders_table')
      .update(newFolderFields)
      .where('id', id)
  }
}

module.exports = FoldersService