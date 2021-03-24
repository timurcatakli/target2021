# target2021
## System Design
## Day 10 - March 11, 2021

Topic: Designing a Tiny Url

Number of users (Who are we building for?): 10 big dot com companies.
Behavior: Write Once -> Read Many

Problem Statement:
We are designing a tinyUrl
It takes a longer Url => spits out shortened version of Url.
It takes a shortened version of Url => Redirects to the original Url.

Functional Requirements: (What the user does see)
Given a url, return a shorter url
Given a shorter url => redirect to orig url
Given an invalid url => show 404.
[v2]: User Authentication
[v2]: Expiry
[v2]: Multi url shortner

Non-Functional Requirements: (What the user does not see but important for the system)
Platforms: Web (/Mobile/iOs/Android)
Browser Matrix:
IE? 
N-1? Or N-2?
Latest Chrome/FF
PWA? (Progressive Web App)
Offline First? Or Mobile web or Web First.


Architecture: Ask if i should focus on frontend or both
Front-End Architecture:
Microservices on Front-End:
Input (url) => Microservice.
Button => Service
Code Architecture:
Web:
Components (npm)
Input
Src
Input.tsx
Input.test.tsx
Input.less
README
package.json
Mobile:


iOS
Android
Front-End Performance:
Webpack for code Splitting => Bundle.js
Caching Strategies:
Images => Browser Cache or Service Workers.
Animations => Web Workers.
PWA => Offline first.
Caching Strategies (Sw.js) => LRU? 30 days?
Client side rendering vs Server Side Rendering
Storage:
Local Storage vs Session Storage.
Synchronous
5MB limit.
JSON
IndexedDB => Async
[Instagram] Infinite Scrolling:
RAF
Document Fragments
Viewport
Long Polling vs Websockets vs Socket.io vs WebRTC vs SSE (Uni directional)
GraphQL vs REST vs HTTP 2.0
Internalizational (i18N)
Backend Architecture:
Reads: 100 records/sec (TPS)
Write: 10 records/sec
Ratio: 1:10
Load Balancer (Haproxy)
CDN
Caching
Database
Backend System Architecture: https://www.filepicker.io/api/file/MUI34NS4TnCr7AQfcNeM





REST API:
Talk about status codes
Patch vs post difference
post(user_id, orig_url, exp_date)
/api/v1/createUrl
user_id
orig_url
tiny_url
exp_date
200 O.K
500 => Something went wrong
401 => If auth fails.
get(orig_url) // redirect 306
/api/v1/getOriginalUrl
put(user_id, orig_url, tiny_url, exp_date) // updates
get_checkTinyValid
/api/v1/checkIfValid?tinyurl="abcd"&date="blabla"

Push the original url => MySQL
id | url | hash | timestamp  |...... | 
123sdcafaggg| https://google.com/abcdsadasdasdasdasdasd | a17283 | …


Unique ID * random Salt() [:N]

a17283bca: => tinyurl.com/a17283

KeyDB Service that has pre populated keys and will get one…


Links to refer:


https://micro-frontends.org/
https://webpack.js.org/concepts/module-federation/
https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/
Highly Advice: https://www.hiredintech.com/
https://www.filepicker.io/api/file/MUI34NS4TnCr7AQfcNeM
CAP theorem
Eventual Consistency.
Sharding Stategies.

