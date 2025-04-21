const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// access Webcam
navigator.mediaDevices.getUserMedia({ video: true })
.then(stream=>{
  video.srcObject =  stream;
})
.catch(error => {
  alert('Error accessing Webcam : ' + error);
});

// capture frame
function capturePhoto(){
  ctx.drawImage(video, 0, 0, canvas.clientWidth, canvas.height);
}

