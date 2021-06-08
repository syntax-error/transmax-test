import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import './Sidebar.css';
import SidebarWeather from "./SidebarWeather";
import SidebarRoutes from "./SidebarRoutes";
import SidebarRamps from "./SidebarRamps";

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: true };
        this.openSidebar = this.openSidebar.bind(this);
        this.closeSidebar = this.closeSidebar.bind(this);
    }
    openSidebar () {
        this.setState({ open: true });
    }
    closeSidebar () {
        this.setState({ open: false });
    }
    getClassNames () {
        const classes = ['Sidebar'];
        classes.push(this.state.open ? 'open' : 'close');
        return classes.join(' ');
    }
    render () {
        return (
            <div className={this.getClassNames()}>
                <div className="Sidebar-header">
                    <div className="Sidebar-toggle">
                        {
                            this.state.open
                            ? <FontAwesomeIcon
                                    icon={faAngleDoubleLeft}
                                    onClick={this.closeSidebar}
                                />
                            : <FontAwesomeIcon
                                    icon={faAngleDoubleRight}
                                    onClick={this.openSidebar}
                                />
                        }
                    </div>
                </div>
                { this.state.open &&
                    <div className="Sidebar-content">
                        <SidebarWeather />
                        <SidebarRoutes />
                        <SidebarRamps />
                    </div>
                }
            </div>
        );
    }
}

export default Sidebar;