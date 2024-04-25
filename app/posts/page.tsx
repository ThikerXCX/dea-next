import CardList from '../components/posts/cardList';
import ViewUserButton from '../components/posts/viewUserButton';

const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

interface IPost {
    userId:number,
    id:number,
    title:string,
    body:string
}

const Posts = async () => {
    const response = await fetch(baseUrl, {
        cache : 'no-store'
    });
    const posts:IPost[] = await response.json();
    return (
        <>
            <h1 className="text-fuchsia-500"> Halaman Post</h1>
            {posts.map((post)=>{
                return (
                    <CardList key={post.id}>
                        <h6>{post.id}</h6>
                        <p>{post.title}</p>
                        <i>{post.body}</i>
                        <br />
                        <ViewUserButton userId={post.userId}/>
                    </CardList>
                )
            })}
            
        </>
    )
}

export default Posts;