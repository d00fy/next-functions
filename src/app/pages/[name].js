import React from 'react';

class Result extends React.Component {
    static async getInitialProps({ query }) {
        const { name } = query
        return { name }
    }

    constructor(props) {
        super(props);
        this.state = {
            name: props.name
        }
    }

    render() {
        return (
            <>
                <div>
                    URLのPathからuserName取得: {this.state.name}
                </div>
            </>
        )
    }
}

export default Result