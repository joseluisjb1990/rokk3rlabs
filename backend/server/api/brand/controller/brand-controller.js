import brandDAO from '../dao/brand-dao';

export default class brandController {
  static getAll(req, res) {
    const query = req.query.q;

    brandDAO
      .getAll(query)
      .then(brands => res.status(200).json(brands))
      .catch(error => res.status(400).json(error));
  }

  static createNew(req, res) {
    let _brand = req.body;
    brandDAO
      .createNew(_brand)
      .then(brand => res.status(201).json(brand))
      .catch(error => res.status(400).json(error));
  }

  static removeById(req, res) {
    let _id = req.params.id;

    brandDAO
      .removeById(_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
}
