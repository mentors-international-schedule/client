class Carousel {
  constructor(carousel) {
    console.log(carousel);
    this.carousel = carousel;
    this.previousBtn = document.querySelector('.previous');
    this.previousBtn.style.zIndex = 50;
    this.nextBtn = document.querySelector('.next');
    this.nextBtn.style.zIndex = 50;
    this.storiesRefs = {
      stories: document.querySelectorAll('.stories')
    };
    console.dir(this);
    this.index = 0;
    this.storiesRefs.stories[this.index].style.display = 'flex';
  }
}

let carousel = document.querySelector('.testimonials');
console.log(carousel);
carousel = new Carousel(carousel);

let index = 0;

let stories = {
  storyList: document.querySelectorAll('.stories')
};

// console.log(stories.storyList[index]);
