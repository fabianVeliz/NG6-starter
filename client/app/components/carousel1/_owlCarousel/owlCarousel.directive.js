// Just for demo purposes
owlCarousel.$inject = ['$timeout'];

function owlCarousel ($timeout) {
  return {
      scope: {
        collection: '=',
        settings: '=?'
      },
      restrict: 'EA',
      templateUrl: '/app/components/carousel1/owlCarousel/owlCarousel.html',
      link: function (scope, element) {
        scope.removeItem = removeItem;

        let slider;

        let defaultSettings = {
          autoPlay: true,
          singleItem:true,
          stopOnHover: true,
          items: 1
        };

        let settings = angular.extend(defaultSettings, scope.settings);

        $timeout( () => {
          slider = $('#carousel-1', element);
          slider.owlCarousel(settings);
        });

        function removeItem(index) {
          if (confirm('Are you sure?')) {
            // Here, Ssend request to the BE
            slider.data('owlCarousel').removeItem(index);
          }
        }
      }
  };
}

export default owlCarousel;
