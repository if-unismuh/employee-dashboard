const mongoose = require("mongoose");
let userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      require: [true, "Email Harus diisi"],
    },
    name: {
      type: String,
      require: [true, "Nama Harus diisi"],
    },
    password: {
      type: String,
      require: [true, "Kata sandi Harus diisi"],
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: ["admin"],
    },
    status: {
      type: String,
      enum: ["Y", "N"],
      default: ["Y"],
    },
    phoneNumber: {
      type: String,
      require: [true, "Nomor telpon Harus diisi"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
