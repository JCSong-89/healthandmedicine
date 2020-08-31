import DB from '../DB/DB';
import findIndex from '../middleware/findIndex';

export default async (data) => {
  try{
    const index = await findIndex(data.id, DB);
    
    DB[index] = data;

    return true
  } catch (err) {
    console.log(err)
    
    return false
  }
}