import React, { useEffect, useState } from 'react';

export default function Certificate() {
  const [certificates, setCertificates] = useState([]); // State to store certificates
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    // Fetch certificates from the API
    fetch("https://portfolio-api-lj21.onrender.com")
      .then((response) => response.json()) // Correctly parse the JSON response
      .then((data) => {
        setCertificates(data); // Update the state with the fetched data
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((err) => {
        setError(err.message); // Handle any errors
        setLoading(false); // Stop loading on error
      });
  }, []); // Empty dependency array to run the effect only once on component mount

  if (loading) {
    return <div>Loading...</div>; // Show a loading message while fetching data
  }

  if (error) {
    return <div>Error: {error}</div>; // Show error message if there's an error
  }

  return (
    <div>
      <h1>Certificates</h1>
      <ul>
        {certificates.map((certificate, index) => (
          <li key={index}>
            {/* Adjust the way you display certificates based on the data structure */}
            <h3>{certificate.name}</h3> {/* Assuming 'name' is a property */}
            <p>{certificate.description}</p> {/* Assuming 'description' is a property */}
          </li>
        ))}
      </ul>
    </div>
  );
}
