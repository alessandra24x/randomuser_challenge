import React, { useContext, useRef, useCallback, useEffect } from 'react';
import UserCard from '../components/UserCard';
import { Link } from 'wouter';
import UserContext from '../context';

export default function Home() {
    const { state, actions } = useContext(UserContext);
    const observer = useRef();

    useEffect(() => {
        const intersection = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                actions.loadMore();
            }
        }, {
            threshold: 1,
        }
        );
        intersection.observe(observer.current);
    }, [actions.loadMore]);

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
            <button ref={observer}></button>
        </div>
    )

}