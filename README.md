# Fulrest. 

A Front-End fitup Restapi + Github + jsDelivr + Cloudflare Workers.

## BASE STRUCTURE AND UPDATE.

- [x] No superfluous external css or js.
- [x] Pure JavaScript.
- [x] Ghost handle rest api.
- [x] Github host static files which like js, css and html.
- [x] jsDelivr handle the static files in Github for self CDN output.
- [x] Cloudflare Workers handle fetch json, combine with CDN output html for final viewpoint.
  
  
## TODO
- [ ] profile, signup, login and submit.
- [ ] front-end editable.
- [ ] standalone backend cover ghost.
- [ ] MFA auth.
- [ ] Progressive Web App (PWA). 
- [ ] ? render rest api content for solo json files. ` static files was the only better choice now for cache. except other cover it.`
  - [ ] ? json split as month or week or day.
  - [ ] ? automatic update in fixed time or while new posts.
- [ ] ? p2p.



* * *
##### Note: Cloudflare Workers was a cool thing.
  1. Work as a second proxy layer before nginx, 
  2. Kind of like a function-as-a-service layer and perform a little logic processing.
  3. Help hidden some secret key which like rest api content key or auth key. 
