# MERN Full-Stack Portfolio

This is a full-stack MERN (MongoDB, Express, React, Node.js) portfolio website demonstrating complete full-stack development capabilities.

## Project Structure

```
peterdekeijzer/
├── src/                    # React frontend
│   ├── components/
│   ├── hooks/
│   └── index.tsx
├── server/                 # Node.js backend
│   ├── models/            # MongoDB schemas
│   ├── routes/            # API endpoints
│   ├── middleware/        # Custom middleware
│   ├── config/            # Database config
│   ├── utils/             # Utility functions
│   └── index.js           # Express server
├── package.json           # Frontend dependencies
└── server/package.json    # Backend dependencies
```

## Tech Stack

### Frontend
- React 19
- TypeScript
- Vite
- CSS3 with animations

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- Nodemailer (email notifications)
- Express Validator (form validation)
- Helmet (security headers)
- CORS

## Features

### Contact Form with Backend Storage
- Real-time form validation on both client and server
- MongoDB storage of all submissions
- Email notifications (to owner and visitor)
- Admin API to view and manage submissions
- XSS protection with Helmet
- Rate limiting ready

### Full CRUD Operations
- Create: Submit new contact forms
- Read: Fetch submissions via admin API
- Update: Mark submissions as read/replied
- Delete: Remove submissions

## Getting Started

### Prerequisites
- Node.js 18+
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Clone and install dependencies**
   ```bash
   npm run setup
   ```

2. **Configure environment variables**
   
   Frontend (`.env.local`):
   ```
   VITE_API_URL=http://localhost:5000/api
   ```

   Backend (`.env`):
   ```
   PORT=5000
   NODE_ENV=development
   FRONTEND_URL=http://localhost:5173
   MONGODB_URI=mongodb://localhost:27017/peterdekeijzer
   EMAIL_SERVICE=gmail
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   OWNER_EMAIL=your-email@example.com
   ```

### Development

**Run both frontend and backend simultaneously:**
```bash
npm run dev:full
```

**Or run separately:**
```bash
# Terminal 1: Frontend
npm run dev

# Terminal 2: Backend
npm run dev:backend
```

Frontend: http://localhost:5173
Backend: http://localhost:5000

### API Endpoints

#### Health Check
- `GET /api/health` - Server status

#### Contact Form
- `POST /api/contact/submit` - Submit contact form
- `GET /api/contact/submissions` - Get all submissions (admin)
- `GET /api/contact/submissions/:id` - Get single submission
- `PATCH /api/contact/submissions/:id/read` - Mark as read
- `DELETE /api/contact/submissions/:id` - Delete submission

### Example Contact Form Submission

```bash
curl -X POST http://localhost:5000/api/contact/submit \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Collaboration",
    "message": "I would like to discuss a project opportunity..."
  }'
```

### Building for Production

```bash
npm run build
```

This creates optimized production builds in both frontend and backend.

## Security Features

- ✅ Helmet.js for HTTP headers security
- ✅ CORS configuration for authorized domains
- ✅ Input validation with express-validator
- ✅ Email field validation
- ✅ Message length limits
- ✅ Environment variable protection
- ✅ MongoDB injection prevention (Mongoose)
- ✅ User agent and IP tracking

## Email Configuration

To enable email notifications:

1. **Gmail Setup** (recommended for development)
   - Enable 2-factor authentication
   - Generate an [App Password](https://myaccount.google.com/apppasswords)
   - Use the app password in `.env` as `EMAIL_PASS`

2. **Other Email Services**
   - Update `EMAIL_SERVICE` in `.env`
   - See [Nodemailer Documentation](https://nodemailer.com/smtp/well-known/) for configuration

## Deployment

### Frontend
- Deployed on GitHub Pages via `npm run deploy`

### Backend
- Can be deployed to Heroku, Railway, Vercel, or any Node.js hosting
- Update `FRONTEND_URL` in production `.env`
- Configure MongoDB Atlas for cloud database

## Admin Dashboard (Future Enhancement)

Protected routes for admin to:
- View all contact submissions
- Mark submissions as read/replied
- Delete spam messages
- Export submission data

## Contributing

This is a portfolio project by Peter de Keijzer.

## License

MIT
