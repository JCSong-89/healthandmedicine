export default (id, DB) => {
  let result = 0
  
  for (let i; i < DB.length -1; ++i) {
    if (DB[i].id === id)
      result = i
  }

  return result;
}

