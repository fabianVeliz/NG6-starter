import Carousel1Module from './carousel1'
import Carousel1Controller from './carousel1.controller';
import Carousel1Component from './carousel1.component';
import Carousel1Template from './carousel1.html';

describe('Carousel1', () => {
  let $rootScope, makeController;

  beforeEach(window.module(Carousel1Module));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new Carousel1Controller();
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
      expect(Carousel1Template).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = Carousel1Component;

      it('includes the intended template',() => {
        expect(component.template).to.equal(Carousel1Template);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(Carousel1Controller);
      });
  });
});
