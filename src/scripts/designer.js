console.log('js is connected')

var ImgUrl =  'https://source.unsplash.com/random';

const uploadImgEventHandler = () =>{
  const uploadDesignerImg = document.getElementById('designer');

  uploadDesignerImg.addEventListener('click', () =>{
    fetch(ImgUrl)
      .then((img) =>{
        console.log(img.url, 'this is the random img')
        var imageEle = document.createElement("img");
        imageEle.setAttribute("src", "https://source.unsplash.com/random");
        imageEle.setAttribute("id", 'randomImg');

        var ShowImg = document.getElementById('inner');
        ShowImg.append(imageEle);


        var disImg = document.getElementById('inner-txt');
        disImg.style.display = 'none';

        // disble the onclick EventListener to uplad img
        var designerEle = document.getElementById('designer');
        designerEle.style.pointerEvents = 'none';
      })
      .catch(function(error){
        console.log(error)
      })
  })
}

uploadImgEventHandler();

const rotateImgFn = () =>{
  const rotate = false;

  var rotateBtnHandler = document.getElementById("rotate");

  rotateBtnHandler.addEventListener('click', ()=>{
    console.log('rotate btn is listening')
    var img = document.getElementById("randomImg");

    img.style.transform = "rotate(90deg)";



    rotateBtnHandler.addEventListener('click', ()=>{
      console.log('rotate btn is listening')
      var img = document.getElementById("randomImg");

      img.style.transform = "rotate(0deg)";
    })


  })
}

rotateImgFn();
