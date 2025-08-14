# Onboarding Guide

Welcome to the AI Learning Platform team! This guide will help you get started quickly and follow best practices.

## 1. Project Setup

- Clone the repository from GitHub.
- Install dependencies: `npm install`
- Set up Firebase:
  - Create a Firebase project at https://console.firebase.google.com
  - Add a web app and copy your config keys
  - Enable Authentication (Email/Password or other providers)
  - In Firestore, create a `users` collection to store roles
  - Set custom claims for roles using Firebase Admin SDK (see Firebase docs)
  - Create a `.env.local` file from `.env.local.example` and paste your Firebase Web App config values into the `NEXT_PUBLIC_FIREBASE_*` keys
  - The app reads these automatically from `process.env` in `src/lib/firebase.ts`
- Start the development server: `npm run dev`
- Run tests: `npm test`

## 2. Development Standards

- Use React 19, Next.js 15, TypeScript, and Tailwind CSS.
- Follow the coding style enforced by ESLint and Prettier.
- Write unit and integration tests for all components and pages.
- Use glassmorphism, accent gradients, and responsive layouts for UI.

## 3. Workflow

- Create a new branch for each feature or bugfix.
- Open a pull request (PR) for code review.
- Ensure all tests pass before merging.
- Document your changes in the PR description.

## 4. Collaboration

- Communicate via Slack/Teams for questions and updates.
- Attend bi-weekly knowledge sharing sessions.
- Participate in code reviews and provide constructive feedback.

## 5. Resources

- [README.md](./README.md): Project overview and setup
- [KNOWLEDGE_TRANSFER_PLAN.md](./KNOWLEDGE_TRANSFER_PLAN.md): Team learning and mentorship
- Shared wiki: Patterns, solutions, and FAQs

## 6. Contacts

- Product Lead: [Name, Email]
- Senior React Mentor: [Name, Email]
- QA Lead: [Name, Email]

---

If you have any questions, reach out to your mentor or the product lead. Welcome aboard!
