import './App.css';
import { Component } from 'react';
import { PostCard } from './components/PostCard';


class App extends Component {
  state = {
    posts: []
  };
  timeoutUpdate = null


  //metodo de ciclo de vida
  //quando o componente for montado na tela
  componentDidMount() {
    this.loadPosts();
  }

  //separa a chamada da api em uma função específica
  loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');

    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const postAndPhotos = postsJson.map((post, index) => {
      return { ...post, cover: photosJson[index].url }
    });

    this.setState({ posts: postAndPhotos });
  };

  //Verifica se o componente foi atualizado
  componentDidUpdate() {

  }

  //verifica se o componente cai ser desmontado
  componentWillUnmount() {

  }

  render() {
    const { posts } = this.state;

    return (
      <section className="container">
        <div className="posts">
          {posts.map(post => (
            <PostCard
              key={post.id}
              cover={post.cover}
              id={post.id}
              title={post.title}
              body={post.body}

            />
          ))}
        </div>
      </section>
    );
  };
};

export default App;
