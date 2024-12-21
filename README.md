# Health

A brief description of your project, created using **Next.js**, **TypeScript**, and **raw CSS**. This project leverages custom designs, modern UI patterns, and dynamic styling to provide a seamless user experience.

## Tech Stack

- **Next.js**: A React framework for building server-rendered or statically-exported web applications.
- **TypeScript**: A strongly typed programming language built on JavaScript, enabling type safety and better tooling.
- **Raw CSS**: For styling, this project uses pure CSS without any preprocessor (like SASS) or CSS-in-JS solution.

## Features

- Responsive layouts with custom-designed components.
- Fully customizable button and card UI elements.
- Modern hover effects and transitions applied through raw CSS.
- Implemented background gradients and shiny effects using `background-blend-mode` and pseudo-elements.
- Optimized for performance using Next.js's built-in optimizations.

## Live Demo

You can view the live demo of the project [here](https://health-nine-blush.vercel.app/).

## File Tree

```bash
app
├── fonts
│ └── OpenSans-Regular.woff
├── favicon.ico
├── globals.css
├── layout.tsx
└── page.tsx
components
├── common
│ ├── ui
│ │ ├── Button.module.css
│ │ └── Button.tsx
│ ├── Badge.module.css
│ ├── Badge.tsx
│ ├── Divider.module.css
│ └── Divider.tsx
├── layout
│ ├── Footer
│ │ ├── Footer.module.css
│ │ └── Footer.tsx
│ └── Header
│ ├── Header.module.css
│ └── Header.tsx
└── section
├── contact
│ ├── Contact.module.css
│ └── Contact.tsx
├── Doctors
│ ├── Doctors.module.css
│ └── Doctors.tsx
├── Hero
│ ├── Hero.module.css
│ └── Hero.tsx
├── servcies
│ ├── Services.module.css
│ └── Services.tsx
└── WhyChooseUs
├── WhyChooseUs.module.css
└── WhyChooseUs.tsx
public
└── images
├── Doctor
│ ├── Doctor1.png
│ ├── Doctor2.png
│ └── Doctor3.png
├── services
│ ├── S1.png
│ ├── S2.png
│ ├── S3.png
│ ├── S4.png
│ ├── S5.png
│ ├── S6.png
│ ├── S7.png
│ └── S8.png
├── contact-image.png
├── Hero Image.png
├── Logo.png
└── whysection.png
.eslintrc.json
.gitignore
next-env.d.ts
next.config.mjs
package.json
README.md
tsconfig.json
```