// Community.js
import React, { useState, useEffect } from 'react';

const Community = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // ここでAPIからコミュニティポストデータを取得します
        fetch('/api/community_posts')
            .then(response => response.json())
            .then(data => setPosts(data));
    }, []);

    const handlePostSubmit = (newPost) => {
        // 新しいポストをサーバーに送信し、リストを更新します
        fetch('/api/community_posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPost)
        })
        .then(response => response.json())
        .then(post => setPosts([...posts, post]));
    };

    return (
        <div>
            <h2>Community</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.content}</li>
                ))}
            </ul>
            <PostForm onSubmit={handlePostSubmit} />
        </div>
    );
};

const PostForm = ({ onSubmit }) => {
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ content });
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
            <button type="submit">Post</button>
        </form>
    );
};

export default Community;
