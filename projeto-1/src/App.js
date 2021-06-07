import './App.css';
import { Component } from 'react';


class App extends Component {
  //class fields
  state = {
    posts: [
      {
        id: 1,
        title: 'o título 1',
        body: 'o corpo 1'
      },
      {
        id: 2,
        title: 'o título 2',
        body: 'o corpo 2'
      },
      {
        id: 3,
        title: 'o título 3',
        body: 'o corpo 3'
      }
    ]
  };

  render() {

    //pega posts de dentro de state
    const { posts } = this.state;

    return (
      <div className="App">
        {/*Exemplo: map retornando apenas um elemento
        posts.map(post => <h1 key={post.id}>{post.title}</h1>)*/}

        {/*Exemplo: interando multiplos elementos*/}
        {posts.map(post => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <span>{post.body}</span>
          </div>
        ))}

      </div>
    );
  };
};

export default App;
