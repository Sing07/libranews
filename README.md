Sr Project : LibraNews

<h1>
Summary of what I've learned
</h1>

Demo video: https://www.youtube.com/watch?v=uuVf_DtTHKA 

1. Server Side Rendering (SSR), Static Site Generation (SSG), Client Side Rendering (CSG)
   
 - Server Side Rendering
    - Basically allows static html pages to be generated on the server, and send to the client directly as opposed to conventional web dev approaches. This improves site load up time, essentially giving seamless and faster user experience when visiting the site.
      
 - Static Site Generation
    - Right after the build from SSR, this is when static pages that do no have client interactions (like button clicks, etc) can be generated on the server and sent to the client. Improving client's page rending time because no Javascript is required to run on client's browser.
  
 - Client Side Rendering
    - This is when a Page can be opted into client component with the 'use client' directive in NextJS, allowing the page to be seamlessly switched to a client component when user interaction is present (where states of app will be changed by user)

2. State Management (We don't always need a 3rd Party state manangement library/tool)
    - There are so many ways state can be managed with some many tools our there, but they can get complicated and overkill for small applications. There is actually many built-in features of the browser we overlook, like the url for example, where we can a store state and also improve user experience. This enables experiences were pages with specific page/post/item can be copied from the URL and shared with others, for e.g 'https://shirts.com/item/id3023' can be shared with others where they look at the same across all client's browser session.

3. Knowing when and what to use asynchronous/synchronous control on 
   - Given that asynchronous is so mainstream, it can be a confusing to some as to when should we use asynchronous or a synchronous flow when it comes to different aspects and applications when building a webpage or an full fledged application. Choosing between both can be as difficult when it comes to design of databases in our app, down to just a dynamic or static page on a simple website.

4. Full stack development with META frameworks (NextJS, Astro, etc)
   - In essense, developing with NextJS taught me how to correctly handle and seperate client and server data for security and data integrity reasons.
   - Separation of concern for UI (front-end), api, database, sessions (backends)
   - Strict layers of form valiations.
   - Strict layers of database integrity validation.
  
5. Databases (MongoDB, SQL)
 - I used MongoDB for this project, due do it's slight ease of use compared to SQL. It has taught me practical ways to design Database Schemas in the form of it's native 'document' orientated datamodels as compared to tables (row and columns) in SQL-related languages.

6. User Authentication & Permissions
- Each unique user will be assigned their own sessions, tokens, and perimssion for when they are logged in/out.

<h1> 
Potential future IMPROVEMENTS:
</h1>
<li>
Querying for different posts from api each refresh
</li>
<li>
Self-hosting for faster server of web app
</li>
  
  <h1>
Potential future FEATURES:
  </h1>
  <li>
Make entities of media groups
  </li>
  <li>
Get post from api source with full content, including spacings for completeness
  </li>
  <li>
Sentimental analysis to categorize and label biases
  </li>
  <li>
Post metric 
  </li>
  <li>
Add toast for notifications
  </li>
  <li>
Add comment/ show comment bar
  </li>
  <li>
Connect AWS S3 or UploadThing for storing Images
  </li>
