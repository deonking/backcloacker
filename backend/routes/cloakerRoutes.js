import express from 'express';
import geoip from 'geoip-lite';
import { saveVisit, isAllowedTraffic, getRotatedUrl } from '../services/cloakerService.js';

const router = express.Router();

router.get('/verifica', async (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const userAgent = req.headers['user-agent'];
  const geo = geoip.lookup(ip);

  const visitInfo = {
    ip,
    userAgent,
    country: geo?.country,
    city: geo?.city,
    isp: req.headers['via'] || 'desconhecido',
    timestamp: new Date()
  };

  const isAllowed = isAllowedTraffic(ip, userAgent, req.cookies);
  await saveVisit(visitInfo, isAllowed);

  if (isAllowed) {
    return res.redirect(302, await getRotatedUrl());
  } else {
    return res.redirect(302, 'https://seudominio.com/fake.html');
  }
});

export default router;
