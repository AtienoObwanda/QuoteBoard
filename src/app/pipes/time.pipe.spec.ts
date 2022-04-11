import { TimePipe } from './time.pipe';

describe('TimeQuotePipe', () => {
  it('create an instance', () => {
    const pipe = new TimePipe();
    expect(pipe).toBeTruthy();
  });
});
