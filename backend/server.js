import express from 'express';
import { mongoDBCon } from './src/config/mongodbConnect.js';
import authRoutes from './src/api/routes/auth/authRoutes.js';
import emailSequenceRoutes from './src/api/routes/emailSequence/emailSeqRoutes.js';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

dotenv.config();
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Log JWT to verify if it's loaded from .env
console.log(process.env.JWT);

console.log('Starting server initialization...');

// Middleware
app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET , POST , PUT , DELETE',
    allowedHeaders: 'Content-Type, Authorization'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'frontend','build')));

console.log('Middleware set up');

app.get('*' , (req,res)=> {
    res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
})

// Health check route
app.get('/api/health', (req, res) => {
    console.log('Health check route accessed');
    res.json({ status: 'ok', message: 'Server is running', dbStatus: app.locals.dbConnected ? 'connected' : 'disconnected' });
});

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the API server. Use /api/* routes to access the API.');
});

// Debug route
app.use('*', (req, res, next) => {
    console.log('Accessed path:', req.method, req.path);
    next();
});

// Connect to MongoDB
app.locals.dbConnected = false;
mongoDBCon()
    .then(() => {
        console.log('MongoDB connected successfully');
        app.locals.dbConnected = true;
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });

console.log('MongoDB connection attempt initiated');

// Routes
console.log('Setting up routes...');
app.use('/api/auth', authRoutes);
app.use('/api/emailsequence', emailSequenceRoutes);
console.log('Routes set up');

// 404 handler
app.use((req, res) => {
    console.log('404 Not Found:', req.method, req.path);
    res.status(404).json({ error: 'Not Found' });
});

// Error handler
app.use((err, req, res, next) => {
    console.error('Unhandled error:', err);
    res.status(500).json({ error: 'Internal Server Error', message: err.message });
});

console.log('Server initialization complete');

// Start the server and listen on the specified port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
