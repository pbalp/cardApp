import React from 'react';
import { authenticate } from 'ldap-authentication';

async function auth() {
  // auth with admin
  let options = {
    ldapOpts: {
      url: 'ldaps://ep-dc01.eurecapro.tuc.gr:636',
      // tlsOptions: { rejectUnauthorized: false }
    },
    adminDn: 'cn=Pablo Baltuille,ou=staff,ou=personnel,ou=Domain User Accounts,dc=eurecapro,dc=tuc,dc=gr',
    adminPassword: 'P@bl0!@#',
    userPassword: 'P@bl0!@#',
    userSearchBase: 'cn=Pablo Baltuille,ou=staff,ou=personnel,ou=Domain User Accounts,dc=eurecapro,dc=tuc,dc=gr',
    usernameAttribute: 'sAMAccountName',
    username: 'pbaltuille',
    // starttls: false
  }

  let user = await authenticate(options)
  console.log(user)

  // auth with regular user
  options = {
    ldapOpts: {
      url: 'ldaps://ep-dc01.eurecapro.tuc.gr:636',
      // tlsOptions: { rejectUnauthorized: false }
    },
    userDn: 'ou=staff,ou=personnel,ou=Domain User Accounts,dc=eurecapro,dc=tuc,dc=gr',
    userPassword: 'password',
    userSearchBase: 'cn=+fullName+,ou=Domain User Accounts,dc=eurecapro,dc=tuc,dc=gr',
    usernameAttribute: 'uid',
    username: 'einstein',
    // starttls: false
  }

  user = await authenticate(options)
  console.log(user)
}

export default auth