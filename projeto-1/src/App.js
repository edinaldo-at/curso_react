import './App.css';
import { Component } from 'react';


class App extends Component {
  state = {
    counter: 0,
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
  timeoutUpdate = null


  //metodo de ciclo de vida
  //quando o componente for montado na tela
  componentDidMount() {
    this.handleTimeout();
  }

  //Verifica se o componente foi atualizado
  componentDidUpdate() {
    this.handleTimeout();
  }

  //verifica se o componente cai ser desmontado
  componentWillUnmount() {
    clearTimeout(this.timeoutUpdate);
  }

  handleTimeout = () => {
    const { posts, counter } = this.state;
    posts[0].title = "Novo Título";

    this.timeoutUpdate = setTimeout(() => {
      this.setState({
        posts,
        counter: counter + 1
      });
    }, 1000)
  }

  render() {
    const { posts, counter } = this.state;

    return (
      <div className="App">
        <p>{counter}</p>
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
