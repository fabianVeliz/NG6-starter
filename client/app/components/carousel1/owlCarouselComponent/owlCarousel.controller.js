class owlCarouselController {
  /*@ngInject*/
  constructor($element, $timeout) {
    let vm = this;

    vm.$postLink = ()  => {
      let slider;
      let defaultSettings = {
        autoPlay: true,
        singleItem:true,
        stopOnHover: true,
        items: 1
      };

      let settings = angular.extend(defaultSettings, vm.settings);

      $timeout( () => {
        slider = $('#carousel-1', $element);
        slider.owlCarousel(settings);
      });

      vm.removeItem = (index) => {
        if (confirm('Are you sure?')) {
          // Here, Send request to the BE
          slider.data('owlCarousel').removeItem(index);
        }
      }
    }

  }
}

export default owlCarouselController;
