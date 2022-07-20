"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const team_routes_1 = __importDefault(require("./api/teams/team.routes"));
const routes = (0, express_1.Router)();
routes.use('/teams', team_routes_1.default);
exports.default = routes;
