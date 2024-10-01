const express = require('express');
const { showRegisterPage, registerUser, showLoginPage, loginUser, logout } = require('../controller/user.controller');
const { verifyToken } = require('../helper/tokenVerify');
const { generateotp, verifyotp, showverifyotppage, forgotpasswordPage, resetPassword, resetPasswordPage } = require('../controller/forgotpassword.controller');
const userRoutes = express.Router();


userRoutes.get("/register", showRegisterPage);
userRoutes.post("/register", registerUser);

userRoutes.get("/login", showLoginPage);
userRoutes.post("/login",loginUser);

userRoutes.get("/verifyOTP", showverifyotppage);
userRoutes.post("/genrateotp" , generateotp );
userRoutes.post("/verifyotp" , verifyotp );

userRoutes.get('/forgotpassword',forgotpasswordPage)
userRoutes.get('/resetpasswordpage',resetPasswordPage)
userRoutes.post('/resetpassword' ,verifyToken, resetPassword)


module.exports = userRoutes;