import { FullnamePipe } from './fullname.pipe';

describe('MajusculePipe', () => {
  it('create an instance', () => {
    const pipe = new FullnamePipe();
    expect(pipe).toBeTruthy();
  });
});
