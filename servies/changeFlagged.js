import updateFlagged from '../DAO/updateFlagged';

export default async (req, res, next) => {
  try {
    const {id, Flagged} = req.body;
  
    if (!id && !Flagged) {
      return res.status(400).send({message: "NEED AlRAM ID OR FLAGGED INFO"})
    }
  
    const result = await updateFlagged(id, Flagged);

    return res.status(200).send({id, Flagged: result});  
  } catch (error) {
    next(error.message);
  }   
}