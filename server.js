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
  const features = [
    {"title": "Feature Title", "content": "Lorem ipsum odor amet, consectetuer adipiscing elit. Ridiculus sit nisl laoreet facilisis aliquet. Potenti dignissim litora eget montes rhoncus sapien neque urna. Cursus libero sapien integer magnis ligula lobortis quam ut." },
    {"title": "Feature Title", "content": "Lorem ipsum odor amet, consectetuer adipiscing elit. Ridiculus sit nisl laoreet facilisis aliquet. Potenti dignissim litora eget montes rhoncus sapien neque urna. Cursus libero sapien integer magnis ligula lobortis quam ut." },
    {"title": "Feature Title", "content": "Lorem ipsum odor amet, consectetuer adipiscing elit. Ridiculus sit nisl laoreet facilisis aliquet. Potenti dignissim litora eget montes rhoncus sapien neque urna. Cursus libero sapien integer magnis ligula lobortis quam ut." },
    {"title": "Feature Title", "content": "Lorem ipsum odor amet, consectetuer adipiscing elit. Ridiculus sit nisl laoreet facilisis aliquet. Potenti dignissim litora eget montes rhoncus sapien neque urna. Cursus libero sapien integer magnis ligula lobortis quam ut." },
    {"title": "Feature Title", "content": "Lorem ipsum odor amet, consectetuer adipiscing elit. Ridiculus sit nisl laoreet facilisis aliquet. Potenti dignissim litora eget montes rhoncus sapien neque urna. Cursus libero sapien integer magnis ligula lobortis quam ut." },
    {"title": "Feature Title", "content": "Lorem ipsum odor amet, consectetuer adipiscing elit. Ridiculus sit nisl laoreet facilisis aliquet. Potenti dignissim litora eget montes rhoncus sapien neque urna. Cursus libero sapien integer magnis ligula lobortis quam ut." }
  ];

  const news = [
    {"title": "Uniform News", "date": "09/10/26 6:45 AM EST", "desc": "Uniform News Post Description"},
    {"title": "Uniform News", "date": "09/10/26 6:45 AM EST", "desc": "Uniform News Post Description"},
    {"title": "Uniform News", "date": "09/10/26 6:45 AM EST", "desc": "Uniform News Post Description"},
    {"title": "Uniform News", "date": "09/10/26 6:45 AM EST", "desc": "Uniform News Post Description"},
    {"title": "Uniform News", "date": "09/10/26 6:45 AM EST", "desc": "Uniform News Post Description"},
    {"title": "Uniform News", "date": "09/10/26 6:45 AM EST", "desc": "Uniform News Post Description"},
  ];

  res.render('index', { cards: features, "news": news });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server Port: ${PORT}`);
});
