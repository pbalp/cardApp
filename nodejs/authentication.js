const { authenticate } = require('./authenticate')

async function authentication(email, password) {
  // auth with admin
  let options = {
    ldapOpts: {
      url: 'ldaps://ep-dc01.eurecapro.tuc.gr:636',
      // tlsOptions: { rejectUnauthorized: false }
    },
    adminDn: 'cn=Pablo Baltuille,ou=staff,ou=personnel,ou=Domain User Accounts,dc=eurecapro,dc=tuc,dc=gr',
    adminPassword: 'P@bl0!@#',
    userPassword: password,
    userSearchBase: 'ou=Domain User Accounts,dc=eurecapro,dc=tuc,dc=gr',
    usernameAttribute: 'iscExternalMailAddress',
    username: email,
    // starttls: false
  }

  let result = await authenticate(options)
  console.log(`user = ${JSON.stringify(result, null, 2)}`)

  let user = {
    username: result["sAMAccountName"],
    surname: result["sn"],
    name: result["givenName"],
    university: result["iscHomeUniversity"],
    role: result["iscRoleInHomeUniversity"],
    status: result["status"], //"Mr./Ms."
    email: result["iscExternalMailAddress"],
    cardNumber: result["employeeId"],
    expirationDate: "",
  }

  //console.log("USER ", JSON.stringify(user, null, 2))

  return user

  // auth with regular user
  /*options = {
    ldapOpts: {
      url: 'ldap://ldap.forumsys.com',
      // tlsOptions: { rejectUnauthorized: false }
    },
    userDn: 'uid=einstein,dc=example,dc=com',
    userPassword: 'password',
    userSearchBase: 'dc=example,dc=com',
    usernameAttribute: 'uid',
    username: 'einstein',
    // starttls: false
  }

  user = await authenticate(options)
  console.log(`user = ${JSON.stringify(user, null, 2)}`)

  // Getting user group info
  options = {
    ldapOpts: {
      url: 'ldap://ldap.forumsys.com',
    },
    userDn: 'uid=gauss,dc=example,dc=com',
    userPassword: 'password',
    userSearchBase: 'dc=example,dc=com',
    usernameAttribute: 'uid',
    username: 'gauss',
    groupsSearchBase: 'dc=example,dc=com',
    groupClass: 'groupOfUniqueNames',
    groupMemberAttribute: 'uniqueMember',
  }

  user = await authenticate(options)
  console.log(`user = ${JSON.stringify(user, null, 2)}`)*/
}

module.exports.authentication = authentication