import { db } from './config';
import { collection, addDoc, query, where, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { useState } from 'react';

const useCollection = (table) => {
    const [results, setResults] = useState([]);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);

    const getAll = async (condition) => {
        setResults([]);
        setIsPending(true);
        let resDoc = null, q = null;
        if (condition && condition.length === 3) {
            q = query(collection(db, table), where(condition[0], condition[1], condition[2]));
        } else {
            q = query(collection(db, table));
        }
        resDoc = await getDocs(q);

        resDoc.forEach(doc => {
            setResults(list => [...list, { ...doc.data(), id: doc.id }]);
        });
        setIsPending(false);
    };

    const add = async (docData) => {
        setError(null);
        setIsPending(true);
        try {
            let resDoc = await addDoc(collection(db, table), docData);
            setIsPending(false);
            return resDoc;
        } catch (err) {
            console.log(err.message);
            setError('could not send the message');
            setIsPending(false);
            return null;
        }
    };

    const update = async (docId, updatedData) => {
        setError(null);
        setIsPending(true);
        try {
            let docRef = doc(db, table, docId);
            await updateDoc(docRef, updatedData);
            setIsPending(false);
        } catch (err) {
            console.log(err.message);
            setError('could not update the document');
            setIsPending(false);
        }
    };

    const remove = async (docId) => {
        setError(null);
        setIsPending(true);
        try {
            let docRef = doc(db, table, docId);
            await deleteDoc(docRef);
            setIsPending(false);
        } catch (err) {
            console.log(err.message);
            setError('could not delete the document');
            setIsPending(false);
        }
    };

    return { error, isPending, results, add, getAll, update, remove };
};

export default useCollection;
