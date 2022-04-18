import '../store/firebase';
import { query, where, collection, getDoc, getDocs, doc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import {
    getAuth,
    onAuthStateChanged,
} from "firebase/auth"
const useAuth = () => {
    const [user, setUser] = useState([]);
    const auth = getAuth();
    const db = getFirestore();
    useEffect(() => {
        const getUser = async () => {
            let data = {}
            const unsubscribe = onAuthStateChanged(auth, async (user) => {
                // const { accessToken, displayName, email, uid } = user;
                // data = { accessToken, displayName, email, uid }
                // const stateQuery = query(collection(db, "users"), where("_id", "==", uid));
                // const docSnap = await getDocs(stateQuery);
                // docSnap.forEach(u => {
                //     data = { ...data, ...u.data() }
                // })
                setUser(user)

                return unsubscribe
            });
        };
        getUser();
    }, []);
    return user;
};

export default useAuth;