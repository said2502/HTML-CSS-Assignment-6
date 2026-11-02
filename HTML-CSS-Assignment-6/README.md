# Assignment 6 — jQuery (Selectors, Effects, Animations)

**Student:** Sayed Sanaullah Sadat  
**Group:** IT 2502  
**Course:** Web Technologies — Front-End Development

## Project overview

This project is an interactive personal portfolio built with HTML, CSS, JavaScript, and jQuery. It demonstrates jQuery selectors, text and CSS manipulation, visibility effects, fading, sliding, DOM manipulation, attribute changes, live form interaction, and animations.

## Technologies

- HTML5
- CSS3 (responsive layout and light/dark themes)
- JavaScript
- jQuery 3.7.1 (loaded from the official jQuery CDN)

## Project structure

```text
HTML-CSS-Assignment-6/
├── index.html
├── style.css
├── script.js
├── images/
│   ├── profile.svg
│   └── hobby.svg
├── screenshots/
└── README.md
```

## Assignment tasks

### Part 1 — Getting Started with jQuery

**Task 0 — Setup**

- Loads jQuery 3.7.1 from the official CDN.
- Uses `$(document).ready(function () { ... })`.
- Prints `jQuery is ready!` in the browser console.

**Task 1 — Selectors & CSS**

- Demonstrates tag (`$("body")`), ID (`$("#greeting")`), and class (`$(".headline")`) selectors.
- Changes text with `.text()` and styling with `.css()`.
- Includes Light mode and Dark mode buttons.

### Part 2 — jQuery Effects

**Task 2 — Visibility Methods**

- Includes an About Me section, current status, and fun facts.
- Uses `.hide()`, `.show()`, and `.toggle()`.

**Task 3 — Fade Methods**

- Displays two local SVG illustrations in a gallery.
- Uses `.fadeIn()`, `.fadeOut()`, and `.fadeToggle()`.

**Task 4 — Slide Methods**

- Includes three clickable headings and collapsible information panels.
- Demonstrates `.slideDown()`, `.slideToggle()`, and `.slideUp()`.

### Part 3 — DOM Manipulation with jQuery

**Task 5 — Add & Remove Elements**

- Starts with four technical skills.
- Uses `.append()`, `.prepend()`, and `.remove()`.
- Prevents empty entries and displays a helpful message.

**Task 6 — Modifying Attributes**

- Includes a GitHub link.
- Changes the link destination and visible label with `.attr()`.

**Task 7 — Form Interaction**

- Includes Name and Email fields.
- Reads live values with `.val()` and displays them with `.text()`.

### Part 4 — Animations

**Task 8 — Basic Animation**

- Includes three skill bars that start at zero width.
- Uses `.animate()` to move each bar to a different target width.
- The same button resets the bars to zero.

## How to run the project

1. Download or clone this repository.
2. Keep `index.html`, `style.css`, `script.js`, and the `images` folder together.
3. Open `index.html` in a modern browser.
4. An internet connection is needed to load jQuery from the CDN.
5. To verify Task 0, open the browser developer tools (`F12`) and select the Console tab. Look for `jQuery is ready!`.

## Screenshots

Add your own screenshots to the `screenshots/` folder after running the project. Use the following names and show the corresponding feature in each screenshot:

1. `task0-setup.png` — browser console showing “jQuery is ready!”
2. `task1-selectors.png` — portfolio heading and theme buttons
3. `task2-visibility.png` — About Me section with visibility controls
4. `task3-fade.png` — gallery images
5. `task4-slide.png` — favorite panels
6. `task5-skills.png` — skills list and add/prepend/remove controls
7. `task6-attributes.png` — changed social link
8. `task7-form.png` — live form preview
9. `task8-animation.png` — animated skill bars

> Screenshots are intentionally not fabricated. Capture the actual running project and place the images in this folder before submission.

## Summary

In this assignment, I created an interactive portfolio to practice jQuery. I used selectors to select page elements, changed text and CSS styles, implemented visibility, fade, and slide effects, manipulated list elements, changed link attributes, displayed form values in real time, and animated skill bars. I also organized the project into separate HTML, CSS, and JavaScript files.

## Submission links

- **GitHub repository:** Add your public repository URL here.
- **GitHub Pages:** Add your published GitHub Pages URL here.
