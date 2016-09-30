class Carousel2Controller {
  constructor() {
    this.name = 'carousel2';

    this.libData = {
      name: 'ui.swiper',
      url: 'http://nebulr.github.io/ui-swiper/',
      requireJquery: false
    };

    // Fake data
    this.items = [
      {
        id:1,
        title: 'Item 1',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
      },
      {
        id:2,
        title: 'Item 2',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
      },
      {
        id:3,
        title: 'Item 3',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
      },
      {
        id:4,
        title: 'Item 4',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
      },
      {
        id:5,
        title: 'Item 5',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
      },
    ];
  }
}

export default Carousel2Controller;
