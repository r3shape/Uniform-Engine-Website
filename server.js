import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
  const cards = [
    { title: 'High Performance', content: 'Optimized rendering pipeline built in C99.' },
    { title: 'Cross-Platform', content: 'Runs everywhere from embedded devices to high-end PCs.' },
    { title: 'Modular', content: 'Build exactly what you need with a minimal footprint.' }
  ];

  res.render('index', { cards });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server Port: ${PORT}`);
});
