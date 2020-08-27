import {saveToFolder} from '../middleWare/saveJson';
import {readAlrams} from '../middleWare/readAlrams';

export default async (req, res, next) => {
  try {
    const ranNum = Math.floor(Math.random() * Math.floor(100));
    const Title = {
      Title: req.body.Title
    };
    const id = {
      id: ranNum.toString() + req.body.Title
    };
    const newTitle = Object.assign({}, id, Title);
    
    saveToFolder(newTitle, (err) => {    
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

