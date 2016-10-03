// Just for demo purposes
swiper.$inject = ['$timeout'];

function swiper ($timeout) {
  return {
      scope: {
        collection: '=',
        settings: '=?'
      },
      restrict: 'EA',
      templateUrl: '/app/components/carousel2/swiper/swiper.html',
      link: function (scope, element) {
        scope.removeItem = removeItem;

        let slider;
        let defaultSettings = {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          autoplay: 1000,
          autoplayDisableOnInteraction: false
        };

        let settings = angular.extend(defaultSettings, scope.settings);

        $timeout( () => {
          slider = new Swiper('.swiper-container', settings);

          // @TODO: Workaround to stop slider on
          $('.swiper-container').hover(() => {
            slider.stopAutoplay();
          }, () => {
            slider.startAutoplay();
          });
        });


        ///////////////

        function removeItem(index) {
          if (confirm('Are you sure?')) {
            // Here, send request to the BE
            slider.removeSlide(index);
          }
        }
      }
  };
}

export default swiper;
