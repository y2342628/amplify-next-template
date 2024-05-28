import { defineAuth,secret  } from "@aws-amplify/backend";

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
    externalProviders: {
      google: {
        clientId: secret('googleClientId'),
        clientSecret: secret('googleSecret'),
        scopes: ['email']
      },
      callbackUrls: [
        'http://localhost:3000/',
        "https://main.d3afqg86srkfcd.amplifyapp.com/"
      ],
      logoutUrls: ['http://localhost:3000/', "https://main.d3afqg86srkfcd.amplifyapp.com/"],
    }
  },
});
