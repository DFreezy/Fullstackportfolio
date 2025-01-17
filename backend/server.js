const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample data array to simulate a database
let certificates = [
  { id: 1, name: "CodeSpace", year: 2024 },
  { id: 2, name: "React Bootcamp", year: 2023 },
];

// CREATE: Add a new certificate
app.post('/api/certificates', (req, res) => {
  const { name, year } = req.body;

  if (!name || !year) {
    return res.status(400).json({ error: 'Name and year are required' });
  }

  const newCertificate = {
    id: certificates.length + 1, // Generate a new ID (you can use UUID for better uniqueness)
    name,
    year,
  };

  certificates.push(newCertificate);
  res.status(201).json(newCertificate); // Respond with the newly added certificate
});

// READ: Get all certificates
app.get('/api/certificates', (req, res) => {
  res.status(200).json(certificates);
});

// READ: Get a single certificate by ID
app.get('/api/certificates/:id', (req, res) => {
  const { id } = req.params;
  const certificate = certificates.find(cert => cert.id === parseInt(id));

  if (!certificate) {
    return res.status(404).json({ error: 'Certificate not found' });
  }

  res.status(200).json(certificate);
});

// UPDATE: Update an existing certificate by ID
app.put('/api/certificates/:id', (req, res) => {
  const { id } = req.params;
  const { name, year } = req.body;

  const certificate = certificates.find(cert => cert.id === parseInt(id));

  if (!certificate) {
    return res.status(404).json({ error: 'Certificate not found' });
  }

  // Update fields
  certificate.name = name || certificate.name;
  certificate.year = year || certificate.year;

  res.status(200).json(certificate); // Return updated certificate
});

// DELETE: Delete a certificate by ID
app.delete('/api/certificates/:id', (req, res) => {
  const { id } = req.params;
  const index = certificates.findIndex(cert => cert.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ error: 'Certificate not found' });
  }

  // Remove the certificate
  certificates.splice(index, 1);
  res.status(204).send(); // No content (deleted)
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
