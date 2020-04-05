import React from 'react';

class Result extends React.Component {
    static async getInitialProps({ query }) {
        const { id } = query
        return { id }
    }

    constructor(props) {
        super(props);
        this.state = {
            id: props.id
        }
    }

    render() {
        return (
            <>
                <div>
                    URLのPathからuserId: {this.state.id}
                </div>
            </>
        )
    }
}

export default Result