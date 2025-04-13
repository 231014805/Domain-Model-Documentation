classDiagram
    class Student {
        -studentId: String
        -name: String
        -email: String
        -phone: String
        -status: String
        +register()
        +login()
        +bookAppointment()
        +cancelAppointment()
        +submitFeedback()
    }

    class Counselor {
        -counselorId: String
        -name: String
        -email: String
        -specialization: String
        -availabilityStatus: String
        +login()
        +approveAppointment()
        +conductSession()
        +updateAvailability()
    }

    class Appointment {
        -appointmentId: String
        -date: Date
        -time: Time
        -status: String
        -studentId: String
        -counselorId: String
        +schedule()
        +cancel()
        +reschedule()
        +notifyParticipants()
    }

    class Session {
        -sessionId: String
        -appointmentId: String
        -startTime: DateTime
        -endTime: DateTime
        -notes: String
        +startSession()
        +endSession()
        +recordNotes()
    }

    class Feedback {
        -feedbackId: String
        -sessionId: String
        -studentId: String
        -rating: Integer
        -comments: String
        +submitFeedback()
        +viewFeedback()
    }

    class Notification {
        -notificationId: String
        -recipientId: String
        -message: String
        -timestamp: DateTime
        -status: String
        +sendNotification()
        +markAsRead()
    }

    class AvailabilitySlot {
        -slotId: String
        -counselorId: String
        -date: Date
        -startTime: Time
        -endTime: Time
        -isBooked: Boolean
        +createSlot()
        +updateSlot()
        +deleteSlot()
    }

    Student "1" --> "0..*" Appointment : books
    Counselor "1" --> "0..*" Appointment : manages
    Appointment "1" --> "1" Session : has
    Session "1" --> "1" Feedback : receives
    Student "1" --> "0..*" Feedback : provides
    Counselor "1" --> "0..*" AvailabilitySlot : sets
    AvailabilitySlot "1" --> "0..1" Appointment : reservedFor
    Student "1" --> "0..*" Notification : receives
    Counselor "1" --> "0..*" Notification : receives
