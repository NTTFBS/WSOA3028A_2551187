let blogPosts = [
    { title: 'Blog Post 1', date: '2024-02-16' },
    { title: 'Blog Post 2', date: '2024-02-23' },
    { title: 'Blog Post 3', date: '2024-03-01' },
    { title: 'Blog Post 4', date: '2024-03-08' },
    { title: 'Blog Post 5', date: '2024-03-16' },
    { title: 'Blog Post 6', date: '2024-04-08' },
    { title: 'Blog Post 7', date: '2024-04-18' },
    { title: 'Blog Post 8', date: '2024-04-26' },
    
    
  ];
  
  let sortedPosts = blogPosts;

     var blogList = document.querySelector('#blog-list');
  

  function sortPosts() {
    sortedPosts = blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
  }
 
        function displayPosts() {
         blogList.innerHTML = '';
            sortedPosts.forEach(post => {
            let listItem = document.createElement('li');
            listItem.textContent = `${post.title} (${post.date})`;
        blogList.appendChild(listItem);
    });
  } // I followed a tutorial to make a 'filter by date' function. This will probably be more useful once I combine all my blog posts previews on one page.