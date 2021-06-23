export const getPermission = (rules: string[]) => {
  const user = { role: 'superadmin' };

  return rules.includes(user.role);
};
