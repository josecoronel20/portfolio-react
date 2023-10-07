import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const AboutMe = () => {
  const [image, setImage] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore();
        const itemCollection = collection(db, "otrasImagenes");
        const snapshot = await getDocs(itemCollection);
        const doc = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setImage(doc);
        console.log(doc);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <div>
        <img src={image.url} alt="Imagen" />
      </div>
    </div>
  );
};

export default AboutMe;
