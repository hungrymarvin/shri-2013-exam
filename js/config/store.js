// by default, persist application data to localStorage.
require('../vendor/localstorage_adapter');

module.exports = DS.Store.extend({
  adapter: DS.LSAdapter.create({
      namespace: 'shri'
  })
});