import 'dotenv/config';
import bodyparser from 'body-parser';
import express from 'express';
import cors from 'cors';
import initRouter from '@/routes/router';
import connectDB from '@/database/database';

const app = express();

// Middleware
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.set('port', process.env.PORT || 5000);

//OPTIONAL Mongodb
//connectDB();
initRouter(app);

app.listen(app.get('port'), () => {
  console.log(
    '  App is running at http://localhost:%d in %s mode',
    app.get('port'),
    app.get('env'),
  );
  console.log('  Press CTRL-C to stop\n');
});
