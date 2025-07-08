const Issue = require('../models/issues');
const sendEmail = require('../utils/sendEmail');

const createIssue = async (req, res) => {
  try {
    const { title, description, phone, email, notifyByEmail } = req.body;

    if (!title || !description || !email) {
      return res.status(400).json({ error: "Title, description, and email are required" });
    }

    const fileUrl = req.file ? `/uploads/${req.file.filename}` : null;

    const issue = await Issue.create({
      title,
      description,
      phone,
      email,
      notifyByEmail: notifyByEmail === 'true',
      fileUrl
    });

    return res.status(201).json({ message: 'Issue submitted successfully', issue });
  } catch (err) {
    console.error('Error submitting issue:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

const getAllIssues = async (req, res) => {
  try {
    const issues = await Issue.find().sort({ createdAt: -1 });
    return res.json(issues);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to fetch issues.' });
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
        issue.email,
        'Civix - Issue Status Update',
        `<p>Your issue <strong>${issue.title}</strong> is now <strong>${newStatus}</strong>.</p>`
      );
    }

    return res.json({ message: 'Status updated successfully.' });
  } catch (err) {
    console.error('Error updating status:', err);
    return res.status(500).json({ error: 'Failed to update status.' });
  }
};

module.exports = { createIssue, getAllIssues, updateIssueStatus };