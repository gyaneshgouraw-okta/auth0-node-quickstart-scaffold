import { AuthenticationClient, ManagementClient } from 'auth0'

const token = "<TOKEN>"
const auth0 = new ManagementClient({
    domain: '<YOUR_DOMAIN>',
    token: token,
});



// const data = await auth0.refreshTokens.get({id:'1'})
const data = await auth0.users.getSessions({user_id:"8"})