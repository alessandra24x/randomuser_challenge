import React, { useContext } from 'react';
import UserContext from '../context';
import { useRoute, Link } from 'wouter';

export default function User() {
    const { state } = useContext(UserContext);
    const [match, params] = useRoute('/users/:email');

    const user = match && state.users.find(user => user.email === params.email);

    if (!user) return <small>El usuario no existe, haga click <Link href='/users'>acá</Link> para volver</small>

    return (
        <div className="card_content">
            < img src={user.large} alt="{first} {last} info" />
            <h1>{user.first} {user.last}</h1>
            <h3>{user.username}</h3>
            <small>{user.email}</small>
        </div>
    )
}