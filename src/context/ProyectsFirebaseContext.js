import React, { createContext, useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";

export const ProyectsFirebaseContext = createContext(null);

export const ProyectsFirebaseProvider = ({ children }) => {

  
  const [proyects, setProyects] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = collection(db, "proyectos");
  
    getDocs(itemCollection)
      .then((snapshot) => {
        const doc = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProyects(doc);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  }, []);
  
  return (
    <ProyectsFirebaseContext.Provider value={[proyects]}>
      {children}
    </ProyectsFirebaseContext.Provider>
  );
};
