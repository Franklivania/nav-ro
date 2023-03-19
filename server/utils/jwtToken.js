module.exports = (funcError) => (req, res, next) => {
  Promise.resolve(funcError(req, res, next)).catch(next);
};
