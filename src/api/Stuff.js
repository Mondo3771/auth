const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());
const domain = "dev-1ycr2f4brea4mqn0.us.auth0.com"
const getAuth0Token = async () => {
  const response = await axios.post(`https://${domain}/oauth/token`, {
    client_id: `Re9lqXCcNYY2RuF4xhbNtNdyN3wdYsmc`,
    client_secret: `HA5q43MvPquaMAPXe8XsNODTTkG4_NcSuYBDt7LZ4C_b5xoZoUdxWqOsZlHf7w-a`,
    audience: `https://${domain}/api/v2/1`,
    grant_type: 'client_credentials'
  });

  return response.data.access_token;
};

app.get('/user/:userId/roles', async (req, res) => {
  const token = await getAuth0Token();
  const response = await axios.get(`https://${domain}/api/v2/users/${req.params.userId}/roles`, {
    headers: { Authorization: `Bearer ${token}` }
  });

  res.json(response.data);
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});