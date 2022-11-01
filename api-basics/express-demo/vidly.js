const express = require('express');
const app = express();

app.use(express.json());


const genres = [
    {id: 1, genre: 'Comic'},
    {id: 2, genre: 'Horror'},
    {id: 3, genre: 'Western'},
]

app.get('/api/genres/:id', (req, res) => {
    const genre = genres.find(genres => genres.id === parseInt(req.params.id));
    if (!genre) res.status(404).send('genre with given id do not exist') 
    res.send(genre);
})

app.get('/api/genres', (req, res) => {
    res.json(genres);
})

app.post('/api/genres', (req, res) => {
    const genre = {
        id: genres.length + 1,
        genre: req.body.genre,
    }
    genres.push(genre);
    res.json(genre);
})


app.put('/api/genres/:id', (req, res) => {
    const genre = genres.find(genres => genres.id === parseInt(req.params.id));
    if (!genre) res.status(404).send('genre with given id do not exist') 
    
    genre.genre = req.body.genre;

    res.json(genre);
})

app.delete('/api/genres/:id', (req, res) => {
    const genre = genre.find(genre => genre.id === parseInt(req.params.id));
    if (!genre) res.status(404).send('genre with given id do not exist') 


})

app.listen(3000);
