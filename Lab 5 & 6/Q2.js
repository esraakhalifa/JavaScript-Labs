const users_url = 'https://jsonplaceholder.typicode.com/users';

const posts_url = 'https://jsonplaceholder.typicode.com/posts';

const comments_url = 'https://jsonplaceholder.typicode.com/comments';

(async () => {
  try {
    const users_response = await fetch(users_url);


    const users = await users_response.json();


    const posts_response = await fetch(posts_url);


    const posts = await posts_response.json();

    const comments_response = await fetch(comments_url);


    const comments = await comments_response.json();


    const tableBody = document.querySelector('#users-table tbody');

  
    if (!tableBody) {
      console.error("Table body not found in the document.");
      return;
    }

    
    users.forEach(user => {
      const row = document.createElement('tr');

      
      const usernameCell = document.createElement('td');
      usernameCell.innerText = user.username;

      const emailCell = document.createElement('td');
      emailCell.innerText = user.email;

      const companyCell = document.createElement('td');
      companyCell.innerText = user.company.name;

      const addressGeoCell = document.createElement('td');
      addressGeoCell.innerText = `Lat: ${user.address.geo.lat}, Lng: ${user.address.geo.lng}`;
      const postListCell = document.createElement('td');
      const postsList = document.createElement('ul');
      posts.forEach(post =>{
        if(post.userId === user.id)
            {
                const postTitleAndComments = document.createElement('li');

                var commentsCount = 0;
                comments.forEach( comment=>{
                    if(comment.postId === post.id)
                    {
                        commentsCount++;
                    }
                });
                postTitleAndComments.innerText = post.title + ' - ' + commentsCount + ' comments';
                postsList.appendChild(postTitleAndComments);
                
                
            }});


      
      postListCell.appendChild(postsList);
      row.appendChild(usernameCell);
      row.appendChild(emailCell);
      row.appendChild(companyCell);
      row.appendChild(addressGeoCell);
      row.appendChild(postListCell);
      tableBody.appendChild(row);
    });
  } catch (error) {
    console.error("Error:", error.message);
  }
})();
