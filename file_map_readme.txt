Information about project folder structure and files.

lib
 Add custom jar files to this folder. Files added to this folder will be copied to WEB-INF for deployment and on the classpath.

services
 All services should be added via studio. Once added, services can be edit via eclipse or other editors, including adding additional classes. 
 Classes in this folder will be compiled when the project is run or deployed.
 Modifications to imported services can be lost upon re-import.
 
 To see external updates in studio, use the refresh button in the java editor.
 
src
 Custom java classes can be added to this folder using package names. Files added to this folder will be copied to WEB-INF for deployment.

src/main/resources
  log4j.properties can be edited to change logging settings.

src/main/webapp
  app.css:  application CSS
  index.html and login.html:  can be edited directly to customize, such as including meta, script and other tags.
  app.js : contains any application owned component definitions and functions.
  app.variables.json : contains any application variable definition.

src/main/webapp/WEB-INF/data
 HSQLDB database file folder. All HSQLDB databases must be in this folder.
 By default contains the example HSQLDB files. If your project does not use these sample dbs, you can delete these files. 
 
src/main/webapp/pages
 Each project page creates a folder by the name of the page, i.e Main. 
 All page files in the pages folder are studio managed. 
  
  Page CSS file (i.e. Main.css) contains custom css added in source, css or by applying custom styles to components.
  Page HTML file (i.e. Main.html) contains any custom markup added in the source, markup editor. Can be edited with the project closed.
  Page JS file (i.e. Main.js) can be edited via the file system. Use the refresh button in the source, script panel if you edit this file outside of studio.
  Page Variable file (i.e. Main.variable.json) can be edited via the file system. Use the refresh button in the source, script panel if you edit this file outside of studio.

src/main/webapp/services
 Contains service definition files used by studio. These files are not user editable. 
 
src/main/webapp/resources
 Created upon first use of the resources panel in studio. These are the folders uses by the resources panel and resources in binding. 

src/main/webapp/WEB-INF
  web.xml is a studio managed file. Use user-web.xml. Changes to user-web.xml will be merged into web.xml for deployment.

src/main/webapp/WEB-INF/classes
  This folder is populated by studio. Do not edit or add any files to this folder. Changes will be lost. Use project/src instead.

src/main/webapp/WEB-INF/lib
  This folder is populated by studio. Do not edit or add any files to this folder. Changes will be lost. Use project/lib instead.