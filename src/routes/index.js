const { Router } = require('express');

const router = new Router();

router.get('/test', (req, res) => {
    const data = {
        name: 'Jhon',
        website: 'jjsbautista.com'
    };
    res.json(data);
});  

module.exports = router;
