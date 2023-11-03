import { Schema, model } from "mongoose";
import School from '../School'

const schoolSch: Schema = new Schema<School>({
    name: {type: String, required: true,unique: true},
    address: {type: String, required: true},
    createdBy: {type: Number, required: true},
    deletedBy: {type: Number, required: true},
    isDeleted: {type: Boolean, required: true}
}, {timestamps: true})

export default model("schools",schoolSch)