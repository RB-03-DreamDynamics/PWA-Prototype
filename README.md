# PWA-Zenya-Capture

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Run linter
```
npm run lint
```

## Project structure
```
├── public
├── src
│   ├── assets
│   │   ├── fonts
│   │   ├── images
|   |   ├── main.scss
│   │   └── icons
│   ├── components
│   │   ├── Auth
│   │   ├── Forms
│   │   |   ├── form-fields
|   |   ├── icons
│   │   └── Layout
│   ├── router
|   ├── stores
│   ├── views
│   ├── App.vue
│   ├── main.ts
|   ├── registerServiceWorker.ts
|   └── service-worker.js
├── index.html
├── package.json
├── tsconfig.json
├── README.md
└── vue.config.js
```

### Deploy PWA to play store
To deploy a Vue.js Progressive Web App (PWA) to the Play Store, you'll need to follow several steps. Here's a general overview of the process:

- Create a Production Build:   
  Generate a production-ready build of your Vue.js PWA. In your Vue.js project directory, run the command npm run build to build the optimized production version of your app.

- Set Up a Google Play Developer Account:   
  Create an account on the Google Play Developer Console (https://play.google.com/apps/publish/) if you don't have one already. There is a one-time registration fee to publish apps on the Play Store.

- Generate an APK or Android App Bundle:   
  To publish your PWA on the Play Store, you need to package it as an Android application. You can do this by converting your PWA into either an APK (Android application package) or an Android App Bundle (AAB), which is a publishing format that Google recommends for smaller app sizes. There are various tools available to achieve this, such as the vue-cli-service or tools like cordova or Capacitor if you want to integrate additional native features. Check the official Vue.js documentation for more details on these tools.

- Configure the Android Manifest:  
  The Android manifest file is required for publishing an Android application. Ensure that your manifest file includes all the necessary permissions, app name, icons, and other relevant details. You can find the AndroidManifest.xml file in the build output directory after generating the APK or AAB.

- Sign Your App:  
  You'll need to sign your APK or AAB with a digital certificate to verify your identity as the developer. Follow the instructions provided by Google to generate a signing key and sign your application. This step is crucial for app updates in the future.
  
- Create a Play Store Listing:   
  Prepare all the necessary assets for your app's Play Store listing, including icons, screenshots, descriptions, and promotional materials. These assets will be used to showcase and promote your app in the Play Store.
    Upload Your App to the Play Console: Log in to the Google Play Developer Console and create a new app listing. Fill in the required information, such as the app title, description, screenshots, and other details. Then, upload your signed APK or AAB file.

- Test and Publish:     
  Before publishing your app, it's essential to test it thoroughly. You can create a closed or open beta test track in the Play Console to distribute your app to a limited audience for testing. Once you're confident that your app is working correctly, you can proceed with the publishing process. After submitting your app, it will go through a review process by Google, which can take some time.

- Release Updates:   
  After your app is published, you can release updates by uploading new APKs or AABs whenever you have new features or bug fixes. Increment your app's version number and follow the Play Console guidelines to ensure a smooth update process for your users.
