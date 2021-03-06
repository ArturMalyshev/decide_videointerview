navigator.mediaDevices.getUserMedia({ audio: true, video: true})
    .then(stream => {

        const mediaRecorder = new MediaRecorder(stream);
        document.querySelector('#start').addEventListener('click', function(){
            mediaRecorder.start();
        });
        var audioChunks = [];
        mediaRecorder.addEventListener("dataavailable",function(event) {
            audioChunks.push(event.data);
        });
        mediaRecorder.addEventListener("stop", function() {
            const audioBlob = new Blob(audioChunks);
            const audioUrl = URL.createObjectURL(audioBlob);
            var video = document.createElement('video');
            video.src = audioUrl;
            video.controls = true;
            video.autoplay = false;
            // document.querySelector('#video').appendChild(video);
            audioChunks = [];
            console.log(video);
            console.log(typeof(video.stream()));
            let reader = video.srcObject.stream().getReader();
            reader.onloadend = function() {
                let base64data = reader.result;
                console.log(base64data);
            }
        });
        document.querySelector('#stop').addEventListener('click', function(){
            mediaRecorder.stop();
        });
    });