import '../store/firebase';
import { query, where, collection, getDoc, getDocs, doc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import {
    getAuth,
    onAuthStateChanged,
} from "firebase/auth"
const useAuth = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth();
    const db = getFirestore();
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (getUser) => {
            const { displayName, email, uid } = getUser || {};
            // data = { accessToken, displayName, email, uid }
            // const stateQuery = query(collection(db, "users"), where("_id", "==", uid));
            // const docSnap = await getDocs(stateQuery);
            // docSnap.forEach(u => {
            //     data = { ...data, ...u.data() }
            // })
            setUser({ displayName, email, uid })
            // console.log("first line", getUser);

        });
    }, []);
    // console.log('lest line', user);
    return user;
};

export default useAuth;