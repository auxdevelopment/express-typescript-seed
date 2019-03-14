import { Router } from 'express';

const router = Router();

routes.get('/', (req, res) => {
  res.status(200).json({ 'status': 'up' });
});

// router.use(someRoute);

export = routes;
