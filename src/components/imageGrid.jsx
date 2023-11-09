import React, { useState, useEffect } from "react";
import { storage } from "../../firebase.config";


const imageGallery = () => {
   const [photos, setPhotos] = useState([]);

   useEffect(() => {
    const fetchPhotos = async () => {
      const storageRef = storage.ref();
      const photosRef = storageRef.child("photos");
      const photoList = await photosRef.listAll();

       const urls = await Promise.all(
        photoList.items.map(async (item) => {
          const url = await item.getDownloadURL();
          return url;
        })
      );

        setPhotos(urls);
    };
    fetchPhotos();

  }, []);

    return (
    <div className="photo-gallery">
      {photos.map((url, index) => (
        <img key={index} src={url} alt={`photo-${index}`} className="gallery-image" />
      ))}
    </div>
  );
}


export default imageGallery;