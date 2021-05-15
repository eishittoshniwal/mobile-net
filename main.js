Webcam.set({
    width:300,
    height:300,
    image_format:'jpg',
    jpg_quality:90,
    constraints:{
        facingMode:'environment'
    }
})

Webcam.attach("camera")

console.log(ml5.version)