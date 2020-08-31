import updateAlram from '../DAO/updateAlram';

/* 보통 업데이트를 할 때에 클라이언트에서 미리 건네준 json을 수정한 상태로 다시 되돌려 받아 작업하는 방법과
   하나씩 받아서 넣는 방법이 있을 텐데 전부 되돌려 받는 것을 기준으로 작성하겠습니다.*/
export default async (req, res, next) => {
  try {
    if (
      !req.body.id &&
      !req.body.Title &&
      !req.body.Memo &&
      !req.body.URL &&
      !req.body['Remind me on a day'] &&
      !req.body.Repeat &&
      !req.body.Flagged &&
      !req.body.Priority &&
      !req.body['My Lists']
    ) {
      return res.status(400).send({message: "NEED ALL INFO"})
    }

    const alramInfo = {    
      "id": req.body.id,
      "Title": req.body.Title,
      "Memo": req.body.Memo,
      "URL": req.body.URL,
      "Remind me on a day": req.body['Remind me on a day'],
      "Repeat": req.body.Repeat,
      "Flagged": req.body.Flagged,
      "Priority": req.body.Priority,
      "My Lists": req.body['My Lists']     
    }
    const result = await updateAlram(alramInfo)
   
    if (!result) {
      return res.status(400).send({message: "FAIL UPDATE ALRAM INFO"})
    }

    return res.status(200).send({message: "UPDATED ALRAM INFO"})
  } catch (error) {
    next(error.message);
  }
};