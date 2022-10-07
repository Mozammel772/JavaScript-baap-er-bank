const vlogs = document.getElementsByTagName('p');
 for ( const vlog of vlogs) {
    vlog.style.backgroundColor = 'red';
    vlog.style.color = 'white';
    vlog.style.margin = '30px';
    vlog.style.padding = '30px';
 }
const vloges = document.getElementById('Special-Vlogs');
vloges.style.fontSize = '20px';
vloges.style.textAlign = 'center';
vloges.style.padding = '10px';
vloges.innerHTML = `
   <h1>Hello World </h1>
   <div> 
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
        <li>Contact</li>
    </ul>
   </div>
`