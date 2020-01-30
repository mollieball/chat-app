import React from 'react';
import Contact from "./Contact";

function ContactList(props){
    
return (
   <div>
       {people.map((person) => (
           <Contact
                name={person.name}
                avatar={person.avatar}
                online={person.online}
           />
       ))}
   </div>
);
}


const people = [
    {
    name: 'Beverly Holt',
    avatar: 'https://randomuser.me/api/portraits/women/86.jpg',
    online: true,
    },
    {
        name: 'Sylvia Brooks',
        avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
        online: true,
    },
    {
        name: 'Reginald Ford',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
        online: true,
    },
    {
        name: 'Gail Berry',
        avatar: 'https://randomuser.me/api/portraits/women/40.jpg',
        online: true,
    },
    {
        name: 'Bobby Meyer',
        avatar: 'https://randomuser.me/api/portraits/men/47.jpg',
        online: true,
    }    
];

export default ContactList;
