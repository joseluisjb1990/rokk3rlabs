const mongoose = require('mongoose');
const expect = require('chai').expect;

const clothesDAO = require(process.cwd() + '/server/api/clothes/dao/clothes-dao');
const setupMongoose = require('../../_helpers/db').setupMongoose;



describe('clothesDAO', () => {
  before(() => {
    setupMongoose(mongoose);
  });

  afterEach(() => {
    clothesDAO.remove();
  })

  describe('getAll', () => {

  })

  describe('createNew', () => {

  })

  describe('removeById', () => {

  })
})
