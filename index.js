const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const categories = require('./data/categorise.json');
const news = require('./data/news.json');
const e = require('express');

app.use(cors())

app.get('/', (req, res) => {
    res.send('Dragon is running');
});

app.get('/categories', (req, res) => {
    res.send(categories)
});

app.get('/news', (req, res) => {
    res.send(news);
})

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    const selectedNews = news.find(n => n._id === id);
    res.send(selectedNews);
})

app.get('/categories/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    if(parseInt(id) === 0) {
        res.send(news);
    }
    else{
        const categoryNews = news.filter(n => n.category_id === id);
        res.send(categoryNews);
    }
})

app.listen(port, () => {
    console.log(`Dragon is listening on port ${port}`);
})