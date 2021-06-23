const dev = {
  FB_APP_ID: '368782804096190',
  SENTRY_DSN: 'https://bd93d579ac1b4cafba9543251c2779d4@sentry.io/1376000',
  ENVIRONMENT: 'development',
  VIDEO_CALL_URL: 'https://dev.video.memoweb.aptus.be',
  SSO_URL: 'https://memoweb-keycloak.azurewebsites.net/auth/realms/memoweb-dev',
  REALM_URI: '/auth/realms/memoweb',
  API_URL: 'https://dev.app.memoweb.aptus.be',
  SUB_URL: 'dev-memoweb-api.azurewebsites.net',
  WEBPUSH_PUBLIC_KEY:
    'BOO380Nz76IQ45zlr2glMpdts5VCPpnJWCtDf7ykTWmUD3t4D61AFmgj-jL5i6x271o3OqRChI_33q42tW98Zwk',
};

const stage = {
  FB_APP_ID: '498147387626924',
  SENTRY_DSN: 'https://bd93d579ac1b4cafba9543251c2779d4@sentry.io/1376000',
  ENVIRONMENT: 'production',
  VIDEO_CALL_URL: 'https://acc.video.memoweb.aptus.be',
  SSO_URL: 'https://acc.app.memoweb.aptus.be/auth/realms/memoweb-acc',
  API_URL: 'https://acc.app.memoweb.aptus.be',
  REALM_URI: '/auth/realms/memoweb-acc',
  SUB_URL: 'acc-memoweb-api.azurewebsites.net',
  WEBPUSH_PUBLIC_KEY:
    'BK_o6Ummw6nDwr2YR5plMCeMJEve_bGI8rn52uc8ndmQC2M_jE66c_q2I6AU3Z5F3MARKxHBGcP2zbuTtmuwBBU',
};

const prod = {
  FB_APP_ID: '1563515753780549',
  SENTRY_DSN: 'https://bd93d579ac1b4cafba9543251c2779d4@sentry.io/1376000',
  ENVIRONMENT: 'production',
  VIDEO_CALL_URL: 'https://video.memoweb.be',
  SSO_URL: 'https://app.memoweb.aptus.be/auth/realms/memoweb',
  API_URL: 'https://memoweb.memo.be',
  REALM_URI: '/auth/realms/memoweb',
  SUB_URL: 'prd-memoweb-api.azurewebsites.net',
  WEBPUSH_PUBLIC_KEY:
    'BElhC3ZM1IMbPVAewW8IP8ONoVTkEoAWnsY_7lG7oFryLucTpDVzb5WrBfXiBG3xDnyATudGg-TNmIPUGX399aY',
};

const env = {
  dev,
  stage,
  prod,
};

type DevType = typeof dev;

export interface IEnvironment extends DevType {
  ENVIRONMENT: 'development' | 'production';
}

const envMode = (process.env.REACT_APP_ENVIRONMENT || 'prod') as keyof typeof env;

export default env[envMode] as IEnvironment;
