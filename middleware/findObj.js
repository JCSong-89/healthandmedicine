export default (id, DB) => {
  let result = {}

  DB.forEach(element => {
    if (element.id == id) {
      result = element
      }
    }
  );
  
  return result; 
}
