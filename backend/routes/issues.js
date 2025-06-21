const express = require('express');
const router = express.Router();
const { createIssue, updateIssueStatus } = require('../controllers/issues');

router.post('/', createIssue);
router.patch('/:id/status', updateIssueStatus);

module.exports = router;
