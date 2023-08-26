# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)

  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

- [Acknowledgments](#acknowledgments)

## Overview

This challenge was created for learning grid, burger menu.

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

!['Desktop'](./design/desktop-screenshot.png)
!['Mobile'](./design/mobile-screenshot.png)

### Links

- Solution URL: [Repo](https://github.com/Maksym-Paselsky/news-homepage-main)
- Live Site URL: [Live URl](https://maksym-paselsky.github.io/news-homepage-main/)

## My process

I started from grid layout and failed. Then I switch to styling every gridd cell separatly and creating layout in process not from the start. I was easier for me. I tried hard to use bem and only usefull properties in ruls to kepp my css short. Then I create burger menu with js and finished with active states.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- SCCS

### What I learned

I learn grid a lot better same for flex box. Learn how to do mobile navigation and how to set overlay, disable scrolling, prio in rules(what goes firts), prio in properties, sccs, nested classes.

I like the naming, not strict bem, because it should be card**info**number, but I think I made it better and rule of thumb works, I see the class I know what it is 👍

```html
<div class="card">
  <img
    src="./assets/images/image-retro-pcs.jpg"
    alt="image-gaming"
    class="card__image"
  />
  <div class="card__info">
    <div class="card__number">01</div>
    <div class="card__header">Reviving Retro PCs</div>
    <div class="card__text">
      What happens when old PCs are given modern upgrades?
    </div>
  </div>
</div>
```

News block was hard to implement, I'm proud of last:child feature, hr element(new thing for me 🎉).

```css
.news {
  display: block;
  padding: 0 1.5rem;
  grid-area: 1 / 3 / 3 /4;
  background-color: hsl(240, 100%, 5%);
  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 80%;
  }
  &__header {
    display: flex;
    margin-top: 2rem;
    color: hsl(35, 77%, 62%);
    font-size: 4rem;
    font-weight: 600;
  }
  &__block {
    display: flex;
    flex-direction: column;
    &__header {
      margin-bottom: 1.5rem;
      font-size: 1.75rem;
      font-weight: 700;
      color: hsl(36, 100%, 99%);
      cursor: pointer;
      &:hover {
        color: hsl(35, 77%, 62%);
      }
    }
    &__text {
      margin-bottom: 2rem;
      font-size: 1.3rem;
      font-weight: 400;
      color: hsl(233, 8%, 60%);
      &:last-child {
        margin-bottom: 0;
      }
    }
    hr {
      border: 0.01rem solid hsl(233, 8%, 60%);
    }
    &:last-child {
      hr {
        display: none;
      }
    }
  }
}
```

I'm proud of all js I'm writing right now🙃

```js
let button = document.getElementById("toggle-button");
let hamIcon = document.getElementById("ham-icon");
let menu = document.getElementById("menu");
let overlay = document.getElementById("overlay");

button.onclick = function () {
  overlay.classList.toggle("hidden");
  menu.classList.toggle("hidden");
  document.body.classList.toggle("no-scroll");

  if (hamIcon.getAttribute("src").endsWith("menu.svg")) {
    hamIcon.src = "./assets/images/icon-menu-close.svg";
  } else {
    hamIcon.src = "./assets/images/icon-menu.svg";
  }
};
```

### Continued development

I need more practise with grid and big layouts, also need to pratise responsivness and use more % instead of rems. I'm going to do similar project to this one but with NextJs.
Also wanted to learn theme switching using sccs conditional rendering.

## Acknowledgments

[Roksolana Veres](https://github.com/RoksolanaVeres) your solution helped me a lot, especially or usage of %.
