import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) =>
  response.json({
    message: 'Meu server Express, Typescript e ESLint!',
  }),
);

export default routes;
