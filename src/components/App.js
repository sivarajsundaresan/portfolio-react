import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from '../assets/profile.png';
import Title from './Title';


class App extends Component {
  state = { displayBio: false }
  //  constructor() {
  //      super()
  //      this.state = { displayBio: false };

  //      this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
  //  }

   toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
   }


    render() {
      return (
        <div>
          <img src={profile} alt='profile' className='profile'/>
          <h1>Hello!</h1>
          <p>My Name is Siva.</p>
          <Title />
          <p>Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs.</p>
          {
            this.state.displayBio ? (
                <div>
                  <p>This is because paragraphs show a reader where the subdivisions of an essay begin and end, and thus help the reader see the organization of the essay and grasp its main points.</p>
                  <p>Paragraphs can contain many different kinds of information. A paragraph could contain a series of brief examples or a single long illustration of a general point.</p>
                  <button onClick={this.toggleDisplayBio}>Read Less</button>
                </div>
              ) : (
                <div><button onClick={this.toggleDisplayBio}>ReadMore</button></div>
              )
            }
            <hr />
            <Projects />
            <hr />
            <SocialProfiles />
        </div>
      )
    }
}


export default App;