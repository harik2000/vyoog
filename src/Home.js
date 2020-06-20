import React from "react";
import firebase from "./base";
function Home(){
    return(
        <>
            <h1>Home</h1>
            <button onClick={() => firebase.auth().signOut()}>Sign Out</button>
        </>
    );
}

export default Home;