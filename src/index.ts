import express from 'express';
import { configDotenv } from 'dotenv';
configDotenv({ path: './src/config/.env' });
import routes from './routes/routes'

const app = express();
app.use(express.json());

app.use(routes);

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`);
});

