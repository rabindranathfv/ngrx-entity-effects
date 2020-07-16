import * as fromEntities from './entities.actions';

describe('loadEntitiess', () => {
  it('should return an action', () => {
    expect(fromEntities.loadEntitiess().type).toBe('[Entities] Load Entitiess');
  });
});
