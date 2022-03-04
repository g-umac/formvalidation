import * as fromFormstate from './formstate.actions';

describe('yFormstates', () => {
  it('should return an action', () => {
    expect(fromFormstate.yFormstates().type).toBe('[Formstate] Y Formstates');
  });
});
