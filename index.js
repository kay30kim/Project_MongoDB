const express = require('express')
const app = express()
const port = 3000



const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://kay:<1q2w3e4r5t1!>@projectb.ly1vv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected..'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})