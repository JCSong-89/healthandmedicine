import findOne from '../DAO/findOne';

export default async (req, res, next) => {
  try {
    const {id} = req.params;
  
    if (!id) {
      return res.status(400).send({message: "NEED AlRAM ID"})
    }
  
    const result = await findOne(id)

    if (!result) {
      return res.status(400).send({message: "CANT FIND ALRAM"})
    }

    return res.status(200).send(result);  
  } catch (error) {
    next(error.message);
  }   
}