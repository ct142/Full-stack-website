const jwt = require("jsonwebtoken");
const Vendor = require("../model/Vendor");
const checkAuth = (req, res, next) => {
  //  If session does not exist user or user is not logged in, redirect user to login page
  if (!req.session.user) {
    return res.redirect("/vendor/login");
  }

  next();
};
const checkAuthAPI = (req, res, next) => {
  if (!req.session.user) {
    return res.status(401).json({ message: "Still Not Login" });
  }

  next();
};
const checkVendor = (req, res, next) => {
  //  If session does not exist user or user is not vendor, redirect user to login page
  if (!req.session.user || req.session.user.type !== "Vendor") {
    return res.redirect("/vendor/login");
  }

  next();
};
const checkShipper = (req, res, next) => {
  //  If session does not exist user or user is not shipper, redirect user to login page
  if (!req.session.user || req.session.user.type !== "Shipper") {
    return res.redirect("/shipper/login");
  }

  next();
};
const checkCustomer = (req, res, next) => {
  // If session does not exist user or user is not customer, redirect user to login page
  if (!req.session.user || req.session.user.type !== "Customer") {
    return res.redirect("/login");
  }

  next();
};

module.exports = {
  checkAuth,
  checkVendor,
  checkShipper,
  checkCustomer,
  checkAuthAPI
};
