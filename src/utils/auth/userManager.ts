import { UserManager } from 'oidc-client';
import { HTTP_PARTIAL } from '../../constants';
import { AUTHORITY } from '../../constants/auth';

export const userManager = new UserManager({
  authority: AUTHORITY,
  client_id: 'memoweb-app',
  redirect_uri: `${HTTP_PARTIAL}/auth-callback`,
  silent_redirect_uri: `${HTTP_PARTIAL}/silent-renew`,
  post_logout_redirect_uri: `${HTTP_PARTIAL}`,
  automaticSilentRenew: true,
  scope: 'openid',
  response_type: 'id_token token',
});
