import findAll from '../DAO/findAll';

export default async (req, res, next) => {
  try {  
    const result = await findAll()

    if (!result) {
      return res.status(400).send({message: "CANT FIND ALRAM"})
    }

    return res.status(200).send(result);  
  } catch (err) {
    next(err.message);
  }   
}