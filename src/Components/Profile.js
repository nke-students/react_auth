import React from "react";
import { useAuth0, User } from "@auth0/auth0-react";
import { useState } from "react";
import UserCard from "./UserCard";
import FriendCard from "./FriendCard";

const Profile = (props) => {
    const {user, isAuthenticated} = useAuth0();
    const [show, setShow] = useState(false);
    const [showlist, setShowlist] = useState(false);
    const [people, setpeople] = useState([
        {id:1, name: "bob"},
        {id:2, name: "Jane"},
        {id:3, name: "Mark"},
        {id:4, name: "Steave"},
        {id:5, name: "Alex"}
      ])

    return(
        isAuthenticated &&(
        <div class="profile">
            <img class="self" src="https://cdn1.iconfinder.com/data/icons/autumn-2131/256/Rabbit.png" alt="Ktobl" />
            <h2>Name: {user.name}</h2>
            <p>Email: {user.email}</p>
            <p> location: Russia </p>
            <p> Verifed: "true" </p>
            <div/>
            <div class = "users">
            <button class = "Friends" onClick={() => setShow(!show)}>
           Friends
        </button> 
        <div class = "all">
        <button class = "use" onClick={() => setShowlist(!showlist)}>
           Users
        </button> 
      
        </div>
        {
            show && 
                <rqw class>Your friends:
             <FriendCard name="Andrew" img ="https://cdn1.iconfinder.com/data/icons/avatars-150/512/Boy.png"/>
             <FriendCard name="Vlad" img ="https://cdn4.iconfinder.com/data/icons/student-activity-character/512/Little_Boy_Carrying_A_Pencil.png"/>
                </rqw> 
        }
          {
            showlist && <rqw>All users:
             <UserCard name="Andrew" img ="https://cdn1.iconfinder.com/data/icons/avatars-150/512/Boy.png"/>
             <UserCard name="Vlad" img ="https://cdn4.iconfinder.com/data/icons/student-activity-character/512/Little_Boy_Carrying_A_Pencil.png"/>
             <UserCard name="Sasha" img ="https://cdn4.iconfinder.com/data/icons/student-activity-character/512/Little_Boy_Is_Pointing.png"/>
             <UserCard name="Gnom1337" img ="https://cdn4.iconfinder.com/data/icons/christmas-2880/256/Christmas_Deer_3D_Rendering_Illustration_02.png"/>
             <UserCard name="Elina" img ="https://cdn4.iconfinder.com/data/icons/international-women-s-day-2/512/Female_Symbol_01.png"/>
             <UserCard name="bober228" img ="https://cdn4.iconfinder.com/data/icons/diwali-2072/512/Hanuman_04.png"/>
             <UserCard name="Adolf" img ="https://cdn3.iconfinder.com/data/icons/halloween-2608/512/Ninja.png"/>
             <UserCard name="Kitaezh21" img ="https://cdn3.iconfinder.com/data/icons/halloween-2608/512/Frankenstein.png"/>
            </rqw> 
         }
        </div>
        </div>
        )
    )
}

export default Profile