const request = require('supertest');
const express = require('express');

const app = express();
app.use(express.json());

// Dummy route for test
app.post('/api/auth/register', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Missing credentials' });
  }
  return res.status(201).json({ token: 'dummy-jwt-token' });
});

describe('POST /api/auth/register', () => {
  it('should return 201 and a token when valid data is sent', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({ email: 'test@example.com', password: 'password123' });
    
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('token');
  });
});
