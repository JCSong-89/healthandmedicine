import DB from '../DB/DB';

// 실제 DB를 쓴다고 생각하고 작성하겠습니다.

export default async (data) => {
  /* async-await을 썼기 때문에 reject이 날 경우느 try - catch로 잡아내거나 해당 함수를 써야 하기 때문에 try-catch로 작업합니다.
     본래 DB는 동기적 처리만 가능하여 async-await으로 테스트큐에서 멀티스레드로 넘겨서 작업해야 하는데, JSON 배열 특성상 PUSH로 대체했습니다만
     본래라면 await ORM펑션 또는 Mysql(SQL문)으로 처리했을것 입니다.*/ 
  try{
    DB.push(data)
    console.log(DB)
    return true
  } catch (err) {
    console.log(err)
    
    return false
  }
}

