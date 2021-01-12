# paytm-allinonesdk-capacitor
capacitor plugin for paytm payment gateway

# Steps to install capacitor-paytm-allinonesdk plugin for android

1. install plugin using **npm i https://github.com/ZimbaroosGeeks/paytm-allinonesdk-capacitor.git**

2. import import **in.zimbaroosgeeks.paytmAllinonesdk.AllInOneSDK; ** and add ** add(AllInOneSDK.class);** to the init function of **MainActivity.java** located at project-root/android/app/src/main/java/**your-package-name**

3. Add the line below to ‘repositories’ section of your project-root/android/build.gradle.
  maven {
    url "https://artifactory.paytm.in/libs-release-local"
  }
  
4. Add the line below to 'dependencies' section of your project-root/android/app/build.gradle.
  implementation 'com.paytm.appinvokesdk:appinvokesdk:1.5.3'
  
# Steps to use capacitor-paytm-allinonesdk plugin

1. import { Plugins } from '@capacitor/core';
   import 'capacitor-paytm-allinonesdk';
   import { PaymentIntentModel } from 'capacitor-paytm-allinonesdk';

   const { AllInOneSDK } = Plugins;
    
2. create object of PaymentIntentModel

3. call the startTransaction method
   AllInOneSDK.startTransaction(transactionOptions)
   .then(paymentResult => {
     console.log(paymentResult);
   })
   .catch(err => {
     console.error(err);
   });
