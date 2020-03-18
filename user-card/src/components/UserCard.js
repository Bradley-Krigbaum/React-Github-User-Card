import React from 'react';

function UserCard(props) {

    return (
        <>
            {/* {console.log('bk: UserCard.js: UserCard: props: ', props)} */}

            <div key={props.users.id} className='Users'>
                <h2>{props.users.login}</h2>
                <img src={props.users.avatar_url} alt={props.users.login}/>
                <div>
                    <h4>Profile: {props.users.html_url}</h4>
                    <h4>Followers: {props.users.followers}</h4>
                    <h4>Public Repos: {props.users.public_repos}</h4>
                </div>
            </div>

        </>
    )
}

export default UserCard;