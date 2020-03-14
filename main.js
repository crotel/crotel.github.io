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
             var plaintext = json.posts[i].plaintext.replace(/\n+\n/g, '<br><br>');
             fgpList.innerHTML += `
<li><div class="content"><h3>${json.posts[i].title}</h3><p>${plaintext}</p></div><div class="point"></div><div class="date"><h4>${publishTime} </h4></div></li>`;
         }
     })
     .catch(function (error) {
         var p = document.createElement('p');
         p.appendChild(
             document.createTextNode('Error: ' + error.message)
         );
         document.body.insertBefore(p, fgpList);
     });
