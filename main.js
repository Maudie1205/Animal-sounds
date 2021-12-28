function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true})
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/1uF-inxES/model.json',modelReady);
    function modelReady(){
    classifier.classify(gotResults);
    }
}

