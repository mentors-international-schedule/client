class Carousel {
  constructor(carousel) {
    this.carousel = carousel;
    this.previousBtn = document.querySelector('.previous');
    this.previousBtn.style.zIndex = 50;
    this.nextBtn = document.querySelector('.next');
    this.nextBtn.style.zIndex = 50;
    this.storiesRefs = {
      stories: document.querySelectorAll('.stories')
    };
    this.index = 0;
    this.storiesRefs.stories[this.index].classList.add('stories');
    this.storiesRefs.stories[this.index].classList.remove('stories-display');

    this.nextBtn.addEventListener('click', () => this.next());
    this.previousBtn.addEventListener('click', () => this.previous());
  }
  next() {
    this.index++;
    if (this.index >= this.storiesRefs.stories.length) {
      this.index = 0;
    }
    // TweenMax.from(this.storiesRefs.stories, 0.5, {x: '50px', opacity: '0'});
    // TweenMax.to(this.storiesRefs.stories, 0.5, {x: '0px', opacity: '1'});

    this.storiesRefs.stories.forEach(story => {
      story.style.display = 'none';
    });
    this.storiesRefs.stories[this.index].style.display = 'flex';
    this.storiesRefs.stories[this.index].style.justifyContent = 'space-evenly';
  }
  previous() {
    this.index--;
    if (this.index < 0) {
      this.index = this.storiesRefs.stories.length - 1;
    }
    // TweenMax.from(this.storiesRefs.stories, 0.5, {x: '-50px', opacity: '0'});
    // TweenMax.to(this.storiesRefs.stories, 0.5, {x: '0px', opacity: '1'});
    this.storiesRefs.stories.forEach(story => {
      story.style.display = 'none';
    });
    this.storiesRefs.stories[this.index].style.display = 'flex';
    this.storiesRefs.stories[this.index].style.justifyContent = 'space-evenly';
  }
}

let carousel = document.querySelector('.testimonials');
carousel = new Carousel(carousel);
