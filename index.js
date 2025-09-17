const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/tasks');

const app = express();
const PORT = 8081;

app.use(cors({ origin: ['https://module-5-task-manager-react-client.netlify.app','http://localhost:5173'], credentials: true }));
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

app.get('/', (req, res) => res.json({ message: 'MERN Todo API' }));

connectDB().then(() => {
  app.listen(PORT, () => console.log('Server running on port', PORT));
}).catch(err => {
  console.error('Failed to start', err);
});
