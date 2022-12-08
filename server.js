let Stream = require('node-rtsp-stream');

let stream1 = new Stream({
    name: "nvr",
    streamUrl: `rtsp://admin:Jaspal's@192.168.0.100:554/Streaming/Channels/101`,
    wsPort: 90, 
    ffmpegOptions: { // options ffmpeg flags
        '-stats': '', // an option with no neccessary value uses a blank string
        '-r': 30 // options with required values specify the value after the key
    }
});


let stream2 = new Stream({
    name: "camera",
    streamUrl: `rtsp://admin:jp@12345@192.168.0.103:554/Streaming/Channels/101`,
    wsPort: 91, 
    ffmpegOptions: { // options ffmpeg flags
        '-stats': '', // an option with no neccessary value uses a blank string
        '-r': 30 // options with required values specify the value after the key
    }
});