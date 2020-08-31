import DB from '../DB/DB';
import findObj from '../middleware/findObj';

export default (id) => {
  try{
    const result = findObj(id, DB)
    
    return result
  }catch (err) {
    console.log(err);
    
    return false;
  }
}