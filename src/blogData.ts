// ブログ記事の型定義
export interface BlogPost {
    id: number;
    title: string;
    content: string;
    author: string;
    date: string;
}

// ブログ記事の配列 (仮のデータ)
const blogData: BlogPost[] = [
    {
        id: 1,
        title: "はじめてのブログ投稿",
        content: "これはブログの最初の投稿です。",
        author: "John Doe",
        date: "2024-04-30"
    },
    {
        id: 2,
        title: "ReactとTypeScriptを学ぼう",
        content: "ReactとTypeScriptの基本を学ぶための記事です。",
        author: "Jane Smith",
        date: "2024-05-01"
    },
    {
        id: 3,
        title: "Vue.js入門",
        content: "Vue.jsの基本的な使い方を学ぶ記事です。",
        author: "Mike Johnson",
        date: "2024-05-02"
    }
];

export default blogData;
