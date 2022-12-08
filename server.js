let Stream = require('node-rtsp-stream');
let s = "'s"
let stream1 = new Stream({
    name: "testing",
    streamUrl: `rtsp://admin:Jaspal's@192.168.0.100:554/Streaming/Channels/101`,
    wsPort: 99, 
    ffmpegOptions: { // options ffmpeg flags
        '-stats': '', // an option with no neccessary value uses a blank string
        '-r': 30 // options with required values specify the value after the key
    }
});


