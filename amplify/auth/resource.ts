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
        clientId: secret('14813931085-a4b5pqt26ca155bibu9ps0va0hb8egbe.apps.googleusercontent.com'),
        clientSecret: secret('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'),
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
