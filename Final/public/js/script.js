document.getElementById('upload-btn').addEventListener('click', function() {
    var fileInput = document.getElementById('tweet-upload');
    if(fileInput.files.length > 0){
        var file = fileInput.files[0];
        
        var mockResponse = {
            accuracy: "95%",
            f1_score: "0.93",
            precision: "0.94",
            recall: "0.92"
        };
        
        document.getElementById('results-section').style.display = 'block';
        document.getElementById('accuracy').textContent = mockResponse.accuracy;
        document.getElementById('f1-score').textContent = mockResponse.f1_score;
        document.getElementById('precision').textContent = mockResponse.precision;
        document.getElementById('recall').textContent = mockResponse.recall;
        
        document.getElementById('confusion-matrix').src = 'Final/assets/confusion_matrix.png';
        document.getElementById('learning-curve').src = 'Final/assets/learning_curve.png';
    }
});
