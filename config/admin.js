module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c63cd63892a5c1758d04bebf12d9694b'),
  },
});
