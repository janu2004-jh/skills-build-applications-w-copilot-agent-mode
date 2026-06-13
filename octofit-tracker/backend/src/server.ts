import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT ?? 8000;
const MONGODB_URI = process.env.MONGODB_URI ?? 'mongodb://localhost:27017/octofit';

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'OctoFit Tracker backend is running on port 8000.' });
});

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Backend listening on http://localhost:${PORT}`);
      console.log(`MongoDB connected at ${MONGODB_URI}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  });
