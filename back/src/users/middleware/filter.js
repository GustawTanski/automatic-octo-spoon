function filter (req, res, next) {
    const team = req.header('team');
    req.team = team;

    next();
};

module.exports = filter;
