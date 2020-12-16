const { Router } = require('express');
const router = Router();

router.post('/webhooks', (req, res) => {
  console.log("Webhook route hit");
});

module.exports = router;