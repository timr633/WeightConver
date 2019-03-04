document.getElementById('output').style.visibility = 'hidden';
document.getElementById('lbsInput').addEventListener('input', function (e) {
    document.getElementById('output').style.visibility = 'visible';
    let lbs = e.target.value;
    document.getElementById('gramsOut').innerHTML = lbs / 0.0022046;
    document.getElementById('KgramsOut').innerHTML = lbs / 2.2046;
    document.getElementById('ozOut').innerHTML = lbs * 16;
});



