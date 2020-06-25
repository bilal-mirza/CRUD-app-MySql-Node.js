# CRUD-app-MySql-Node.js
<p>Create, read, update and delete application in  Node.js</p>
<h4>Requirements</h4>
<li>Download and install node.js from its <a href="https://nodejs.org/en/download/">official site</a>
<li>Any code editor,<a href="https://code.visualstudio.com/download"> VS Code</a> is preferred
<li><a href="https://www.apachefriends.org/download.html">xampp </a> server for database 
<h4>Install following npm packages</h4>
<li>MySql <code>npm i mysql</code></li>
<li>express <code>npm i express</code></li>
<p><b>Running app in local</b><br>After installing all required modules, open command window and type <code>node app.js</code> to execute the code.<br>Now open the browser and go to <code>localhost:3000/</code>, this will redirect you to the index page.
<p><b>Performing CRUD operations</b><br>To add new product in database, type <code>localhost:3000/addprod1</code> and <code>localhost:3000/addprod2</code><br>To delete product, type <code>localhost:3000/delete/1</code> (here 1 is the id of that product)<br>To update a product, type <code>localhost:3000/update/1</code><br>To display all product, type <code>localhost:3000/listprod</code><br>
