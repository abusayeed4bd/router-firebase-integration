import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import { useEffect, useState } from "react"
import app from '../firebase.init'

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});



    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                setUser(user)
                console.log(user);
            })

    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log('sign our successfull');
            })
            .catch((error) => {
                console.log(error);
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user)
        })
    }, [])

    return {
        signInWithGoogle,
        handleSignOut,
        user
    }
}
export default useFirebase;