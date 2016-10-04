class swiperController {
  /*@ngInject*/
  constructor($element, $timeout) {
    let vm = this;

    vm.$postLink = ()  => {
      let slider;
      let defaultSettings = {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 1000,
        autoplayDisableOnInteraction: false
      };

      let settings = angular.extend(defaultSettings, vm.settings);

      $timeout( () => {
        slider = new Swiper('#' + vm.sliderId, settings);

        // @TODO: Workaround to stop slider on
        $('#' + vm.sliderId).hover(slider.stopAutoplay, slider.startAutoplay);
      });

      vm.removeItem = (index) => {
        if (confirm('Are you sure?')) {
          // Here, Send request to the BE
          slider.removeSlide(index);
        }
      }
    }

  }
}

export default swiperController;
