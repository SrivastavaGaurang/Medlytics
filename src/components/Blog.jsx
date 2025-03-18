import React from 'react';

const Blog = () => {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'Understanding Sleep Disorders',
      date: 'October 10, 2023',
      author: 'Dr. John Doe',
      excerpt: 'Sleep disorders can significantly impact your health. Learn about the common types and how to manage them effectively.',
      image: 'https://via.placeholder.com/800x400', // Replace with actual image URL
    },
    {
      id: 2,
      title: 'The Link Between Anxiety and Nutrition',
      date: 'October 5, 2023',
      author: 'Dr. Jane Smith',
      excerpt: 'Discover how your diet can influence anxiety levels and what foods to include for better mental health.',
      image: 'https://via.placeholder.com/800x400', // Replace with actual image URL
    },
    {
      id: 3,
      title: 'Depression: Myths and Facts',
      date: 'September 28, 2023',
      author: 'Dr. Emily Brown',
      excerpt: 'There are many misconceptions about depression. Here are some facts to help you better understand this condition.',
      image: 'https://via.placeholder.com/800x400', // Replace with actual image URL
    },
  ];
  

  return (
    <div className="container my-5">
      <h1 className="text-center mb-5" style={{ color: '#2c3e50', fontWeight: 'bold' }}>
        Our Blog
      </h1>
      <div className="row">
        {blogPosts.map((post) => (
          <div key={post.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src={post.image}
                className="card-img-top"
                alt={post.title}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ color: '#2c3e50', fontWeight: 'bold' }}>
                  {post.title}
                </h5>
                <p className="card-text text-muted">
                  <small>
                    By {post.author} | {post.date}
                  </small>
                </p>
                <p className="card-text">{post.excerpt}</p>
                <a href={`/blog/${post.id}`} className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;