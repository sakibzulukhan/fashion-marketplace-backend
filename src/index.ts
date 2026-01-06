import express from 'express';
import cors from 'cors';

const app = express();
const PORT = Number(process.env.PORT || 10000);

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Fashion Marketplace Backend LIVE!' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

// ONE listen() call - LAST
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});