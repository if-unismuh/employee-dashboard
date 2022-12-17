const Employee = require("./model");

module.exports = {
  index: async (req, res) => {
    try {
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");
      const alert = { message: alertMessage, status: alertStatus };
      const employee = await Employee.find();

      res.render("admin/employee/view_employee", {
        employee,
        alert,
        name: req.session.user.name,
        title: "Data Pegawai",
      });
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/employee");
    }
  },
  viewCreate: async (req, res) => {
    try {
      res.render("admin/employee/create", {
        name: req.session.user.name,
        title: "Add Data Pegawai",
      });
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/employee");
    }
  },
  actionCreate: async (req, res) => {
    try {
      const { nama, nip, tmt_cpns, tmt_pensiun, masa_kerja, jabatan } =
        req.body;

      let employee = await Employee({
        nama,
        nip,
        tmt_cpns,
        tmt_pensiun,
        masa_kerja,
        jabatan,
      });

      await employee.save();

      req.flash("alertMessage", "Berhasil menambahkan data Pegawai!");
      req.flash("alertStatus", "success");

      res.redirect("/employee");
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/employee");
    }
  },
  viewEdit: async (req, res) => {
    try {
      const { id } = req.params;

      const employee = await Employee.findOne({ _id: id });

      res.render("admin/employee/edit", {
        employee,
        name: req.session.user.name,
        title: "Update Data Pegawai",
      });
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/employee");
    }
  },
  actionEdit: async (req, res) => {
    try {
      const { id } = req.params;
      const { nama, nip, tmt_cpns, tmt_pensiun, masa_kerja, jabatan } =
        req.body;

      await Employee.findOneAndUpdate(
        {
          _id: id,
        },
        { nama, nip, tmt_cpns, tmt_pensiun, masa_kerja, jabatan }
      );

      req.flash("alertMessage", "Berhasil mengubah data Pegawai!");
      req.flash("alertStatus", "warning");

      res.redirect("/employee");
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/employee");
    }
  },

  actionDelete: async (req, res) => {
    try {
      const { id } = req.params;
      await Employee.findOneAndRemove({
        _id: id,
      });

      req.flash("alertMessage", "Data Pegawai telah dihapus!");
      req.flash("alertStatus", "danger");

      res.redirect("/employee");
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/employee");
    }
  },
};
