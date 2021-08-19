import { ExpandMoreOutlined } from '@material-ui/icons';
import React from 'react'
import "./Sidebar.css";
import SidebarRow from "./SidebarRow"
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StoreFrontIcon from "@material-ui/icons/Storefront";
import VideoCallOutlined from "@material-ui/icons/VideoCallOutlined"
import { useStateValue } from '../../StateProvider';


function Sidebar() {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName} />
            <SidebarRow Icon={LocalHospitalIcon} title={'Covid 19 Infomation Centre'} />
            <SidebarRow Icon={EmojiFlagIcon} title="Pages" />
            <SidebarRow Icon={PeopleIcon} title="Friends" />
            <SidebarRow Icon={ChatIcon} title="Messenger" />
            <SidebarRow Icon={StoreFrontIcon} title="Marketplace" />
            <SidebarRow Icon={VideoCallOutlined} title="Videos" />
            <SidebarRow Icon={ExpandMoreOutlined} title="More" />
        </div>
    )
}

export default Sidebar
