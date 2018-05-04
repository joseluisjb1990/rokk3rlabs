import brandController from '../controller/brand-controller';

export default class brandRoutes {
  static init(router) {
    router
      .route('/api/brand')
      .get(brandController.getAll)
      .post(brandController.createNew);
  }
}
