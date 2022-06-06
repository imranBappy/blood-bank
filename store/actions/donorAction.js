import * as Types from "./types";
import "../firebase";
import {
  collection,
  query,
  where,
  getDocs,
  getFirestore,
  limit,
} from "firebase/firestore";

export const loadDonor = () => async (dispatch) => {
  try {
    const users = [];
    const db = getFirestore();
    const userLoad = async () => {
      const q = query(collection(db, "users"), limit(25));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        users.push(doc.data());
      });
    };
    await userLoad();
    dispatch({
      type: Types.SET_DONOR,
      payload: { donor: users },
    });
  } catch (err) {
    alert(err.message);
    console.log(err);
    dispatch({
      type: Types.SET_ALERT,
      payload: { message: err.message, error: true },
    });
  }
};
export const searchDonor = (blood) => async (dispatch) => {
  try {
    const users = [];
    const db = getFirestore();
    const userLoad = async () => {
      const q = query(collection(db, "users"), where("blood", "==", blood));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        users.push(doc.data());
      });
    };
    await userLoad();
    dispatch({
      type: Types.SET_DONOR,
      payload: { donor: users },
    });
  } catch (error) {
    alert(error.message);
    console.log(error);
  }
};
