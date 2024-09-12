# Bento Style's Astro Portfolio from TechTim

This template helps you build a portfolio using Astro, Typescript, React, Tailwind CSS, and Shadcn UI.



## Technologies Used

This project utilizes the following technologies:

- **Astro**: A modern framework for building fast and efficient websites.
- **Tailwind CSS**: A utility-first CSS framework for rapid and responsive design.
- **Shadcn UI**: A collection of accessible and easy-to-use UI components.
- **React**: For interactive components and advanced functionality.

## Requirements

Before starting, make sure you have the following requirements installed:

- Node.js (version 14 or higher)
- npm or yarn

## Installation

To install and run the project locally, follow these steps:

1. Clone this repository:

   ```bash
   git clone https://github.com/bue221/astro-portfolio.git
   ```

2. Navigate to the project directory:

   ```bash
   cd astro-portfolio
   ```

3. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

4. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and visit `http://localhost:3000` to see your portfolio in action.

## Project Structure

A brief overview of the project structure:

- **/public**: Images and other static files.
- **/src**: Contains all Astro components and pages.
- **/styles**: Custom CSS files.
- **astro.config.mjs**: Main configuration for Astro.
- **tailwind.config.js**: Configuration for Tailwind CSS.

## Important Considerations

- **Accessibility**: Ensure your portfolio is accessible to all users, including those with disabilities.
- **SEO**: Optimize your portfolio for search engines by adding meta tags and relevant content.
- **Performance**: Use modern web development practices to ensure optimal performance, such as lazy loading images and minimizing CSS/JS.
- **Responsive Design**: Make sure your portfolio looks good on devices of all sizes, from mobile to desktop screens.

## Contributions

Contributions are welcome! If you have ideas or improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).


## Inspiration

This project was inspired by several outstanding portfolios. Here are some that served as references:

- [Bento Like Portfolio](https://github.com/Ladvace/astro-bento-portfolio)
- [Minimal and bento Portfolio ](https://github.com/bue221/astro-portfolio)


### Differences / Improvements

- Centralised data management inside one folder
  - Use Astro recommended [Content Collection](https://docs.astro.build/en/guides/content-collections/) to manage data
  - `src/content` folder for blog posts, project data and profile data
  - `src/content/profileData.ts` for general profile data
- Tags system
- 
