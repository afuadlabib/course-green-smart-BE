"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schoolSch = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    createdBy: { type: Number, required: true },
    deletedBy: { type: Number, required: true },
    isDeleted: { type: Boolean, required: true }
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("schools", schoolSch);
