class swiperController {
  /*@ngInject*/
  constructor($timeout) {
    this.$timeout = $timeout;
    this.slider = null;
  }

  $postLink = ()  => {
    let defaultSettings = {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      autoplay: 1000,
      autoplayDisableOnInteraction: false
    };

    let settings = angular.extend(defaultSettings, this.settings);

    this.$timeout( () => {
      this.slider = new Swiper('#' + this.sliderId, settings);

      // @TODO: Workaround to stop slider on hover
      $('#' + this.sliderId).hover(this.slider.stopAutoplay, this.slider.startAutoplay);
    });
  }

  removeItem = (index) => {
    if (confirm('Are you sure?')) {
      // Here, Send request to the BE
      this.slider.removeSlide(index);
    }
  }
}

export default swiperController;
