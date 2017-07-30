import { MovieCategoryPipe } from './movie-category.pipe';

describe('MovieCategoryPipe', () => {
  it('create an instance', () => {
    const pipe = new MovieCategoryPipe();
    expect(pipe).toBeTruthy();
  });
});
