import { ResultPageModule } from './result-page.module';

describe('ResultPageModule', () => {
  let resultPageModule: ResultPageModule;

  beforeEach(() => {
    resultPageModule = new ResultPageModule();
  });

  it('should create an instance', () => {
    expect(resultPageModule).toBeTruthy();
  });
});
