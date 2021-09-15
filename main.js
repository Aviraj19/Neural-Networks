Webcam.set({
    width:350,height:300,image_format:'png',png_quality:90,dest_width:340,dest_height:270
});
camera=document.getElementById("camera")
Webcam.attach("camera")
function take_snapshot() {
    Webcam.snap (function (data_url){
        document.getElementById("result").innerHTML="<img id='new_img' src='"+data_url+"'>";
    });
}
console.log("ml5 version",ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/egzMExuBK/model.json",modelloaded)
function modelloaded() {
    console.log("model is loaded")
}