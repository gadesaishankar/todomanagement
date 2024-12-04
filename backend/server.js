const express = require('express');
const connectDB = require('./config/db');
const todoRoutes = require('./routes/todoRoutes');
const cors = require('cors');

connectDB();

const app = express();
app.use(cors({
  origin: '*' // Update to your deployed frontend URL after deployment.
}));

app.use(express.json());

app.use('/api/todos', todoRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server running on port 5000'));
