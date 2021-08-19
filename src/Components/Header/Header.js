import React from 'react';
import { Avatar } from '@material-ui/core'
import SearchIcon from "@material-ui/icons/Search"
import FlagSharpIcon from '@material-ui/icons/FlagSharp';
import SubscriptionsSharpIcon from '@material-ui/icons/SubscriptionsSharp';
import StoreSharpIcon from '@material-ui/icons/StoreSharp';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SupervisedUserCircleSharpIcon from '@material-ui/icons/SupervisedUserCircleSharp';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import "./Header.css"
import { useStateValue } from '../../StateProvider';

function Header() {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://th.bing.com/th/id/R.aa4991274b537f2759ec04a94f6e1258?rik=%2fXCOt6VMK%2biQvQ&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_5483.png&ehk=470DvjMB%2bKDo2ttVlQO4J3mjl3Q8sOK82hZU6IdPl54%3d&risl=&pid=ImgRaw&r=0" alt=" Logo " className="logo"  />
                <div className="header__input">
                    <SearchIcon />
                    <input placeholder="Search Facebook" type="text"/>
                </div>
            </div>   

             <div className="header__center">

                <div className="header__option header__option--active">
                    <HomeSharpIcon />
                </div>
                <div className="header__option">
                    <FlagSharpIcon />
                </div>
                <div className="header__option">
                    <SubscriptionsSharpIcon />
                </div>
                <div className="header__option">
                    <StoreSharpIcon />
                </div>
                <div className="header__option">
                   <SupervisedUserCircleSharpIcon />
                </div>
            </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar rounded src={user.photoURL}/>
                    <h4>{user.displayName}</h4> 
                </div>
                <AddIcon />
                <ForumIcon />
                <NotificationsIcon />
                <ExpandMoreIcon />
            </div>
        </div>
    )
}

export default Header

