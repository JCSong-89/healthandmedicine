import fs from 'fs';

export function updateTitle(value) {
  const id = value.data.id
  const fileName = `./DB/title[${id}].json`;
  let content = JSON.parse(fs.readFileSync(fileName, 'utf8'));
  
  content = value.data;

  fs.writeFile(`./DB/title[${id}].json`, JSON.stringify(value, null, 2), (err) => {
    if (err) return console.log(err);
  });
};
