var
  path = require('path');

global.sinon = require('sinon');
global.should = require('should');
global.assert = require('assert');
global._ = require('underscore');
var chai = require('chai');
chai.use(require('sinon-chai'));
global.expect = chai.expect;

global.options = {
  host: 'kairosdb.joola.io',
  port: 8080
};