import { Schema, model } from "mongoose";

const schoolSch: Schema = new Schema<School>({
    name: {type: String, required: true,unique: true},
    address: {type: String, required: true},
    deletedBy: {type: String, required: true},
    createdBy: {type: String, required: true},
    isDeleted: {type: Boolean, required: true}
}, {timestamps: true})

export default model("schools",schoolSch)