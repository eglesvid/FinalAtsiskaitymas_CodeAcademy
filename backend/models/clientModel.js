import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  registrationDateTime: {
    type: Date,
    required: true,
    set: function (date) {
      const timezoneOffset = date.getTimezoneOffset() * 60 * 1000;
      return new Date(date.getTime() - timezoneOffset);
    },
  },
});

const clientModel = mongoose.model("clients", clientSchema);

export default clientModel;
