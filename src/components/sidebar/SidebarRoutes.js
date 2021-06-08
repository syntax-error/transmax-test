import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltDown } from "@fortawesome/free-solid-svg-icons";
import './SidebarRoutes.css';
import SidebarCollapsible from "./SidebarCollapsible";

class SidebarRoutes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            delayedRoutes: [
                {
                    route: 'Monash Fwy Out',
                    start: 'Kings Way',
                    end: 'EastLink',
                    distance: 13,
                    duration: 45,
                    status: 'heavy'
                },
                {
                    route: 'Monash Fwy Out',
                    start: 'Kings Way',
                    end: 'EastLink',
                    distance: 15,
                    duration: 28,
                    status: 'heavy'
                },
                {
                    route: 'Western Ring Rd',
                    start: 'West Gat Fwy',
                    end: 'Western Fwy',
                    distance: 5,
                    duration: 5,
                    status: 'moderate'
                },
                {
                    route: 'Eastern Fwy',
                    start: 'Hoddle St',
                    end: 'Springvale Rd',
                    distance: 15,
                    duration: 25,
                    status: 'moderate'
                }
            ]
        }
    }
    getDurationDisplay (numMinutes) {
        const hours = Math.floor(numMinutes / 60);
        if (hours) {
            return (
                <span>
                    <span className="number">{hours}</span> hr
                    <span className="number">{numMinutes % 60}</span> min
                </span>
            );
        }
        return (
            <span>
                <span className="number">{numMinutes % 60}</span> min
            </span>
        );
    }
    render () {
        return (
            <SidebarCollapsible title="Delayed Routes" className="Sidebar-Routes" testId="Sidebar-Routes">
                {
                    this.state.delayedRoutes.map((route, index) =>
                        <div
                            className="Sidebar-Routes-route"
                            key={index}
                        >
                            <div className="Sidebar-Routes-route-upper-row">
                                <div className="Sidebar-Routes-status">
                                    <div className={ `Sidebar-Routes-status-circle ${route.status}`} />
                                </div>
                                <div className="Sidebar-Routes-route-name">
                                    { route.route }
                                </div>
                                <div className="Sidebar-Routes-distance">
                                    { route.distance } km
                                </div>
                            </div>
                            <div className="Sidebar-Routes-route-lower-row">
                                <div className="Sidebar-Routes-route-arrow">
                                    <FontAwesomeIcon icon={faLongArrowAltDown} />
                                </div>
                                <div className="Sidebar-Routes-route-start-end">
                                    <div>
                                        { route.start }
                                    </div>
                                    <div>
                                        { route.end }
                                    </div>
                                </div>
                                <div className="Sidebar-Routes-duration">
                                    { this.getDurationDisplay(route.duration) }
                                </div>
                            </div>
                        </div>
                    )
                }
            </SidebarCollapsible>
        );
    }
}

export default SidebarRoutes;