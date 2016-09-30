class Carousel1Controller {
  constructor() {
    this.name = 'carousel1';

    this.libData = {
      name: 'angular-carousel',
      url: 'http://revolunet.github.io/angular-carousel',
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

  deleteItem(index) {
    this.items.splice(index, 1);
  }
}

export default Carousel1Controller;
