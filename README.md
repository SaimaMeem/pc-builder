# PC Builder Website

The [PC Builder Website](https://pc-builder-alpha-two.vercel.app/) is a user-friendly platform developed with Next.js that enables users to assemble their personalized PCs. It includes a PC Builder tool, product categories, featured components, and authentication features for an enhanced experience.


## Features

### Authentication

-   Google Authentication implemented with NextAuth.
-   Email-Password Authentication implemented with Firebase. (Use this email and password to login. Email: user@gmail.com, Password: 123456)
-   Protected PC Builder page with user authentication using NextAuth.

### Navigation

-   Navbar with a "PC Builder" button that redirects users to the PC Builder page.
-   Categories dropdown with various component categories (CPU, Motherboard, RAM, etc.), each linked to a corresponding route.

### Home Page

-   Utilizes SSG (Static Site Generation) to display 6 random Featured Products.
-   Each Featured Product card displays essential information like image, product name, category, price, availability, rating, and a clickable link to the product detail page.
-   Featured Categories showcase different product categories with links.

### Featured Category Section

-   Each Featured Category is clickable and leads to a page displaying at least 3 products from that category.
-   Product cards on these pages show details like image, name, category, price, availability, rating, and are clickable for more information.

### Product Detail Page

-   Detailed page for each PC component with information like image, product name, category, availability, price, description, key features, individual rating, average rating, and reviews.

### PC Builder Page

-   Implemented with SSR (Server-Side Rendering).
-   Category sections (CPU, Motherboard, RAM, etc.) with "Select" buttons.
-   Clicking on "Select" buttons leads to a page with at least 3 components of that category.
-   Component cards show relevant information and have an "Add to Builder" button.
-   Selected components are added to the PC Builder page.
-   Complete Build button that becomes active after adding at least 5-6 components.
-   Success alert when the Complete Build button is clicked.

## How to Run the Project

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using npm or yarn.

```
npm run dev
# or
yarn dev
```

4. Create a .env file in the project root and add your environment variables.

```
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GITHUB_CLIENT_ID=your_github_client_id
```

5. Run the development server.

```
npm run dev
# or
yarn dev
```
