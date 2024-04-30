// BlogDetail.tsx
import React from 'react';
import { BlogPost } from './blogData'; // BlogPost型をインポート

//Props:Reactコンポーネント(App.tsx)にデータを渡す方法/postはBlogPost型である
interface Props {
    post: BlogPost;
}



//BlogDetailという関数コンポーネントを定義
//React.FC<Props>(ジェネリック型)は関数コンポーネントであり、Props型(インターフェースの型)のpropsを受取っている
//この関数コンポーネントはジェネリック型を使用して型を指定している
//ジェネリック型:様々なデータ型に対して同じ機能を実行するために必要な処理を行う
//Props型はインターフェース型であり、つまりBlogPost型を示している
const BlogDetail: React.FC<Props> = ({ post }) => {
    //コンポーネントの中身
    return (
        <div>
            <h2>{post.title}</h2>
            <p>By {post.author}</p>
            <p>Date: {post.date}</p>
            <div>{post.content}</div>
        </div>
    );
}

export default BlogDetail;
