const Issue = require('../models/issues');
const sendEmail = require('../utils/sendEmail');

const createIssue = async (req, res) => {
  try {
    const { title, description, phone,email, notifyByEmail } = req.body;

    const newIssue = await Issue.create({
      title,
      description,
      phone,
      email, // Capture email from frontend
      notifyByEmail: notifyByEmail === 'true' // checkbox value from frontend
    });

    res.status(201).json({ message: 'Issue submitted successfully', issue: newIssue });
  } catch (err) {
    console.error('Error submitting issue:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

//  Get all issues
const getAllIssues = async (req, res) => {
  try {
    const issues = await Issue.find().sort({ createdAt: -1 });
    res.json(issues);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch issues.' });
  }
};

const updateIssueStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { newStatus } = req.body;

    const issue = await Issue.findById(id);
    if (!issue) return res.status(404).json({ error: 'Issue not found' });

    issue.status = newStatus;
    await issue.save();

    if (issue.notifyByEmail && issue.email) {
      await sendEmail(
        issue.email, // Replace with user's actual email
        'Civix - Issue Status Update',
        `<p>Your issue titled <strong>${issue.title}</strong> is now marked as <strong>${newStatus}</strong>.</p>`
      );
    }

    res.json({ message: 'Status updated successfully.' });
  } catch (err) {
    console.error('Error updating status:', err);
    res.status(500).json({ error: 'Failed to update status.' });
  }
};

module.exports = { createIssue ,getAllIssues, updateIssueStatus };
