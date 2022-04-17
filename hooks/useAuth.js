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
            onAuthStateChanged(auth, async ({ accessToken, displayName, email, uid }) => {
                const data = {}
                data = { accessToken, displayName, email, uid }
                const stateQuery = query(collection(db, "users"), where("_id", "==", uid));
                const docSnap = await getDocs(stateQuery);
                docSnap.forEach(u => {
                    data = { ...data, ...u.data() }
                })
                setUser(data)
            });
        };
        getUser();
    }, []);
    return user;
};

export default useAuth;