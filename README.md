💻 Round 1 Task – Full Stack Intern Portal

This project is a basic **Full Stack Intern Dashboard** built using **HTML, TailwindCSS, and Node.js/Express (optional Firebase)**. It fulfills all the requirements from the Round 1 assignment.

---

Please Visit this url to start the demo -> https://teju0051.github.io/intern-portal/frontend/index.html

Features Implemented

Frontend (HTML + Tailwind CSS)
- [x] ✅ **Dummy Login Page** – No authentication, static entry point.
- [x] ✅ **Intern Dashboard** – Displays:
  - Intern Name
  - Dummy Referral Code (e.g., `tejas2025`)
  - Total Donations Raised
  - Rewards/Unlockables (Static List)
- [x] ✅ **Responsive Design** – Works on all screen sizes
- [x] ✅ **Sidebar Navigation** – Vertical panel with icons and route links

Bonus: Leaderboard Page
- [x] ✅ Fully styled `leaderboard.html`
- [x] ✅ Displays mock intern rankings and donations
- [x] ✅ Can be backed by static JSON, Firebase, or MongoDB

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

/index.html              ← Login Page
/dashboard.html          ← Intern Dashboard
/leaderboard.html        ← Leaderboard
/server.js               ← REST API Backend 
/README.md               ← This file


HOW TO RUN?

npm install
node server.js
Visit: http://localhost:3000/api/intern
