import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';//(2.4.5)
//React Router:Reactアプリケーションで複数のページを持つためのライブラリ
//React Routerの中核となるコンポーネントでブラウザのURLとReactのコンポーネントを紐づける役割
//BrowserRouter as Routerとすることでコード内でRouterという名前でBrowserRouterを使用することが出来る
//Route:URLパス(今回は:id)とマッチした場合に特定のコンポーネントをレンダリングするために使用
//➡pathプロパティでURLパスを指定し、componentもしくはrenderでレンダリングするコンポーネントを指定
//Link:React Routerを使ってページ間の遷移を行う/内部の他のページへのリンクを定義
import './App.css'; // CSSファイルのインポート（必要に応じて）
import { BlogPost } from './blogData'; //blogData.tsからBlogPost型をインポート(2.4.3)
import blogData from './blogData'; //blogDta.tsからブログ記事データをインポート(2.4.3)
import BlogDetail from './BlogDetail'; //詳細ページコンポーネントをインポート(2.4.4)


const App: React.FC = () => {
    return (
        <div className="app">
            <header> 
                <h1>My Blog Platform</h1> 
            </header>
            <main> {/*アプリケーションのメインコンテンツ。ここでは簡単な歓迎メッセージ。ここに他のコンポーネントを追加してブログ記事の一覧や詳細を表示するなどの機能を実装 */}
                
                <p>Welcome to my blog!</p> {/*文章の段落(見出しの内容)を示す*/}
                {/* ここに他のコンポーネントを追加 */}

                {/*2.4.3の実装*/}
                <h2>Blog Posts</h2> {/*見出しを指定する要素*/}
                <ul> {/*unordered listの略で順序関係なく箇条書きしたい時に利用*/}
                    {blogData.map((post: BlogPost) => (
                        <li key={post.id}>
                            {/*Linkは簡単に言うとページを遷移させるための機能である */}
                            {/*Linkコンポーネントを使用/各ブログ記事のタイトルをクリックすると詳細ページへのリンクを表示する*/}
                            {/*toプロパティでパスを指定・${post.id}を使用して/post/:idの形式のURLを生成*/}
                            <Link to={`/post/${post.id}`}>
                                <h3>{post.title}</h3>
                            </Link>
                            <p>By {post.author}</p>
                            <p>Data: {post.date}</p>
                            {/*記事の概要などを表示する場合はここに追加 */}
                        </li>
                    ))}
                </ul>
                {/*Routeは簡単に言うと表示するということ*/}
                {/*動的な詳細ページのルーティング設定*/}
                {/*Routeコンポーネントを使用・/post/:idというパスにマッチする場合に詳細ページをレンダリングする*/}
                {/*renderプロパティ(属性)ではmatchオブジェクトからURLパラメータ(:id)を取得し、該当する記事データをblogDataから検索してBlogDetailコンポーネントに渡す*/}
                {/* return post ? <BlogDetail post={post} /> : null;*/}
                {/*　➡該当する記事が存在する場合は詳細ページを表示する*/}
                {/*<Route
                    path="/post/:id" 
                    element={({ match }) => {
                        const postId = parseInt(match.params.id);
                        const post = blogData.find(post => post.id === postId);
                        return post ? <BlogDetail post={post} /> : null;
                    }}
                />*/}
            </main>
            <footer> {/*/著作権情報などを表示 */}
                <p>&copy; 2024 My Blog Platform</p>
            </footer>
        </div>
    );
}

export default App;


//blogData.map()メソッド:ブログ記事データの配列をループして表示する。
//各記事に対して<li>要素を作成し記事のタイトル、著者、投稿日時などを表示
