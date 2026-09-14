# Portfolio App

A personal portfolio site (HTML/CSS/JS) served with Express.

## Structure
```
portfolio-app/
├── server.js          # Express server
├── package.json
└── public/
    ├── index.html      # Page content (edit this with your real info)
    ├── style.css        # Styling / design tokens
    └── script.js        # Smooth in-page scrolling
```

## Run it

```bash
npm install
npm start
```

Then open http://localhost:3000 in your browser.

## Customize

All placeholder content (name, projects, skills, email, social links) lives in
`public/index.html` — search for "Alex Rivera" and the sample projects and
swap them for your own. Colors and fonts are defined as CSS variables at the
top of `public/style.css` under `:root` if you want to change the palette.
