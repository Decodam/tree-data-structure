# Tree Management App with Undo/Redo Functionality

This project is a Next.js application that demonstrates managing and persisting a large tree structure with Undo/Redo functionality. It allows users to interact with nodes, edit their values, and propagate changes up the tree. The application is designed to handle a tree with a significant depth efficiently, ensuring performance and usability.

## Features

- Display a tree structure with up to 10,000 nodes.
- Editable nodes with propagation of changes to parent nodes.
- Undo/Redo functionality to revert or redo changes.
- Responsive UI designed for scalability and ease of use.

## Tech Stack

- **Frontend**: Next.js
- **State Management**: useState hook for local state management
- **Styling**: CSS for basic styling (customizable as per requirements)

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd tree-management-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the application:

   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

- Navigate through the tree structure by expanding nodes.
- Click on a node to edit its value. Changes propagate upwards to parent nodes.
- Use the Undo button to revert the last change made.
- Use the Redo button to reapply undone changes.

## Folder Structure

```
tree-app/
├── public/
├── src/
│   ├── components/
│   │   ├── TreeNode.js
│   │   ├── Tree.js
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── ...
└── ...
```

## Deployment

Deploy the application to a hosting platform (e.g., Netlify, Vercel) for production use.
