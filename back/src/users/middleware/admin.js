function admin (req, res, next) {
    if(!req.body.isBoss) return res.status(403).send('Access denied');

    next();
}

module.exports = admin;
