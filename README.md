# FUL.REST. 
- ### DESCRIPTION  

	Standalone CMS with Dashboard Client.
	  
		Just using the client.  
		Or kept server and client yourself.

	## 

	 ### `re-Design` : 
	- [x] **Back-end**: Nodejs + mqtt + levelDB + ipfs.
	- [x] **Front-end**: HTML + JSON.
	- [x] **Dashboard**: Electron.

 ## BASE STRUCTURE AND UPDATE.  

- **No superfluous external .CSS or .JS**.  
- **Pure JavaScript**.  
- *~~<em style="color:#777;">Ghost handle rest api~~.</em><sup style="color:#777;">removed</sup>*  
- *~~<em style="color:#777;">jsDelivr handle the static files with Github as CDN~~.</em><sup style="color:#777;">removed</sup>*  
- *~~<em style="color:#777;">Github host static files which like js, css and html~~.</em><sup style="color:#777;">removed</sup>*  
- *~~<em style="color:#777;">Cloudflare Workers handle fetch json, combine with CDN output html for final viewpoint~~.</em><sup style="color:#777;">removed</sup>*  
- **Statics via `Cloudflare Pages` with `github`.** *<sup style="color:red;">new</sup>*  
- **Data via `levelDB` + `ipfs`.** *<sup style="color:red;">new</sup>*  
- **Date-Transfer via `mqtt`.** *<sup style="color:red;">new</sup>*  
- **Admin Dashboard as client via `Electron`.** *<sup style="color:red;">new</sup>*  
- **Output HTML + JSON.** *<sup style="color:red;">new</sup>*  
- **Plugins** *<sup style="color:red;">new</sup>*  
	- a p2p HLS player.  
	- some tools  
	- ...   

	##   
  
  
## TODO
- [ ] Account signup, signin, reset and delete.
- [ ] Front-end realtime notices .
- [ ] Secure MFA auth.
- [ ] HTTP/3 (Quic). 



 #   
   <em style="text-align:right;">**`[Update march, 2021]`**</em>
