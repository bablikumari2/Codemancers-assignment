import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import PeopleIcon from '@material-ui/icons/People';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AppsIcon from '@material-ui/icons/Apps';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { IconButton } from '@material-ui/core';

function Header() {
    return (
        <div className='header'>
            <div className='header_left'>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEVCZ7L///
                8qWKz6+vw+ZbE8Y7B5j8Ree7tKbLQvW62Jncvb4e9QcbY9ZLEyXa41X6+uu9vW3OyXqNHP1+ns7/eBlshngr60wN1Yd7nm6v
                ShsNVuiMGntdiQos3K0ub09vu9yOLQ9uUoAAAD8ElEQVR4nO3dbXOiMBSG4UATJeXlAGJ91/7/X7la62x3p6NBTM5J5rm/7Dcm11CI
                EGBV9l25na1VKlW7fnGDqes/rbKm5h7X69I12Xr/QzisG+4xeaipNjdhSQntvh/VVF6FA2nusXhKN8OXsEpzD16qq4uwTfEYvNW0ZyH3IDyXqc5yj8FrtlM9cQ/Ca7RVs3TPM5fqmUrnp9rvpe5DCCGEEEIIIYQQQq/ra1VFp7e2omuixuZ5buuiKFRNTX7J2sY2RMYYHTXakNXzQ3vshuzfTkPZLY6rbX/YrStt47xfr43Nd22ZPe7tNBTcox2fJloeHXTfVbH9pda2Wr25+6ITavuxeIyKV6ibaqwvLmFt29G+qIQ0/39iSEyY98/4IhLaz+eAsQg1uczvEQu12TwLjEOo6XlgHMJ8/CwYl9CuJgBjENJyCjACoS4mASMQ5l3iQnqfBpQvzEddDEYopP1EoHSh1lOB0oXTd6F0oZ16FEoXmqknUvFCO3EuFC+c+nNGvtA8eeMiHqF9+sI+EqE2LwCKFppZ6kIaeeV7GspfKgQLxxyGx8NaN/aXGsFARa4/aIaDtRTheq/zbLi3Jj7dJdcTzSzOhexzdHACLuN9OZKc1tKOOfc4n69xWqyXPBk8yrrc6T5GexAqx+lwZriHOaHcZck3wlnwb/npMXAT8x+p053SY7xThXITrqJ+CdtFuE1eeEhe+B7zZAEhhBEEIYTygxBC+UEIofwghFB+EEIoPwjjEOo7OQnp3ha0gFed53eqHIT9+t4WLvES9fyxYWq8C6gBhEPywo536SaA8JP3tn8AIfPSTQAh84QZQDjn/QZyACHzwyj+hSfmdX7/Qu4nGfwLuZ9k8C/kfpLBv5B7nd+/kPuhMP9C7icX/Qu5H5nyLhy4H3vzLiyTFzJfOwUQ7pMXst9s9C784P7/Y7wL2d9b8y18Y38Xw7eQfTr0LuS+dvIvZJ8OvQt77snCu3CZvJB9svAurFMXDuynUt9C9msn70L+6fBccSeXl9WX97ag2A/DB7k8qXD3Xpp04HSh+CCEUH4QQig/CCGUH4QQyg9CCOUHIYTygxBC+UEIofwghFB+EEIoPwghlB+EEMoPQgjlByGE8oMQQvlBCKH8IIRQfhBCKD8IIZQfhBDKD0II5QchhPKDEEL5QQjhiJg+kRlKqAv1kbhwp3qeD0qFElKvFjzfeQkltJ3Kpm/lmYKdaTKVtSyfsgkktO1ZmFUc35AMIzTr7CIciOF0GkSoafgSZmUTfi+GEBqzya7CbKiCH4sBhM18yG7CLGu1paA70q9Q12T16roVddtc18/WryQ8yK+w2vWL21b+AKKISqARllBJAAAAAElFTkSuQmCC"/>
                <div className='search'>
                    <SearchIcon />
                    <input type="text" placeholder='Search' />
                </div>
            </div>
            <div className='header_mid'>
                <div className='option'>
                    <HomeIcon fontSize='large'/>
                    </div>
                    <div className='option'>
                    <OndemandVideoIcon fontSize='large'/>
                    </div>
                    <div className='option'>
                    <PeopleIcon fontSize='large'/>
                    </div>
                    <div className='option'>
                    <SportsEsportsIcon fontSize='large'/>
                </div>
            </div>
            <div className='header_right'>
                <div className='info'>
                    <AccountCircleIcon/>
                    <h4>Babli</h4>
                    <IconButton>
                    <AppsIcon/>
                    </IconButton>
                    <IconButton><ChatIcon/></IconButton>
                    <IconButton>
                    <NotificationsIcon/>
                    </IconButton>

                </div>
            </div>
            
        </div>
    )
}

export default Header