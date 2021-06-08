import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import './SidebarCollapsible.css';

class SidebarCollapsible extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true
        }
        this.toggleOpenClose = this.toggleOpenClose.bind(this);
    }
    toggleOpenClose () {
        this.setState(prevState => ({
            open: !prevState.open
        }));
    }
    getClassNames () {
        const classes = [this.props.className, 'Sidebar-Collapsible'];
        classes.push(this.state.open ? 'open' : 'close');
        return classes.join(' ');
    }
    render () {
        return (
            <div className={this.getClassNames()} data-testid={this.props.testId}>
                <div className="Sidebar-Collapsible-header" onClick={this.toggleOpenClose}>
                    { this.props.title }
                    <div className="Sidebar-Collapsible-toggle">
                        {
                            this.state.open
                                ? <FontAwesomeIcon icon={faChevronUp} />
                                : <FontAwesomeIcon icon={faChevronDown} />
                        }
                    </div>
                </div>
                <div className="Sidebar-Collapsible-content">
                    { this.props.children }
                </div>
            </div>
        );
    }
}

export default SidebarCollapsible;