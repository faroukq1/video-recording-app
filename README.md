# Screen Recording Application

A modern, full-stack screen recording application that allows users to record their screen, webcam, or both, and share the recordings with others. Built with Next.js, React, and PostgreSQL, this application provides a seamless recording experience with a clean, intuitive user interface.

## Features

- 🔴 Screen, webcam, or both recording
- 🎥 High-quality video capture
- 📁 Save and manage recordings
- 🔗 Share recordings with others
- 📱 Responsive design for all devices
- 🔒 Secure authentication
- 🚀 Fast performance with Next.js

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18 or later)
- npm or yarn
- PostgreSQL (v12 or later)

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/screen-recording-app.git
   cd screen-recording-app
   ```

2. **Install dependencies**
   ```bash
   cd client
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the `client` directory with the following variables:

   ```env
   # Database
   DATABASE_URL=postgresql://username:password@localhost:5432/screen_recording
   
   # Authentication (Generate a secure random string)
   AUTH_SECRET=your-secret-key
   
   # NextAuth
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-nextauth-secret
   
   # OAuth Providers (Optional)
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   
   # File Storage (e.g., AWS S3 or similar)
   STORAGE_ACCESS_KEY=your-storage-access-key
   STORAGE_SECRET_KEY=your-storage-secret-key
   STORAGE_BUCKET_NAME=your-bucket-name
   STORAGE_REGION=your-storage-region
   ```

4. **Set up the database**
   - Create a new PostgreSQL database
   - Run database migrations (if any)

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint

## Project Structure

```
screen-recording-app/
├── client/                   # Frontend application
│   ├── app/                  # Next.js app directory
│   ├── components/           # Reusable React components
│   ├── lib/                  # Utility functions and configurations
│   ├── public/               # Static files
│   └── styles/               # Global styles
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, please open an issue in the GitHub repository.
