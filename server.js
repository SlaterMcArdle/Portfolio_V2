const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js2', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/js3', express.static(__dirname + '/node_modules/van11y-accessible-carrousel-aria/src'));
app.use('/css2', express.static(__dirname + '/node_modules/van11y-accessible-carrousel-aria/demo'));
app.use('/css3', express.static(__dirname + '/node_modules/@fortawesome/fontawesome-free/css'));
app.use('/icons', express.static(__dirname + '/node_modules/@fortawesome/fontawesome-free/svgs'));

app.listen(PORT, () => console.log(`Now listening on ${PORT}`));