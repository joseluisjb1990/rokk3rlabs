import BrandRoutes from "../api/brand/route/brand-route";

export default class Routes {
   static init(app, router) {
     BrandRoutes.init(router);

     app.use("/", router);
   }
}
