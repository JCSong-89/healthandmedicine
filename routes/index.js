import addAlram from './routers/addAlram';
import alram from './routers/alram';
import allAlrams from './routers/allAlrams'

export default (app) => {
  const router = app;
  
  router.use('/newTitle', addAlram);
  router.use('/alram', alram);
  router.use('/', allAlrams);
};
