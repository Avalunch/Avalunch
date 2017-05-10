import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { _ } from 'meteor/underscore';

class BaseCollection {

  constructor(type, schema) {
    this._type = type;
    this._collectionName = `${type}Collection`;
    this._collection = new Mongo.Collection(`${type}Collection`);
    this._schema = schema;
    this._collection.attachSchema(this._schema);
  }

  getSchema() {
    return this._schema;
  }

  publish() {
    if (Meteor.isServer) {
      Meteor.publish(this._collectionName, () => this._collection.find());
    }
  }

  subscribe() {
    if (Meteor.isClient) {
      Meteor.subscribe(this._collectionName);
    }
  }

  findDoc(name) {
    const doc = (
    this._collection.findOne(name) ||
    this._collection.findOne({ name }) ||
    this._collection.findOne({ profile: name }) ||
    this._collection.findOne({ _id: name }));
    if (!doc) {
      throw new Meteor.Error(`${name} is not a defined ${this._type}`);
    }
    return doc;
  }

  getPublicationName() {
    return this._collectionName;
  }

  isDefined(name) {
    return (
    !!this._collection.findOne(name) ||
    !!this._collection.findOne({ name }) ||
    !!this._collection.findOne({ profile: name }) ||
    !!this._collection.findOne({ _id: name }));
  }

  update(selector, modifier) {
    const theSelector = (typeof selector === 'undefined') ? {} : selector;
    this._collection.update(theSelector, modifier);
    return true;
  }
}

export default BaseCollection;
