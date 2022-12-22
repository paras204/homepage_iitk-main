const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// EXPRESS RELATED STUFF
app.use('/static', express.static('static'))
app.use(express.urlencoded())

// PUG RELATED STUFF
app.set('view engine', 'pug') //Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

//ENDPOINTS
app.get('/', (req,res)=> {
    const params = {}
    res.status(200).render('home.pug',params);
})
app.get('/about', (req,res)=> {
    const params = {}
    res.status(200).render('about.pug',params);
})
app.get('/works', (req,res)=> {
    const params = {}
    res.status(200).render('works.pug',params);
})
app.get('/blogs', (req,res)=> {
    const params = {}
    res.status(200).render('blogs.pug',params);
})

// START THE SERVER
app.listen(port,()=>{
    console.log(`The app started successfully on the port ${port}`)
});