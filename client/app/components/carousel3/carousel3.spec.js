import Carousel3Module from './carousel3'
import Carousel3Controller from './carousel3.controller';
import Carousel3Component from './carousel3.component';
import Carousel3Template from './carousel3.html';

describe('Carousel3', () => {
  let $rootScope, makeController;

  beforeEach(window.module(Carousel3Module));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new Carousel3Controller();
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
      expect(Carousel3Template).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = Carousel3Component;

      it('includes the intended template',() => {
        expect(component.template).to.equal(Carousel3Template);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(Carousel3Controller);
      });
  });
});
