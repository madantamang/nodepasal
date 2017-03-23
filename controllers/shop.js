exports.index = function(req, res) {
  res.render('shop', {
    title: 'Shop'
  });
};
exports.productdetails = function(req, res) {
  res.render('productdetails', {
    title: 'Shop'
  });
};
exports.checkout = function(req, res) {
  res.render('checkout', {
    title: 'Shop'
  });
};
exports.orderhistory = function(req, res) {
  res.render('orderHistory', {
    title: 'Shop'
  });
};
