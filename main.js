 const cryear = (new Date()).getFullYear();
 document.querySelector("section.footers  p").innerHTML = `© Copyright ${cryear} Crotel - All Rights Reserved <br> Power by Ghost + github + jsDelivr + cloudflare workers`;
 document.getElementById("readMoreBtn").addEventListener("click", function () {
     document.getElementById("header").setAttribute('style', 'display:none;');
     document.getElementById("content").setAttribute('style', 'display:block;padding-top:10vh;');
     document.getElementById("footer").setAttribute('style', 'display:block;');

 });
 fetch('https://data.cro.tel/')
     .then(function (response) {
         if (!response.ok) {
             throw new Error("HTTP error, status = " + response.status);
         }
         return response.json();
     })
     .then(function (json) {
         for (var i = 0; i < json.posts.length; i++) {
             var fgpList = document.querySelector('.timeline ul');
             //var fgpListItem = document.createElement('div');
             //fgpList.setAttribute("class", 'container ' + 'timelines-container');

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
             var plaintext = json.posts[i].plaintext.replace(/\n+\n/g, '<br><br>'); // " \n\n " = " <br> "
             //plaintext.replace(/[\n\r]/g,'<br>');
             //if ((i % 2) == 0) {
             //var dateWidth = publishTime.toString().length;
             //console.log(dateWidth);
             //fgpListItem.setAttribute("class", 'row ' + 'timeline-element ' + 'reverse ' + 'separline');
             fgpList.innerHTML += `
<li><div class="content"><h3>${json.posts[i].title}</h3><p>${plaintext}</p></div><div class="point"></div><div class="date"><h4>${publishTime} </h4></div></li>`;
             //fgpListItem.innerHTML += "<span class='iconBackground'>" + '</span>';
             //fgpList.innerHTML += "<div class='col-xs-12 col-md-6 align-right animated fadeInLeft' style='padding-bottom: 3.5em;'>" + "<div class='timeline-text-content'>" + "<h4 class='timeline-title pb-3 fonts-style display-5' style='font-size: 1.5em;line-height: 3em;letter-spacing: 0.03em;'>" + json.posts[i].title + '<br>' + '</h4>' + "<p class='animated fadeIn timeline-text fonts-style display-7 align-left' style='font-size: 1em;line-height: 2em;letter-spacing: 0.1em;'>" + plaintext + '<br>' + '</p>' + '</div>' + '</div>';
             //fgpList.appendChild(fgpListItem);
             //            } else {
             //                fgpListItem.setAttribute("class", 'row ' + 'timeline-element ' + 'separline');
             //                fgpListItem.innerHTML = "<div class='timeline-date-panel col-xs-12 col-md-6 align-right'>" + "<div class='time-line-date-content'>" + "<p class='animated fadeInRight timeline-date fonts-style display-5'>" + publishTime + '<br>' + '</p>' + '</div>';
             //                //fgpListItem.innerHTML += "<span class='iconBackground'>" + '</span>';
             //                fgpListItem.innerHTML += "<div class='col-xs-12 col-md-6 align-left animated fadeInRight' style='padding-left: 5em;'>" + "<div class='timeline-text-content'>" + "<h4 class='timeline-title pb-3 fonts-style display-5' style='padding-left: 5em;'>" + json.posts[i].title + '<br><br>' + '</h4>' + "<p class='animated fadeIn timeline-text fonts-style display-7'>" + plaintext + '<br>' + '</p>' + '</div>' + '</div>';
             //                fgpList.appendChild(fgpListItem);
             //
             //            }
         }
     })
     .catch(function (error) {
         var p = document.createElement('p');
         p.appendChild(
             document.createTextNode('Error: ' + error.message)
         );
         document.body.insertBefore(p, fgpList);
     });
