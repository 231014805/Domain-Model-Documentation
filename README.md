# Domain-Model-Documentation
Entity	Attributes	Methods	Relationships
Student	studentId, name, email, phone, status	register(), login(), bookAppointment(), cancelAppointment(), submitFeedback()	One-to-many with Appointment; One-to-many with Feedback
Counselor	counselorId, name, email, specialization, availabilityStatus	login(), approveAppointment(), conductSession(), updateAvailability()	One-to-many with Appointment; One-to-many with Session
Appointment	appointmentId, date, time, status, studentId, counselorId	schedule(), cancel(), reschedule(), notifyParticipants()	Many-to-one with Student; Many-to-one with Counselor; One-to-one with Session
Session	sessionId, appointmentId, startTime, endTime, notes	startSession(), endSession(), recordNotes()	One-to-one with Appointment; One-to-one with Feedback
Feedback	feedbackId, sessionId, studentId, rating, comments	submitFeedback(), viewFeedback()	One-to-one with Session; Many-to-one with Student
Notification	notificationId, recipientId, message, timestamp, status	sendNotification(), markAsRead()	Many-to-one with Student or Counselor
AvailabilitySlot	slotId, counselorId, date, startTime, endTime, isBooked	createSlot(), updateSlot(), deleteSlot()	Many-to-one with Counselor; One-to-one with Appointment (when booked)
