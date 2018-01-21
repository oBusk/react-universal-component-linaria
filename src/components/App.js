import React from 'react';
import UniversalComponent from 'react-universal-component';
import { css, styles } from 'linaria';

const Universal = UniversalComponent(props => import(`../page/${props.page || 'Index'}`));

const linkStyle = css`
    display: inline-block;
    padding: 10px;
`;

export default class App extends React.Component {
    componentDidMount() {
        this.setState({ page: 'Index' });
    }

    render() {
        return (
            <div>
                <a {...styles(linkStyle) } href="#" onClick={() => this.setState({ page: 'Index' })}>Index</a>
                <a {...styles(linkStyle) } href="#" onClick={() => this.setState({ page: 'About' })}>About</a>
                <Universal page={this.state && this.state.page} />
            </div>
        );
    }
}
