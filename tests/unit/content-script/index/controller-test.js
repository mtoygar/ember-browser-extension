import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | content-script/index', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:content-script/index');
    assert.ok(controller);
  });
});
