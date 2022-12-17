const Employee = require("../employee/model");
// const IbuHamil = require("../ibuHamil/model");

module.exports = {
  index: async (req, res) => {
    try {
      const employee = await Employee.countDocuments();
      res.render("admin/dashboard/view_dashboard", {
        name: req.session.user.name,
        title: "Dashboard",
        count: {
          employee,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
};
