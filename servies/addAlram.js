import createTitle from '../DAO/createTitle';

export default async (req, res, next) => {
  try {
    const data = {
      Title: req.body.Title}
   
    if (!data.Title) {
      return res.status(400).send({message: 'NEED TITLE DATA'});
    }
        
    const ranNum = Math.floor(Math.random() * Math.floor(100));
    const id = {
      id: ranNum.toString() + data.Title.charCodeAt()
    };   
    const newTitle = Object.assign({}, id, data);
    const result = createTitle(newTitle)

    if (!result) {
      return res.status(400).send({message: "FAIL CREATE NEW TITLE"})
    }
    
    return res.status(201).send({message: "CREATED NEW TITLE"})
  } catch (error) {
    next(error.message);
  }
};

