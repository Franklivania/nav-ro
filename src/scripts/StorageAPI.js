import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL
} from "firebase/storage";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDixnfsjPqg7xuzVGviGwnlhwjGP5b1TKo",
    authDomain: "crossart-aea81.firebaseapp.com",
    projectId: "crossart-aea81",
    storageBucket: "crossart-aea81.appspot.com",
    messagingSenderId: "284400004575",
    appId: "1:284400004575:web:1cdbbc7edca95b96db286a",
    measurementId: "G-V3Q83M7ECC"
};

const StorageAPI = {
    upload(blob, name) {
        const firebaseApp = initializeApp(firebaseConfig);
        getAnalytics(firebaseApp);

        // Return a promise that will either resolve or emit an error
        return new Promise((resolve, reject) => {
            console.log('Uploading video ...');
            const storage = getStorage();
            const storageRef = ref(storage, `faces/${name}`);
            const uploadTask = uploadBytesResumable(storageRef, blob);
            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                },
                (error) => {
                    console.log(error);
                    // An error occurred so inform the caller
                    console.error('firebase', error);
                    reject(error);
                },
                async () => {
                    await getDownloadURL(uploadTask.snapshot.ref)
                    resolve(`https://storage.googleapis.com/crossart-aea81.appspot.com/faces/${name}`);
                    // console.log(url);
                }
            );
        });
    }
}

export default StorageAPI