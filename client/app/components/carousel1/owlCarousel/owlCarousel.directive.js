// Just for demo purposes
owlCarousel.$inject = ['$timeout'];

function owlCarousel ($timeout) {
  return {
      scope: {
        collection: '='
      },
      restrict: 'EA',
      templateUrl: '/app/components/carousel1/owlCarousel/owlCarousel.html',
      link: function (scope, element) {
        let slider;

        scope.removeItem = removeItem;

        const carouselConfig = {
          autoPlay: true,
          slideSpeed : 300,
          paginationSpeed : 400,
          singleItem:true,
          stopOnHover: true,
          items: 1
        };

        $timeout( () => {
          slider = $('#carousel-1');
          slider.owlCarousel(carouselConfig);
        });

        function removeItem(index) {
          if (confirm('Are you sure?')) {
            // Send request to the BE
            slider.data('owlCarousel').removeItem(index);
          }
        }
      }
  };
}

export default owlCarousel;
