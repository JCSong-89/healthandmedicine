import DB from '../DB/DB';
import findIndex from '../middleware/findIndex';

export default async (id, Flagged) => {
  try{
    const index = await findIndex(id, DB);
    
    DB[index].Flagged = !Flagged;

    return DB[index].Flagged 
  } catch (err) {
    console.log(err)
    
    return false
  }
}


