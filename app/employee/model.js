const mongoose = require("mongoose");
let employeeSchema = mongoose.Schema(
  {
    nama: {
      type: String,
      require: [true, "Nama balita Harus diisi"],
    },
    nip: {
      type: String,
      require: [true, "Nama Ibu Harus diisi"],
    },
    tmt_cpns: {
      type: String,
      require: [true, "Berat badan Harus diisi"],
    },
    tmt_pensiun: {
      type: String,
      require: [true, "Tinggi badan Harus diisi"],
    },
    masa_kerja: {
      type: String,
      require: [true, "Umur Harus diisi"],
    },
    jabatan: {
      type: String,
      require: [true, "Index massa tubuh Harus diisi"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Employee", employeeSchema);
