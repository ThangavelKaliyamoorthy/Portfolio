require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer'); // Import Nodemailer
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const Project = require('./models/Project');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
const dbURI = process.env.MONGO_URI || 'mongodb://localhost:27017/tk690';

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error("MongoDB connection error:", err);
});

app.use('/api/auth', authRoutes);

app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).send("Error fetching projects: " + err);
  }
});


app.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL, 
      pass: process.env.EMAIL_PASSWORD, 
    }
  });
  

  const mailOptions = {
    from: email,
    to: process.env.EMAIL, 
    subject: `Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: 'Failed to send message.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
