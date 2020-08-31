import DB from '../DB/DB';

export default () => {
  try{
    return DB      
  }catch (err) {
    console.log(err);
    
    return false;
  }
}