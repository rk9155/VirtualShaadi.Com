import React from "react";
import "./Sidebar.css";
import SidebarChannel from "./SidebarChannel.js";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoIcon from '@material-ui/icons/Info';
import CallIcon from '@material-ui/icons/Call';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MicIcon from '@material-ui/icons/Mic';
import VideocamIcon from '@material-ui/icons/Videocam';
import SettingsIcon from '@material-ui/icons/Settings';

function Sidebar(){
    return (<div className="sidebar">
    <div className="sidebar__top">
        <h3>Rakesh Weds ....</h3>
         <ExpandMoreIcon />
    </div>
    <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
            <div className="sidebar__header">
                 <ExpandMoreIcon />
                <h4>Functions</h4>
            </div>
            <AddIcon className="sidebar__addChannel" />
        </div>
        <div className="sidebar_channelList">
        <SidebarChannel />
        <SidebarChannel />

    </div>
    </div>

    <div className="sidebar__voice">
        <SignalCellularAltIcon
        className="sidebar__voiceIcon"
        fontSize="large"
        />
        <div className="sidebar__voiceinfo">
            <h3>Connected</h3>
            <p>Stream</p>
        </div>
        <div className="sidebar__voiceicons">
            <InfoIcon />
            <CallIcon />
        </div>
    </div>

    <div className="sidebar__profile">
        <AccountCircleIcon src = "https://instagram.fpat1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/118973780_2692008734380112_458138215553836866_n.jpg?_nc_ht=instagram.fpat1-1.fna.fbcdn.net&_nc_ohc=D16hKiUpA4YAX95TkrA&tp=1&oh=65577f78750f30ae9c3e27ac83e79cba&oe=602D9173" />
        <div className="sidebar__profileinfo">
            <h3>@rakesh91</h3>
        </div>
        <div className="sidebar__profileicons">
            <MicIcon />
            <VideocamIcon />
            <SettingsIcon />
        </div>
    </div>

    </div>
    );
}

export default Sidebar;
