import mongoose from "mongoose";

/* CustomerAssetSchema will correspond to a collection in your MongoDB database. */
const CustomerAssetSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: [true, "Please provide an id for this machine."],
  },
  guid: {
    type: String,
    required: [true, "Please provide a guid for this machine."],
  },
  customer: {
    type: String,
    required: [true, "Please provide the machine customer name"],
    maxlength: [40, "Customer name cannot be more than 40 characters"],
  },
  asset_type: {
    type: String,
    required: [true, "Please provide the machine asset type"],
    maxlength: [40, "Asset type cannot be more than 40 characters"],
  },
  serial_number: {
    type: String,
    required: [true, "Please specify the serial number of your machine."],
    maxlength: [40, "Serial number cannot be more than 40 characters"],
  },
  service_contract: {
    type: Boolean,
    required: true,
  },
  warranty: {
    type: Boolean,
    required: true,
  },
});

export default mongoose.models.CustomerAsset ||
  mongoose.model("CustomerAsset", CustomerAssetSchema);
