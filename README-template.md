# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

<img src="https://github.com/Maria1324/advice-generator/blob/main/images/Screenshot_47.png" alt="Screenshot" style="max-width: 100%;">


### Links

- Solution URL: [github.com/Maria1324/advice-generator](https://github.com/Maria1324/advice-generator)
- Live Site URL: [maria1324.github.io/advice-generator](https://maria1324.github.io/advice-generator/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flex
- Mobile workflow
- JS 

### What I learned
  fetch("https://api.adviceslip.com/advice")
    .then((data) => data.json())
    .then((data) => {
      console.log(data.slip.advice);
      advice.innerHTML = data.slip.advice;
      advice_id.innerHTML = data.slip.id;
    });

## Author
- Website - [Maria1324](https://www.your-site.com)
- Frontend Mentor - [@Maria1324](https://www.frontendmentor.io/profile/yourusername)
