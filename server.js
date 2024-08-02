const express = require('express');
const corsOptions = {
  origin: process.env.https://frontend-132j.onrender.com,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/bfhl', require('./routes/bfhlRoutes'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
