import environment from 'environment';
import { HTTP_PARTIAL } from '.';

export const AUTHORITY_PART = '/.well-known/openid-configuration';
export const AUTHORITY_FRONT_PART =
  environment.ENVIRONMENT !== 'development' ? HTTP_PARTIAL : environment.SSO_URL;
export const AUTHORITY = `${AUTHORITY_FRONT_PART}${AUTHORITY_PART}`;
