import {updateTitle} from '../middleWare/updateTitle';
import {readAlrams} from '../middleWare/readAlrams';

export default async (req, res, next) => {
  try {
    const data = req.body

    updateTitle({data}, (err) => {    
      if (err) {
        return res.status(404).send('not saved new title');
      }
      const {content} = readAlrams();      
      return res.status(200).send(content)
   });
  } catch (error) {
    next(error.message);
  }
};