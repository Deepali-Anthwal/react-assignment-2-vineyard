# Assignment 2

## Introduction:
This project is a functional Book Catalog application built with React. The primary objective was to implement dynamic routing, allowing users to navigate from a central list of books to specific, detailed views for each entry without refreshing the browser.

## Tech Stack:
* **React.js**: For building a component-based user interface.
* **React Router DOM**: Essential for handling the SPA (Single Page Application) routing logic.
* **JavaScript (ES6+)**: Using `map()` for data rendering and `useParams()` for dynamic data fetching.
* **CSS3**: Custom minimalist styling.

## Implementation Summary:
The application is structured around a central data array and two main functional components:
- **Book List Component**: Iterates through a collection of book objects using the `.map()` method. Each item features a "Read More" button that triggers navigation.
- **Dynamic Routing**: Configured a main route (`/`) for the catalog and a dynamic route (`/books/:id`) for specific book details.
- **Book Detail Component**: Utilizes the `useParams()` hook to capture the unique ID from the URL, filtering the book array to display the correct title, author, and description.
- **Navigation logic**: Implemented `<Link>` components to ensure smooth, client-side transitions between the catalog and detail views.

## How to Run the Project:
1. **Download the Source Code:**
   - Click the green **Code** button on the GitHub repository.
   - Select **Download ZIP**.
   - Extract the files to a folder on your computer.
2. **Open Terminal:**
   - Open your terminal or command prompt inside the project folder.
3. **Install Dependencies:**
   npm install
4. **Start Developtment Server:**
   npm run dev
5. **View in Browser:**
   Open "http://localhost:5173" in your web browser.
