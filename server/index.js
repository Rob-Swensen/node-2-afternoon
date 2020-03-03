const express = require('express');
const port = 3001;
const mc = require('./Controllers/messages_controller')


const app = express();



app.use(express.json());

app.post('/api/messages', mc.create);
app.get('/api/messages', mc.read);
app.put('/api/messages/:id', mc.update);
app.delete('/api/messages/:id', mc.delete)


app.listen(port, () => console.log(`Server is running on port: ${port}`));
