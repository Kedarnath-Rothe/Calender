## Overview
This is a dynamic, visually appealing event calendar application built with React.js. The application allows users to manage events by adding, editing, and deleting them for specific dates. It also provides persistence for event data using local storage and incorporates advanced features.

### Features
- **Calendar View:**
  - Displays a calendar grid for the current month with proper alignment.
  - Navigation to previous and next months.
  - Highlights the current day and selected day.
  - Clear distinction for weekends (Sundays).

- **Event Management:**
  - Add events by clicking on a day.
  - Edit or delete existing events.
  - Events include:
    - Event name
    - Start and end times
    - Optional description

- **Event List:**
  - Displays all events for a selected day in a side panel.

- **Data Persistence:**
  - Uses local storage to retain events between page refreshes.

- **Advanced Features:**
  - Highlights Sundays distinctly.

  ## Instructions to Run Locally

### Prerequisites
- Node.js (version 14 or higher) and npm/yarn installed on your system.

### Steps
1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <repository-name>
   npm install
   npm install

   ```markdown
## Deployment Link
The application is deployed on Vercel and can be accessed here:
[Dynamic Event Calendar Application](https://digital-calender.vercel.app/)