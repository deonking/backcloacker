const visits = [];
const destinationUrls = ['https://site1.com', 'https://site2.com'];
let currentIndex = 0;

export const saveVisit = async (info, allowed) => {
  visits.push({ ...info, allowed });
};

export const isAllowedTraffic = (ip, userAgent, cookies) => {
  const botUserAgents = ['Googlebot', 'Bingbot', 'AhrefsBot', 'crawler'];
  const blacklistedIPs = ['192.168.1.1'];

  const isBot = botUserAgents.some(bot => userAgent.includes(bot));
  const isBlacklisted = blacklistedIPs.includes(ip);

  return !isBot && !isBlacklisted && cookies?.validSession;
};

export const getRotatedUrl = async () => {
  const url = destinationUrls[currentIndex];
  currentIndex = (currentIndex + 1) % destinationUrls.length;
  return url;
};
