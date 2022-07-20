"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TEAMS = [
    { id: 1, name: 'Real Madrid', league: 'La Liga' },
    { id: 2, name: 'Barcelona', league: 'La Liga' },
    { id: 3, name: 'Manchester United', league: 'Premier League' },
    { id: 4, name: 'Liverpool', league: 'Premier League' },
    { id: 5, name: 'Arsenal', league: 'Premier League' },
    { id: 6, name: 'Inter', league: 'Serie A' },
    { id: 7, name: 'Milan', league: 'Serie A' },
    { id: 8, name: 'Juventus', league: 'Serie A' },
];
const router = (0, express_1.Router)();
router
    .route('/')
    .get((req, res) => {
    res.send(TEAMS);
});
exports.default = router;
