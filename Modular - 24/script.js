const blogs1 = document.getElementById('First-Blogs');
blogs1.style.color = 'red';
blogs1.style.textAlign = 'center';
blogs1.style.fontSize = '30px';
blogs1.style.setAttribute = 'First-Blogs' ,'Mozammel Hosen';

const blogs2 = document.getElementById ('second-blogs');
blogs2.style.color = 'green';
blogs2.style.textAlign = 'center';
blogs2.innerText = 'Hello World';
blogs2.setAttribute = 'second-blogs','Mozammel Hosen';
blogs2.style.fontSize = '50px';

const myBlogs = document.getElementsByClassName('Blogs');
for ( const blog of myBlogs) {
    blog.style.border = '2px solid red';
    blog.style.borderRadius = '10px';
    blog.style.margin = '20px';
    blog.style.padding = '20px';
}


const li = document.createElement('li');
li.innerText = 'Blogs-5';
const ul = document.getElementById('blogs-list');
ul.appendChild(li);

const article = document.createElement('article');
const h3 = document.createElement('h3');
h3.innerText = 'my Bloges - 5';
const p = document.createElement ('p');
p.innerText = 'My Best Blogs In This Video';

article.appendChild(h3);
article.appendChild(p);

const blogSection = document.getElementById('Blogs');
blogSection.appendChild(article);


