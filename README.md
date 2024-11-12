# HRNet

This project aims to migrate a specific jQuery library in an existing application to a modern, performant React component-based structure. The primary objective is to refactor key pages of the application by replacing a specific jQuery plugin with a custom-built React component. This migration is built with React, Next.js, TailwindCSS, and ShadCN UI to ensure a fast, scalable, and well-styled UI experience.

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)

## Project Overview

The goal of this project is to replace a particular jQuery plugin with a React component while maintaining the application’s core functionality and enhancing maintainability. This migration requires a strong understanding of both jQuery and React, as well as the ability to ensure seamless integration between the two during the transition.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Next.js**: A React framework for server-side rendering and generating static websites.
- **TailwindCSS**: A utility-first CSS framework for rapid UI development.
- **ShadCN UI**: A component library for building modern web applications.

## Getting Started

### Prerequisites

Ensure that you have the following installed on your machine:

- Node.js (v16 and above)
- Bun (v1.1.33 and above)

**Bun was used to install dependencies and run the project**. It is a fast and efficient alternative to npm.

### Installation

1. Clone the repository.

```bash
git clone https://github.com/RemKiovo/hrnet.git
```

2. Install the required dependencies.

```bash
bun install
```

3. Start the development server.

```bash
bun run dev
```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

In this migration, I did:

- Refactor pages using a jQuery plugin by implementing a React component that replicates its functionality.
- Maintain the application’s existing features while leveraging React’s state management, lifecycle hooks, and modular structure.
- Apply styles using TailwindCSS to ensure a responsive and visually consistent UI.
- Utilize ShadCN UI components for cohesive and accessible design elements.

## Project Structure

```text
  ├── .eslintrc.json
  ├── .gitignore
  ├── .next/
  ├── components.json     // Shadcn config file
  ├── public/
  ├── README.md           // You're here!
  ├── src/
  │ ├── app/
  │ │ ├── employee-list/
  │ │ │ ├── components/  // Table component
  │ │ │ └── page.tsx
  │ │ ├── globals.css
  │ │ └── layout.tsx
  │ │ └── page.tsx       // Main page
  │ ├── components/
  │ │ ├── AddressForm.tsx
  │ │ ├── DepartmentForm.tsx
  │ │ ├── Header.tsx
  │ │ └── ui/           // Shadcn components
  │ ├── constants/
  │ │ └── index.ts
  │ ├── lib/
  │ │ ├── providers.tsx // Redux Providers
  │ │ └── utils.ts
  │ └── store.ts        // Redux store
  ├── tailwind.config.ts
  └── tsconfig.json
```
