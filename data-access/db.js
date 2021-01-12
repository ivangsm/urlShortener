import { connect, set } from 'mongoose';

connect('mongodb://localhost/urlShortener', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

set('useCreateIndex', true)