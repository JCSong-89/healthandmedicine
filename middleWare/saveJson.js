import fs from 'fs'

export function saveToFolder(Title, callback) {
  const name = Title.id
  fs.writeFile(`./DB/title[${name}].json`, JSON.stringify(Title), callback);
}
  