const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

// express app
const app = express();

// connect to mongodb
const dbURI = 'mongodb+srv://nodeninja:test1234@nodejs.t4gb2xw.mongodb.net/Nodejslearn?retryWrites=true&w=majority&appName=Nodejs';

mongoose.connect(dbURI)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err))

// register view engine

app.set('view engine', 'ejs')
// app.set('views', 'folder name') // if your views folder is not names as views

/*

// listen for requests

app.listen(3000);

app.use((req, res, next) => {
    console.log('Request was made');
    console.log('Host:', req.hostname);
    next();
})

*/

// middleware and static files

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true })) // for excepting form data
app.use(morgan('tiny'))

/*

// mongoose and mongo sandbox routes

app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'new blog 2',
        snippet: 'about my new blog 2',
        body: 'body of my new blog and more about my new blog'
    })

    blog.save()
      .then((result) => {
        res.send(result)
      })
      .catch((err) => {
        console.log(err);
      })
})

app.get('/all-blogs', (req, res) => {
    Blog.find()
      .then((result) => {
        res.send(result)
      })
      .catch((err) => {
        console.log(err);
      })
})

app.get('/single-blog', (req, res) => {
    Blog.findById('66a4a20c338bec061fcbb3a9')
      .then((result) => {
        res.send(result)
      })
      .catch((err) => {
        console.log(err);
      })
})

*/

app.get('/', (req, res) => {
    /*
    const blogs = [
        {title: 'Yoshi', snippet: 'Lorem ispum dolr sdem emuit'},
        {title: 'Mario', snippet: 'Lorem ispum dolr sdem emuit'},
        {title: 'Ninja', snippet: 'Lorem ispum dolr sdem emuit'}
    ]
    res.render('index', { title: 'Home', blogs}) // blogs -> blogs: blogs
    */
    res.redirect('/blogs')
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'About'})
})

// blog routes

app.use('/blogs', blogRoutes)

app.use((req, res) => {
    res.status(404).render('404', { title: '404'})
})

/*

app.get('/', (req, res) => {
    // res.send('<h1>home</h1>')
    res.sendFile('./views/index.html', { root: __dirname }) // current directory which is lesson2
})

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname })
})

// redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about')
})

// 404 page
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname })
})

*/