const express = require('express');
const app = express();
var cors = require('cors');

app.use(
    cors({
        credentials: true,
        origin: 'https://peaceful-fermat-6c50ce.netlify.app'
    })
);
app.options('*', cors());

app.get('/', (req, res) => res.send('Modified: This api works.'));

app.listen(process.env.PORT || 3000, function() {
    console.log('server running on port 3000', '');
});
