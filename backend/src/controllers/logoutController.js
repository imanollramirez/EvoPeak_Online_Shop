const logoutController = {};

logoutController.logout = async (req, res) => {
   res.clearCookie('authToken');
   return res.status(200).json({ message: 'Logged out successfully' });
 };
 

export default logoutController;