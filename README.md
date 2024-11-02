# TechTim's Astro Bento Portfolio

This template helps you build a portfolio using Astro, Typescript, React, Tailwind CSS, and Shadcn UI.

- [Live Demo](https://techtim42.com)
- [GitHub Repo](https://github.com/tim-hub/techtim-astro-bento-portfolio)

## Technologies Used

This project utilizes the following technologies:

- **Astro**: A modern framework for building fast and efficient websites.
- **Tailwind CSS**: A utility-first CSS framework for rapid and responsive design.
- **Shadcn UI**: A collection of accessible and easy-to-use UI components.
- **React**: For interactive components and advanced functionality.
- **TypeScript**: For static type checking and improved developer experience.

## Requirements

Before starting, make sure you have the following requirements installed:

- Node.js (version 18 or higher)
- pnpm (version 8 or higher)

## Installation

To install and run the project locally, follow these steps:

1. Clone this repository:

   ```bash
   git clone https://github.com/tim-hub/techtim-astro-bento-portfolio
   ```

2. Navigate to the project directory:

   ```bash
   cd techtim-astro-bento-portfolio
   ```

3. Install the dependencies:

   ```bash
   pnpm install
   ```

4. Start the development server:

   ```bash
   pnpm run dev
   ```

5. Open your browser and visit `http://localhost:4312` to see your portfolio in action.
6. Config your site
   1. Edit `src/content/profileData.ts` to add your profile data
   2. Edit `astro.config.mjs` to change the site information


## Important Considerations

- **Accessibility**: Ensure your portfolio is accessible to all users, including those with disabilities.
- **SEO**: Optimize your portfolio for search engines by adding meta tags and relevant content.
- **Performance**: Use modern web development practices to ensure optimal performance, such as lazy loading images and minimizing CSS/JS.
- **Responsive Design**: Make sure your portfolio looks good on devices of all sizes, from mobile to desktop screens.

## Contributions

Contributions are welcome! If you have ideas or improvements, please open an issue or submit a pull request.

## License

- This source codes are licensed under the [MIT License](LICENSE).
- The content (`src/content/`) of the portfolio is licensed under the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).
- The images (`public/`) used in the project are for template demonstration purposes only and should not be reused without permission.

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
- Simplified Dark/Light mode toggle
