import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from './components/App';
import Jokes from './components/Jokes';
import Header from './components/Header';
import './index.css';

ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route exact path='/' render={() => <Header><App /></Header>} />
            <Route path='/jokes' render={() => <Header><Jokes /></Header>} />
        </Switch>
    </Router>, 
    document.getElementById('root'));




// class Animal {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }


//     speak() {
//         console.log("I am ", this.name, "and i am", this.age, "old");
//     }
// }

// const animal1 = new Animal("Simba", 3);
// animal1.speak();

// class Lion extends Animal {
//     constructor(name, age, color, speed) {
//         super(name, age);
//         this.color = color;
//         this.speed = speed;
//     }

//     roar() {
//         console.log("Roar", this.color, "speed", this.speed)
//     }
// }

// const lion1 = new Lion("Mufasa", 20, 'gold', 201)
// lion1.speak();
// lion1.roar();