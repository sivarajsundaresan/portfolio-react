import React, { Component } from 'react';


const TITLES = [
    'a software engineer',
    'a music lover',
    'simple',
    'hungry'
];

class Title extends Component {
    state = { titleIndex: 0 };

    componentDidMount() {
        console.log('Title component has mounted');

        this.animalTitles();
    }

    componentWillUnmount() {
        console.log('Title component will unmount');

        clearInterval(this.titleInterval);
    }

    animalTitles = () => {
        this.titleInterval = setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;

            this.setState({ titleIndex });
        }, 4000);
    }

    render() {
        const title = TITLES[this.state.titleIndex]

        return (
            <p>I am {title}</p>
        )
    }
}

export default Title;