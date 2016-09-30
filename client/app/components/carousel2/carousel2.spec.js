import Carousel2Module from './carousel2'
import Carousel2Controller from './carousel2.controller';
import Carousel2Component from './carousel2.component';
import Carousel2Template from './carousel2.html';

describe('Carousel2', () => {
  let $rootScope, makeController;

  beforeEach(window.module(Carousel2Module));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new Carousel2Controller();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(Carousel2Template).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = Carousel2Component;

      it('includes the intended template',() => {
        expect(component.template).to.equal(Carousel2Template);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(Carousel2Controller);
      });
  });
});
