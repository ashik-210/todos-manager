# Todos Manager

A responsive todo manager built with React, Context API, and Tailwind CSS — add, edit, delete, and toggle-complete your tasks, with automatic persistence via localStorage.

🔗 **Live Demo:** [todos-manager-one.vercel.app](https://todos-manager-one.vercel.app/)
📂 **Repository:** [github.com/ashik-210/todos-manager](https://github.com/ashik-210/todos-manager)

---

## Screenshots

<table>
  <tr>
    <td><img width="1366" height="768" alt="Home screen" src="https://github.com/user-attachments/assets/bc6b50ae-a4e4-4926-8c35-aabf30b3e3d8" /></td>
    <td><img width="1366" height="768" alt="Adding a todo" src="https://github.com/user-attachments/assets/255e9bbd-4c96-44e7-ab4f-87396996e553" /></td>
  </tr>
  <tr>
    <td><img width="1366" height="768" alt="Editing a todo" src="https://github.com/user-attachments/assets/bb3b0eb5-6ff8-486f-aba4-6fa9e8ac2641" /></td>
    <td><img width="1366" height="768" alt="Completed todo" src="https://github.com/user-attachments/assets/70977cbb-4e05-482c-aa19-99ad506e176e" /></td>
  </tr>
</table>

---

## Features

- ✅ **Add tasks** — quickly add new todos via a simple input form
- ✏️ **Edit tasks** — inline editing with a toggle between edit and save mode
- 🗑️ **Delete tasks** — remove todos you no longer need
- ☑️ **Mark as complete** — check off finished tasks with strikethrough styling
- 🔒 **Locked editing** — completed tasks can't be edited until marked incomplete again
- 💾 **Persistent storage** — todos are saved to `localStorage`, so your list survives page refreshes
- 📱 **Fully responsive** — clean UI that adapts from mobile to desktop

---

## Tech Stack

- **React** — component-based UI
- **Context API** — global state management (no external state library)
- **Tailwind CSS** — utility-first styling
- **Lucide React** — icon set
- **Vite** — build tool / dev server
- **Vercel** — deployment

---

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm / yarn / pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/ashik-210/todos-manager.git

# Navigate into the project
cd todos-manager

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be running locally at `http://localhost:5173` (or whichever port Vite assigns).

### Build for production

```bash
npm run build
```

---

## Project Structure

```
todos-manager/
├── src/
│   ├── components/
│   │   ├── Top.jsx
│   │   ├── TodoForm.jsx
│   │   └── TodoItem.jsx
│   ├── context/
│   │   └── ContextProvider.jsx
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── tailwind.config.js
└── package.json
```

---

## Author

**Ashik**
B.Tech CSE, RKGITM Ghaziabad

- GitHub: [@ashik-210](https://github.com/ashik-210)

---

## License

This project is open source and available under the [MIT License](LICENSE).
