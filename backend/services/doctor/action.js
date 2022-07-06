const asyncHandler = require('express-async-handler');


const opdSearch = asyncHandler(async (req, res) => {
    res.send('Opd Search');
});

module.exports = {
    opdSearch,
};