💻 Round 1 Task – Full Stack Intern Portal

This project is a basic **Full Stack Intern Dashboard** built using **HTML, TailwindCSS, and Node.js/Express (optional Firebase)**. It fulfills all the requirements from the Round 1 assignment.

---

Please Visit this url to start the demo -> https://teju0051.github.io/intern-portal/frontend/index.html

Features Implemented

Frontend (HTML + Tailwind CSS)
- [x]  **Dummy Login Page** – No authentication, static entry point.
- [x]  **Intern Dashboard** – Displays:
  - Intern Name
  - Dummy Referral Code (e.g., `tejas2025`)
  - Total Donations Raised
  - Rewards/Unlockables (Static List)
- [x]  **Responsive Design** – Works on all screen sizes
- [x]  **Sidebar Navigation** – Vertical panel with icons and route links

Bonus: Leaderboard Page
- [x]  Fully styled `leaderboard.html`
- [x]  Displays mock intern rankings and donations
- [x]  Can be backed by static JSON, Firebase, or MongoDB

---

Backend (REST API)

REST API
- Built with **Node.js + Express**
- Route: `GET /api/intern`
- Returns dummy intern data as JSON:
{
  "name": "Tejas Shinde",
  "referralCode": "tejas2025",
  "donationsRaised": 12500
}

FOLDER STRUCTURE

/index.html              ← Login Page <br> <br>
/dashboard.html          ← Intern Dashboard <br> <br>
/leaderboard.html        ← Leaderboard <br> <br>
/server.js               ← REST API Backend  <br> <br>
/README.md               ← This file <br> <br>


HOW TO RUN?

npm install <br> <br>
node server.js <br> <br>
Visit: http://localhost:3000/api/intern <br> <br>
