# ToDoApp

A simple full‑stack Todo application built with a React client and an Express/MongoDB server.

## Setup

### Requirements

- Node.js **18** or newer

### Install Dependencies

From the project root run:

```bash
npm install
```

Then install dependencies for the client and server:

```bash
(cd client && npm install)
(cd server && npm install)
```

### Environment Variables

Create a `.env` file inside the `server` directory based on `.env.example`:

```bash
cp server/.env.example server/.env
```

Edit the new `.env` file to configure your MongoDB connection and port.

### Running the App

Start the client and server in development mode with a single command:

```bash
npm run dev
```

This uses `concurrently` to run the React development server and the API server together. You can also run them individually with `npm run client` and `npm run server`.

