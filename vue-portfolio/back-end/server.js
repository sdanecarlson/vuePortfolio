const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));

// parse application/json
app.use(bodyParser.json());

let id = 0;

const items = mongoose.model('items', {
    id: String,
    text: String,
    author: String
  });

  async function work() {
    try {
        await items.deleteMany({
          id: "[object Undefined]"
        });
      } catch (error) {
        console.log(error);
      }
    };
  
  work();


app.post('/api/items', async (req, res) => {
    id = id + 1;
    const item = new items({
      id: toString(id),
      text: req.body.text,
      author: req.body.author
    });
    console.log("Error2")
    try{
        await item.save();
        console.log("Error3")
        res.send({item: item})
        console.log("Error4")
    }catch (error) {
        console.log(error);
    }
    res.send(item);
  });

  app.get('/api/items', async (req, res) => {
    try {
        let item = await items.find();
        res.send({item: item});
      } catch (error) {
        console.log("Error1", error);
        res.sendStatus(500);
      }
  });

  app.put('/api/items/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let itemsMap = items.map(item => {
      return item.id;
    });
    let index = itemsMap.indexOf(id);
    if (index === -1) {
      res.status(404)
        .send("Sorry, that item doesn't exist");
      return;
    }
    let item = items[index];
    item.text = req.body.text;
    item.author = req.body.author;
    res.send(item);
  });

  app.delete('/api/items/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let removeIndex = items.map(item => {
        return item.id;
      })
      .indexOf(id);
    if (removeIndex === -1) {
      res.status(404)
        .send("Sorry, that item doesn't exist");
      return;
    }
    items.splice(removeIndex, 1);
    res.sendStatus(200);
  });

app.listen(3000, () => console.log('Server listening on port 3000!'));