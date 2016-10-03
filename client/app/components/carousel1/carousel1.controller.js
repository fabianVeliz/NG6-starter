class Carousel1Controller {
  constructor() {
    this.libraryData = {
      name: 'OWL Carousel',
      link: 'http://owlgraphic.com/owlcarousel/',
      requireJquery: true
    }

    this.collection = [
      {
        title: 'Title 1',
        text: 'Dolor occaecat esse minim minim esse sint eiusmod nulla enim labore cupidatat nulla sint. Consequat veniam ex anim amet ex ad nostrud velit incididunt nostrud et consequat cillum cillum. Ex deserunt dolor adipisicing aliquip mollit quis sit consequat culpa ipsum proident. Dolor occaecat esse minim minim esse sint eiusmod nulla enim labore cupidatat nulla sint. Consequat veniam ex anim amet ex ad nostrud velit incididunt nostrud et consequat cillum cillum. Ex deserunt dolor adipisicing aliquip mollit quis sit consequat culpa ipsum proident.'
      },
      {
        title: 'Title 2',
        text: 'Sint nulla ea sunt labore duis eu minim officia laboris do id ullamco sint.'
      },
      {
        title: 'Title 3',
        text: 'Consequat ea laboris est ad ipsum ipsum cupidatat dolore reprehenderit tempor cupidatat eu excepteur nostrud. Adipisicing cillum et sit sint cupidatat qui consequat aute pariatur eu aliqua incididunt excepteur veniam.'
      }
    ];

    this.settings = { slideSpeed : 1000 }
  }
}

export default Carousel1Controller;
