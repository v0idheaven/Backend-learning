import express from 'express';

const app = express();

// Middleware for parsing JSON
app.use(express.json());

// Basic route for health check
app.get('/', (req, res) => {
  res.send('API is running');
});

export default app;
