import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { doc, docData, Firestore, setDoc } from '@angular/fire/firestore';
import { getDownloadURL, ref, Storage, uploadString } from '@angular/fire/storage';
import { Photo } from '@capacitor/camera';
import { base64 } from '@firebase/util';

@Injectable({
  providedIn: 'root'
})
export class CamaraService {

  constructor(private auth:Auth,private firestore:Firestore,private storage:Storage) { }

  async uploadAvatar(cameraFile:Photo){
    const user = this.auth.currentUser;
    const path = `uploads/${user.uid}/profile.png`;
    const storageRef = ref(this.storage,path);

    try {
      await uploadString(storageRef,cameraFile.base64String || '', 'base64');

      const imageUrl = await getDownloadURL(storageRef);
      const userDocRef = doc(this.firestore,`conductor/${user.uid}`);
      await setDoc(userDocRef,{
        imageUrl,
      });

      return true;
    } catch (error) {
      return false;
    }
  }

  async Getavatar(cameraFile:Photo){
    const user = this.auth.currentUser;
    const path = `uploads/${user.uid}/profile.png`;
    const storageRef = ref(this.storage,path);
      await uploadString(storageRef,cameraFile.base64String || '', 'base64');

      const imageUrl = await Promise.resolve(getDownloadURL(storageRef));
      const imagen: string =imageUrl;
      return imagen;
        

}
  
  
              

}
