import React, { useContext } from 'react';
import UserCard from '../components/UserCard';
import { Link } from 'wouter';
import UserContext from '../context';

export default function Home() {
    const { state } = useContext(UserContext);

    return (
        <div className="grid">
            {state.users.map(user => {
                return (
                    <Link key={user.email} href={`/users/${user.email}`}>
                        <UserCard
                            thumbnail={user.thumbnail}
                            title={user.title}
                            first={user.first}
                            last={user.last}
                            city={user.city}
                            country={user.country}
                        />
                    </Link>
                );
            })}
        </div>
    )

}