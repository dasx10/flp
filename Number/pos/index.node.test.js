import { it, describe } from 'node:test';
import assert from 'node:assert';

import pos from './index.js';

describe('Number positive', () => {
  it('0', () => {
    assert.equal(pos(NaN), 0);
    for (let i = -10; i < 0; i++) {
      assert.equal(pos(i), 0);
    }
  });

  it("value", () => {
    for (let i = 0; i < 10; i++) {
      assert.equal(pos(i), i);
    }
  });
});
