const express = require('express');
const router = express.Router();
const issueController = require('../controllers/issues');
const { verifyToken, isAdmin } = require('../middlewares/validate');

// GET all issues
router.get('/', issueController.getAllIssues);


router.post('/', upload.single('file'), createIssue);
router.patch('/:id/status', updateIssueStatus);



router.post('/', upload.single('file'), createIssue);
router.patch('/:id/status', updateIssueStatus);



/**
 * @swagger
 * components:
 *   schemas:
 *     Issue:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - location
 *       properties:
 *         title:
 *           type: string
 *           description: Issue title
 *         description:
 *           type: string
 *           description: Issue description
 *         location:
 *           type: string
 *           description: Issue location
 *         category:
 *           type: string
 *           description: Issue category
 *         status:
 *           type: string
 *           enum: [pending, in-progress, resolved]
 *           description: Issue status
 *     IssueResponse:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         title:
 *           type: string
 *         description:
 *           type: string
 *         location:
 *           type: string
 *         category:
 *           type: string
 *         status:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 */

/**
 * @swagger
 * /issues:
 *   post:
 *     summary: Create a new issue
 *     tags: [Issues]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Issue'
 *     responses:
 *       201:
 *         description: Issue created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/IssueResponse'
 *       400:
 *         description: Validation error
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
router.post('/',issueController.createIssue);


/**
 * @swagger
 * /issues/{id}/status:
 *   patch:
 *     summary: Update issue status
 *     tags: [Issues]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Issue ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 enum: [pending, in-progress, resolved]
 *     responses:
 *       200:
 *         description: Issue status updated successfully
 *       400:
 *         description: Invalid status
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Issue not found
 *       500:
 *         description: Server error
 */
router.patch('/:id/status',verifyToken, isAdmin, issueController.updateIssueStatus);


module.exports = router;
