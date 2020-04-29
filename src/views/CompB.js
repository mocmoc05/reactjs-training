import React from 'react';

class CompB extends React.Component {
    constructor() {
        super();
        this.state = {
            number: 1,
            text: ''
        }
        console.log('constructor');
        //this.changeNumber = this.changeNumber.bind(this); //c1
    }

    componentWillMount() {

    }

    componentDidMount() {
        console.log('did mount')
        this.getData();
    }

    componentWillUnmount() {
        console.log('will unmount');
    }

    changeNumber(number) {  //c2 = () => 
        this.setState({ number, age: 'asdfds' })
        // this.a = number;
    }

    getData() {

    }

    render() {
        console.log('render')
        return (
            <div>
                <p>Component B</p>
                <p>Number: {this.state.number}</p>
                <button
                    onClick={this.changeNumber.bind(this, this.state.number + 1)} //c3
                //onClick={() => this.changeNumber(this.state.number + 5)} //c4
                >
                    change number
                </button>
                <input
                    placeholder={'nhap text'}
                    value={this.state.text}
                    onChange={(event) => { this.setState({ text: event.target.value }) }}
                />
            </div>
        )
    }
}

export default CompB;

// su dung class component;
