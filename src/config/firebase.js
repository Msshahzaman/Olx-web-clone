import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore,collection, addDoc } from "firebase/firestore";
import { getStorage, ref,uploadBytes,getDownloadURL  } from "firebase/storage";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyD1iAetgzSQ0bgSZ2j3elP5i2VSmEYQBvw",
    authDomain: "olx-app-complete.firebaseapp.com",
    projectId: "olx-app-complete",
    storageBucket: "olx-app-complete.appspot.com",
    messagingSenderId: "1025893989251",
    appId: "1:1025893989251:web:380735b270e579200d54b6"
  };



  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage = getStorage(app);



//   Login 
export async function login(userinfo){


    try{
        const {email,password} = userinfo
      await  signInWithEmailAndPassword(auth, email, password)
alert('login success')

    } catch(e){
        alert(e.message)
        throw e;
    }

    // const {email,password} = userinfo


//     signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })90
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });



}

// signup

export async function register(userinfo){



    try{
    const {email,password,fname,age} = userinfo
  await createUserWithEmailAndPassword(auth, email, password)
  await addDoc(collection(db, "userinfo"), {
    fname,
    age,
    email,
  });



  alert('succes register')

    } catch(e){

        alert(e.message)
          }
        
        

    // const {email,password} = userinfo



    // createUserWithEmailAndPassword(auth, email, password)
    // .then((userCredential) => {
    //   // Signed up 
    //   const user = userCredential.user;
    //   // ...
    // })
    // .catch((error) => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   // ..
    // });

}



export async function sellitem(ads){



    try{
      const {tital,desc,price,image} = ads

      const storageRef = ref(storage, `adsPost/${image.name}`);

       await uploadBytes(storageRef, image)

       const url = await getDownloadURL(storageRef)

      await addDoc(collection(db,"adsPost"), {
          tital,
          desc,
          price,
          imageUrl: url,
        });
      
  alert('add successfully posted')
  
  
    } catch(e){
  
  alert(e.message)
    }

  
  }
 
  export async function getForm() {
    const querySnapshot = await getDocs(collection(db, "form"));
    const form = [];
    querySnapshot.forEach((doc) => {
      const userInfo = doc.data();
      userInfo.id = doc.id;
  
      form.push(userInfo);
    });
  
    return form;
  }

  export async function ProfileData() {
    const querySnapshot = await getDocs(collection(db, "users"));
    const form = [];
    querySnapshot.forEach((doc) => {
      const userInfo = doc.data();
      userInfo.id = doc.id;
  
      form.push(userInfo);
    });
  
    return form;
  }
  
  export async function updateData(e,img) {
    console.log('e', e)
    console.log('img',img)
   const userd=e[0]
     try {
   
       const storageRef = ref(storage, `profile image/${img.name}`);
       await uploadBytes(storageRef, img);
       const url = await getDownloadURL(storageRef);
       await addDoc(collection(db, "users"), {
         fullName:userd.fullName,
         age:userd.age,
         email:userd.email,
         imageUrl: url,
       });
   
       const ver= await deleteDoc(doc(db,"users",userd.id));
       console.log('del',ver)
       alert("profile update");
     } catch (e) {
       alert(e.message);
     }
   }