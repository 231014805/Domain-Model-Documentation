Business Rules
BR-001: A student can have a maximum of 3 active appointments at any given time.

BR-002: Counselors must set their availability slots at least 24 hours in advance.

BR-003: Appointments can be canceled up to 12 hours before the scheduled time.

BR-004: Feedback can only be submitted after the session has been marked as completed.

BR-005: Notifications are sent automatically upon appointment booking, cancellation, or rescheduling.


#Design Decisions
Encapsulation: All attributes are marked as private (-) to enforce encapsulation, with public methods (+) providing controlled access.

Associations: Clear relationships are established between entities, reflecting real-world interactions (e.g., a student books appointments, a counselor manages sessions).

Multiplicity: Specifies the nature of relationships (e.g., a student can have multiple appointments, but each appointment is linked to one student).

Separation of Concerns: Distinct classes for Appointment, Session, and Feedback ensure modularity and clarity in responsibilities.

#Challenges Faced
Identifying Core Entities: Determining the essential classes without overcomplicating the model required careful analysis of the system's requirements and use cases.

Defining Relationships: Establishing accurate associations and multiplicities between classes was challenging, especially in scenarios involving optional or conditional relationships.

Method Specification: Deciding which methods belonged to which classes necessitated a clear understanding of each class's responsibilities and interactions.
