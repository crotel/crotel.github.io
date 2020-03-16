 const cryear = (new Date()).getFullYear();
 document.querySelector("section.footers  p").innerHTML = `© Copyright ${cryear} Crotel - All Rights Reserved <br> Powered by Ghost + Github + jsDelivr + Cloudflare Workers`;
 document.getElementById("readMoreBtn").addEventListener("click", function () {
     document.getElementById("header").setAttribute('style', 'display:none;');
     document.getElementById("content").setAttribute('style', 'display:block;padding-top:10vh;');
     document.getElementById("footer").setAttribute('style', 'display:block;');

 });
 fetch('https://cro.tel/data/')
     .then(function (response) {
         if (!response.ok) {
             throw new Error("HTTP error, status = " + response.status);
         }
         return response.json();
     })
     .then(function (json) {
         for (var i = 0; i < json.posts.length; i++) {
             var fgpList = document.querySelector('.timeline ul');

             function formatDate(date) {
                 var d = new Date(date),
                     month = '' + (d.getMonth() + 1),
                     day = '' + d.getDate(),
                     year = d.getFullYear();

                 if (month.length < 2)
                     month = '0' + month;
                 if (day.length < 2)
                     day = '0' + day;

                 return [year, month, day].join('-');
             }
             var publishTime = formatDate(json.posts[i].published_at);
             var filterUrl = /((www\.)?[a-zA-Z0-9_]{1,}(\-)?[a-zA-Z0-9_]{1,}\.[a-z]{2,}\b([a-zA-Z0-9@:%_\+.~#?&//=]*)|(www\.)?[a-zA-Z0-9_]{1,}\.[a-z]{2,}\b([a-zA-Z0-9@:%_\+.~#?&//=]*))/g;
             var filterTodo = /\?+\?/g;
             var filterUpdate = /\++\+/g;
             var filterPs = /\!+\!/g;
             var preRLB1 = json.posts[i].plaintext.replace(filterTodo, '<span class="todo"></span>');
             var preRLB2 = preRLB1.replace(filterUpdate, '<span class="update"></span>');
             var preRLB3 = preRLB2.replace(filterPs, '<span class="attention"></span>');
             var replaceLineBreak = preRLB3.replace(/\n+\n/g, '<br><br>');
             var getTitleUrl = new RegExp(filterUrl);
             var plaintext, titleUrl;
             
             function gUrl(){
                 var r = replaceLineBreak
                 var m = replaceLineBreak.match(getTitleUrl);
                 var p = plaintext;
                 var t = titleUrl;
                 if (m != null) {
                     p = r.replace(filterUrl, '');
                     t = m.toString();
                     fgpList.innerHTML += `
<li><div class="content"><h3><a href="https://${t}">${json.posts[i].title}<span>i</span></a></h3><p>${p}</p></div><div class="point"></div><div class="date"><h4>${publishTime} </h4></div></li>`;
                     console.log(p,t);
                     return;
                 } else {
                     p = r;
                     fgpList.innerHTML += `
<li><div class="content"><h3>${json.posts[i].title}</h3><p>${p}</p></div><div class="point"></div><div class="date"><h4>${publishTime} </h4></div></li>`;
                     console.log(p);
                     return;
                 }
             }
             gUrl();
         }
     })