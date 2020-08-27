import fs from 'fs';
import path from 'path';

export function readAlrams () {
  const dir = path.join(__dirname, "../DB/*.json")
  const {all_alram} = JSON.parse(fs.readFileSync(dir), 'utf8');
  return all_alram
}