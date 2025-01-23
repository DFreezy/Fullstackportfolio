const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Set up storage for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Specify where to store the uploaded images
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Use the current time as filename
  },
});

// Filter for image files (optional)
const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true); // Accept the file
  } else {
    cb(new Error('Only image files are allowed!'), false); // Reject other file types
  }
};

// Create an upload instance with storage configuration
const upload = multer({ storage, fileFilter });

// Sample route
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// CRUD Routes for Images

// 1. Create - Upload an image
app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  res.status(201).json({ message: 'Image uploaded successfully!', file: req.file });
});

// 2. Read - Get all images (returns the list of uploaded files)
app.get('/images', (req, res) => {
  const fs = require('fs');
  const dirPath = './uploads/';
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      return res.status(500).send('Error reading directory.');
    }
    res.status(200).json({ images: files });
  });
});

// 3. Update - Update an image (replace the image)
app.put('/update/:filename', upload.single('image'), (req, res) => {
  const oldFilename = req.params.filename;
  const newFile = req.file;

  if (!newFile) {
    return res.status(400).send('No file uploaded.');
  }

  // Delete the old file
  const fs = require('fs');
  fs.unlink(`./uploads/${oldFilename}`, (err) => {
    if (err) {
      return res.status(500).send('Error deleting the old file.');
    }

    // Send back the new image details
    res.status(200).json({ message: 'Image updated successfully!', file: newFile });
  });
});

// 4. Delete - Delete an image
app.delete('/delete/:filename', (req, res) => {
  const filename = req.params.filename;

  const fs = require('fs');
  fs.unlink(`./uploads/${filename}`, (err) => {
    if (err) {
      return res.status(500).send('Error deleting file.');
    }
    res.status(200).json({ message: 'Image deleted successfully.' });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
