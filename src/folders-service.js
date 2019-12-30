const FoldersService = {
  getAllFolders(db) {
    return db
      .from('folders')
      .select('*')
  },
  getFolderById(db, id) {
    return db
      .from('folders')
      .select('*')
      .where('id', id)
      .first();
  },
  insertFolder (db, newFolder) {
    return db
      .insert(newFolder)
      .into('folders')
      .returning('*')
      .then(rows => rows[0])
  },
  deleteFolder(db, id) {
    return db
      .from('folders')
      .where({id})
      .delete()
  },
  updateFolder(db, id, newFolderFields) {
    return db
      .from('folders')
      .update(newFolderFields)
      .where({id})
  }
}

module.exports = FoldersService