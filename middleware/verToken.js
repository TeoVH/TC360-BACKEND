// Authorization: Bearer <token>
module.exports = (req, res, next) => {
  const bearerHeader = req.headers['Authorization'];

  if (typeof bearerHeader !== 'undefined') {
    const bearerToken = bearerHeader.split(' ')[1];
    req.token = bearerToken;
    next();
  } else {
    res.status(403).send({ error: 'Authorization error' });
  }
};
