import * as firebaseAdmin from "firebase-admin";

import serviceAccount from "./secrets/firebase.json";

if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
      ...serviceAccount,
      //@ts-ignore
      private_key: process.env.FIREBASE_PRIVATE_KEY,
    }),
  });
  firebaseAdmin.firestore().settings({ ignoreUndefinedProperties: true });
}

export { firebaseAdmin };
