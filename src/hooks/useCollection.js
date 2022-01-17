import { useEffect, useState, useRef } from "react";
import { db } from "../firebase";
import {
  collection,
  query,
  where,
  onSnapshot,
  orderBy,
} from "@firebase/firestore";

export const useCollection = (collectionPath, queryParams, orderByParams) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  // avoid infinite loop
  const _query = useRef(queryParams).current;
  const _orderBy = useRef(orderByParams).current;

  useEffect(() => {
    const ref = collection(db, collectionPath);

    const q = query(ref, where(..._query), orderBy(...orderByParams));

    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        const results = [];
        querySnapshot.forEach((doc) => {
          results.push(doc.data());
        });

        setDocuments(results);
        setError(null);
      },
      (error) => {
        setError(error.message);
      }
    );

    return () => unsubscribe();
  }, [_query, collectionPath, _orderBy]);

  return { documents, error };
};
