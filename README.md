# Multi-Theme Switcher App

A React-based web application demonstrating a multi-theme switcher with three distinct themes, dynamic content fetching, responsive layouts, and smooth theme switching. Built with TypeScript, Tailwind CSS, React Router, and Tabler Icons — all managed with Bun.

# Table of Contents
- Project Overview

- Features

- Themes

- Technologies Used

- Getting Started

- Project Structure

- Usage

## Project Overview
This app allows users to switch between three visually and structurally distinct themes:
- Theme 1 (Default): Minimalist, light background with simple sans-serif fonts.

- Theme 2: Dark mode featuring a sidebar navigation layout with bold serif fonts.

- Theme 3: Colorful, card-based grid layout with a playful Google Font (Pacifico).

The app's main content area fetches and displays products dynamically from fakestoreapi.com. The theme selection persists across page reloads using localStorage and React Context API for state management.


## Features
- Fixed top header with app logo and a theme switcher dropdown

- Three fully distinct themes affecting colors, fonts, layouts, and spacing

- Responsive design optimized for desktop and mobile devices

- Sidebar navigation appears only in Theme 2 with responsive collapse on mobile

- Dynamic data fetching from a public API with product listing

- React Router powered multi-page support (Home, About, Contact)

- Smooth animated transitions when switching themes

- Accessible and semantic HTML structure

- Developed using modern TypeScript and React practices

- Icons via Tabler Icons React component library

- Tailwind CSS for utility-first styling


## Technologies Used
- **Language**: TypeScript

- **Framework**: React

- **Styling**: Tailwind CSS

- **Icons**: Tabler Icons React

- **State Management**: React Context API

- **Routing**: React Router

- **Package Manager**: Bun

- **API**: `https://fakestoreapi.com/products` for sample product data

## Getting Started
### Prerequisites
- Install Bun if not already installed

- Node.js is not required (Bun handles runtime)

### Installation
1. Clone repository:
```bash
git clone https://github.com/SAHIL-Sharma21/Multi-Theme-App-Sahil_Sharma_Frontend_Developer.git

cd multi-theme-switcher
```
2. Install dependencies with Bun:
```bash
bun install
```

3. Start the development server:
```bash
  bun run dev
```

4. Open **`http://localhost:3000`** in your browser.


### Project Structure
```text
/src
  /components
    Header.tsx           
    Sidebar.tsx          
    Layout.tsx           
  /context
    ThemeContext.tsx     
  /pages
    Home.tsx             
    About.tsx            
    Contact.tsx          
  /themes.ts             
  App.tsx                 
  index.tsx               
README.md
package.json (handled by Bun internally)
```

### Usage
- Select a theme from the dropdown in the header to dynamically switch themes.

- Theme changes affect colors, typography, layout structure (including sidebar for Theme 2).

- Navigate between Home, About, and Contact pages using navigation links.

- On the Home page, browse product cards dynamically fetched from the API.

- Contact page includes a responsive contact form.

- Theme selection is saved and persists after page reloads.

