require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./src/config/database');
const userRoutes = require('./routes/userRoutes');
const app = express();

app.use(express.json());




const corsOptions = {
    origin: 'http://localhost:4200'
};

app.use(cors());
app.use('/user', userRoutes);

app.get('/', (req, res) => {
    res.send('Ola rolve! servidor rodando');
});
const port = process.env.PORT || 3000;

(async () => {
    try {
        await sequelize.authenticate();
        console.log('conexão com o banco de dados feita!');
        const User = require('./models/User');
        await sequelize.sync();

        app.listen(port, () => {
            console.log(`Servidor rodando na porta ${port}`);
        });
    } catch (error) {
        console.error('Erro ao conectar ao banco :', error);
    }
})();