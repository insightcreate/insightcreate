const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:5173', // or your frontend URL
  credentials: true
})); 