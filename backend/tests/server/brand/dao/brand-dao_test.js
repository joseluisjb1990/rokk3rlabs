const mongoose = require('mongoose');
const expect = require('chai').expect;

const brandDAO = require(process.cwd() + '/server/api/brand/dao/brand-dao');
const setupMongoose = require('../../_helpers/db').setupMongoose;



describe('brandDAO', () => {
  before(() => {
    setupMongoose(mongoose);
  });

  afterEach(() => {
    brandDAO.remove();
  })

  describe('getAll', () => {

  })

  describe('createNew', () => {

  })

  describe('removeById', () => {

  })
})
