import React from "react";
import './SidebarRamps.css';
import SidebarCollapsible from './SidebarCollapsible';
import onRampUpdate from '../../apis/ramps';

const pieColors = ['#12b4aa', '#6ad8d1', '#b0e3e0', '#8fe3dd', '#f1f8fe'];

class SidebarRamps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rampAlgorithms: [],
            rampPieData: []
        }
    }
    componentDidMount () {
        onRampUpdate(this.onApiUpdate.bind(this));
    }
    onApiUpdate (newRampAlgorithms) {
        this.setState({
            rampAlgorithms: newRampAlgorithms,
            rampPieData: this.getRampPieData(newRampAlgorithms)
        });
    }
    getRampPieData (algorithms) {
        const totals = { };
        algorithms.forEach(({ algorithm }) => {
            if (!totals[algorithm]) {
                totals[algorithm] = 0;
            }
            totals[algorithm] += 1;
        });
        let runningTotal = 0;
        return Object.entries(totals)
            .sort(([nameA], [nameB]) => {
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            })
            .map(([name, count], index) => {
                const percentage = Math.round(count / algorithms.length * 100)
                const offset = runningTotal;
                runningTotal += percentage;
                const styles = {
                    '--offset': offset,
                    '--value': percentage,
                    '--bg': pieColors[index],
                    '--over50': percentage > 50 ? 1 : 0
                };
                return { name, styles, percentage };
            });
    }
    render () {
        return (
            <SidebarCollapsible title="Ramp Chart" className="Sidebar-Ramps">
                <div className="Sidebar-Ramps-pie">
                        {
                            this.state.rampPieData.map(({name, styles}) => <div
                                className="Sidebar-Ramps-pie-segment"
                                key={`${name}-segment`}
                                style={styles}
                            />)
                        }
                </div>
                <div className="Sidebar-Ramps-labels">
                    {
                        this.state.rampPieData.map(({name, styles, percentage}) => <div
                            className="Sidebar-Ramps-pie-label"
                            key={`${name}-label`}
                            style={styles}
                        > <span>{percentage}%</span> </div>)
                    }
                </div>
                <div className="Sidebar-Ramps-donut" />
            </SidebarCollapsible>
        );
    }
}

export default SidebarRamps;