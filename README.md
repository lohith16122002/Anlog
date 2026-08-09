# Analog Clock Link:https://anlog.vercel.app/

A responsive analog clock that displays the current time from the visitor's device. It includes smoothly moving clock hands, a digital time display, and the current date.

## Features

- Live hour, minute, and second hands
- Digital 24-hour time display
- Current local date and day
- Responsive layout for desktop and mobile screens
- No frameworks or build tools required

## Run the project

1. Open `index.html` in any modern web browser.
2. The clock updates automatically using your device's local time.

For the best development experience, open the `Analog` folder in VS Code and use a local preview extension such as Live Server.

## Project structure

```
Analog/
├── index.html   # Clock markup
├── style.css    # Responsive clock styling
├── script.js    # Live time and hand rotation logic
└── README.md    # Project documentation
```

## How it works

`script.js` reads the current time with JavaScript's `Date` object. It converts hours, minutes, and seconds into rotation angles, then updates the clock hands and digital display every 50 milliseconds.

## Technologies

- HTML5
- CSS3
- JavaScript
