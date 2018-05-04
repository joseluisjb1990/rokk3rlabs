import mongoose from 'mongoose';
import Promise from 'bluebird';
import brandSchema from '../model/brand-model';
import _ from 'lodash';

brandSchema.statics.getAll = (query) => {
  return new Promise((resolve, reject) => {
    brand
    .find({ $text : { $search : query } }, { score : { $meta: "textScore" } })
    .sort({ score : { $meta : 'textScore' } })
    .exec(function(err, todos) {
      err ? reject(err)
      : resolve(todos);
    });
  });
}

brandSchema.statics.createNew = (brandInput) => {
    return new Promise((resolve, reject) => {
      if (!_.isObject(brandInput)) {
        return reject(new TypeError('Todo is not a valid object.'));
      }
      var _something = new brand(brandInput);

      _something.save(function(err, saved) {
        err ? reject(err)
        : resolve(saved);
      });
    });
}

brandSchema.statics.removeById = (id) => {

  return new Promise((resolve, reject) => {
    if (!_.isString(id)) {
      return reject(new TypeError('Id is not a valid string.'));
    }

    brand
    .findByIdAndRemove(id)
    .exec(function(err, deleted) {
      err ? reject(err)
      : resolve();
    });
  });
}

const brand = mongoose.model('brand', brandSchema);

export default brand;
