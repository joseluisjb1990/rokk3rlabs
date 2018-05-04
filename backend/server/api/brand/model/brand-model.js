import mongoose from 'mongoose';

const clothes = {
  brand: {type: String, required: true, trim: true},
  type: {type: String, required: true, trim: true}
}

const _brandSchema = mongoose.Schema(clothes);

_brandSchema.index({brand: 'text', type: 'text'});

export default _brandSchema;
