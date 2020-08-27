import addAlram from './routers/addAlrams';
import detailAlram from './routers/detailAlram';

export default (app) => {
  const router = app;
  
  router.use('/addAlram', addAlram);
  router.use('/detailAlram', detailAlram);
};
