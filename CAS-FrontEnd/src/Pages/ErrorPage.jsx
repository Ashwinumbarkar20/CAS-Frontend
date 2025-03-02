import React from 'react'
import { Link } from 'react-router-dom'
export default function ErrorPage() {
    const styles = {
        container: {
          textAlign: 'center',
          padding: '50px',
          fontFamily: 'Arial, sans-serif',
                   margin_top:"100px "
        },
        heading: {
          fontSize: '100px',
          color: '#ff6347',
        },
        subheading: {
          fontSize: '24px',
          color: '#555',
        },
        message: {
          fontSize: '18px',
          margin: '20px 0',
          color: '#888',
        },
        link: {
          fontSize: '18px',
          color: '#0066cc',
          textDecoration: 'none',
          border: '1px solid #0066cc',
          padding: '10px 20px',
          borderRadius: '5px',
          backgroundColor: '#fff',
          fontWeight: 'bold',
        }
    }
  return (
    <div style={{margin:"120px"}}>
      <div style={styles.container}>
      <h1 style={styles.heading}>404</h1>
      <h2 style={styles.subheading}>Page Not Found</h2>
      <p style={styles.message}>Sorry, the page you're looking for doesn't exist.</p>
      <Link to="/" style={styles.link}>Go Back to Home</Link>
    </div>
    </div>
  )
}
