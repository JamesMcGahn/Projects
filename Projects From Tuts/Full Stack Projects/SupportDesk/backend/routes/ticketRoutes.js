const express = require('express');
const router = express.Router();
const { getTicket, updateTicket, deleteTicket, getTickets, createTicket } = require('../controller/ticketController');
const { protect } = require('../middleware/authMiddleware');

const noteRouter = require('../routes/noteRoutes');
router.use('/:ticketId/notes', noteRouter);

router.route('/').get(protect, getTickets).post(protect, createTicket);
router.route('/:id').get(protect, getTicket).delete(protect, deleteTicket).put(protect, updateTicket);

module.exports = router;
