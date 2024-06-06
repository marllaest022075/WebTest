const { Router } = require('express');
const router = Router();
const path = require('path').resolve(__dirname, '..')


router.get('/', (red, res) => {
    res.sendFile(path + '/index.html');
});

module.exports = router;