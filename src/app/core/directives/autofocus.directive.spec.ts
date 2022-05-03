import { AutofocusDirective } from './autofocus.directive';

describe('AutofocusDirective', () => {
  it('should create an instance', () => {
    let elRefMock = {
      nativeElement: document.createElement('div')
    };
    const directive = new AutofocusDirective(elRefMock);
    expect(directive).toBeTruthy();
  });
});
