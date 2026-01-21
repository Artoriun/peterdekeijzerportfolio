# MERN Full-Stack Setup Guide

## What Was Added

Your portfolio has been transformed from a purely React frontend into a complete MERN full-stack application. Here's what's new:

### Backend Structure (`/server`)
```
server/
├── index.js                      # Express server entry point
├── package.json                  # Backend dependencies
├── config/
│   └── database.js              # MongoDB connection setup
├── models/
│   └── ContactSubmission.js      # MongoDB schema for contact submissions
├── routes/
│   ├── contact.js               # Contact form API endpoints
│   └── health.js                # Health check endpoint
├── middleware/
│   └── validation.js            # Form validation middleware
├── utils/
│   └── email.js                 # Email notification service
└── .env.example                 # Environment variables template
```

### Frontend Updates (`/src`)
- **New Hook**: `src/hooks/useContactForm.ts` - Manages contact form API calls
- **Updated Component**: `Contact.tsx` - Now uses backend API instead of static form
- **New Styles**: Form success/error messages with animations

## Quick Start

### 1. Install Dependencies
```bash
npm run setup
```

This installs both frontend and backend dependencies.

### 2. Configure MongoDB

**Option A: Local MongoDB**
```bash
# On macOS with Homebrew
brew services start mongodb-community
```

**Option B: MongoDB Atlas (Cloud)**
1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free cluster
3. Get your connection string
4. Update `.env` with your connection string

### 3. Set Up Environment Variables

**Backend** (`server/.env`):
```bash
cp server/.env.example server/.env
```

Then edit `server/.env` with:
- Your MongoDB connection string
- Email credentials (Gmail recommended)

**Frontend** (`.env.local`):
```bash
cp .env.example .env.local
```

### 4. Run Development Environment

**Option A: Run both simultaneously**
```bash
npm run dev:full
```

**Option B: Run separately**
```bash
# Terminal 1
npm run dev

# Terminal 2
npm run dev:backend
```

### 5. Test the Contact Form

1. Open http://localhost:5173
2. Navigate to the Contact section
3. Fill out and submit the form
4. You should see a success message
5. Check MongoDB for the stored submission

## Email Setup (Optional but Recommended)

### Gmail Configuration
1. Enable 2-factor authentication on your Google account
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. In `server/.env`:
   ```
   EMAIL_SERVICE=gmail
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   OWNER_EMAIL=your-email@example.com
   ```
4. Restart the server

## API Endpoints

### Public Endpoints
- `POST /api/contact/submit` - Submit contact form
- `GET /api/health` - Check server status

### Admin Endpoints (Future Authentication)
- `GET /api/contact/submissions` - Get all submissions
- `GET /api/contact/submissions/:id` - Get single submission
- `PATCH /api/contact/submissions/:id/read` - Mark as read
- `DELETE /api/contact/submissions/:id` - Delete submission

## Testing the Backend

### Health Check
```bash
curl http://localhost:5000/api/health
```

### Submit Contact Form
```bash
curl -X POST http://localhost:5000/api/contact/submit \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test",
    "message": "This is a test message with at least 10 characters"
  }'
```

### Get Submissions (Admin)
```bash
curl http://localhost:5000/api/contact/submissions
```

## Project Structure Overview

```
peterdekeijzer/
├── src/                      # React frontend
│   ├── components/
│   ├── hooks/
│   │   └── useContactForm.ts # NEW - Hook for API calls
│   └── ...
├── server/                   # NEW - Node.js backend
│   ├── index.js
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── utils/
│   ├── package.json
│   └── .env
├── package.json              # UPDATED - Added scripts for full-stack
└── FULLSTACK_README.md       # NEW - Complete documentation
```

## What This Demonstrates

✅ **Full-Stack Development**: Frontend + Backend + Database
✅ **React Hooks**: Custom hooks for API state management
✅ **Node.js/Express**: RESTful API design
✅ **MongoDB/Mongoose**: Database schema and queries
✅ **Form Validation**: Both client and server-side
✅ **Email Integration**: Nodemailer for notifications
✅ **Security**: Helmet, CORS, input sanitization
✅ **Error Handling**: Comprehensive error responses
✅ **Environment Management**: Secure configuration

## Deployment

### Frontend (GitHub Pages)
```bash
npm run deploy
```

### Backend (Heroku Example)
```bash
cd server
heroku create your-app-name
heroku config:set MONGODB_URI=your-atlas-url
heroku config:set EMAIL_USER=your-email
git push heroku main
```

## Next Steps

Possible enhancements:
1. Add JWT authentication for admin dashboard
2. Create protected admin dashboard to view submissions
3. Add rate limiting to prevent spam
4. Implement email templates
5. Add submission filtering and search
6. Set up automated backups

## Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running locally or check Atlas connection string
- Verify `MONGODB_URI` in `.env`

### Email Not Sending
- Check credentials in `.env`
- For Gmail, ensure App Password is used (not regular password)
- Check `server/logs` for errors

### CORS Error
- Ensure `FRONTEND_URL` matches your frontend URL in `server/.env`
- Default is `http://localhost:5173`

### API Not Responding
- Ensure backend is running: `npm run dev:backend`
- Check if port 5000 is available
- Review backend logs for errors

## Scripts Reference

```bash
# Frontend only
npm run dev          # Start frontend dev server
npm run build        # Build for production

# Full-stack
npm run dev:full     # Start both frontend and backend
npm run dev:backend  # Start backend only

# Setup
npm run setup        # Install all dependencies

# GitHub Pages
npm run deploy       # Deploy frontend to GitHub Pages
```

---

Congratulations! You now have a professional MERN full-stack portfolio that showcases your complete skill set as a full-stack engineer! 🚀
