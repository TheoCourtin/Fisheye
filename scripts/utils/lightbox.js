// var slideIndex = 1;
// showSlides(slideIndex);

const Lightbox = document.querySelector('.lightbox');
const lightboxClose = document.querySelector('.lightbox-close');

// Open the Modal
//  
  function displayLightBoxMedia(src,title,id)
  {
    const lightboxImg = document.querySelector('.lightbox img');
    const lightboxVideo = document.querySelector('.lightbox video');
    const lightboxTitle = document.querySelector('.lightbox h3');
    const ext = getExtension(src); 
    if( ext == "jpg")
    {
    lightboxImg.src = src;
    lightboxVideo.style.display = "none";
    lightboxImg.style.display = "block";

    }
    else {
        lightboxVideo.src = src;
        lightboxImg.style.display = "none";
        lightboxVideo.style.display = "block";
    }
    lightboxTitle.textContent = title;
    Lightbox.style.display = "block";
    nextMedia(id);
  }
  
  // Close the Modal
  function hideLightBox() {
    
    Lightbox.style.display = "none";
  }  
 
  lightboxClose.addEventListener("click", hideLightBox);
  
  function getExtension(chemin)
{
   var regex = /[^.]*$/i;
   var resultats = chemin.match(regex);
   return resultats[0];
}

function nextMedia(mediaId)
{
    const gallery = document.querySelector(".photographer_gallery");
    console.log(gallery);
    
    const next = document.querySelector('.fa-chevron-right');
    next.addEventListener("click", function (e) {
        var nextMediaSrc = "";
        var nextMediaTitle = "";
        var currentMediaSrc = "";
        var currentMediaTitle = "";
        var nextMediaid ="";

        
        var find = false;
            for (var i = 0; i < gallery.children.length; i++)
            {
                var article = gallery.children[i];
                // const article = gallery[element];
                //console.log(article);
                var img = article.children[0];
                //console.log(img) ;
                var src = img.getAttribute("src");
                //console.log(src);
                var title = img.getAttribute("alt");
                //console.log(title);
                var dataId = article.getAttribute("data-id");
                console.log(dataId + "  /" + mediaId);
                // const article = gallery[element].getAttribute("article");
                // const img = article.getAttribute("img");
              if (dataId === mediaId ) 
              {
                find = true;
                console.log(find);
                currentMediaSrc = src;
                currentMediaTitle = title;
              }
              else {
                if (find = true)
                {
                    console.log("break");
                    nextMediaSrc = src;
                    nextMediaTitle = title;
                    nextMediaid = dataId;
                    break;
                }
              }
            
        }
        if (find == true)
        {
            displayLightBoxMedia(nextMediaSrc,nextMediaTitle,dataId);

        }
        else 
        {
            displayLightBoxMedia(currentMediaSrc,currentMediaTitle, dataId);
        }  
       
    })
}

