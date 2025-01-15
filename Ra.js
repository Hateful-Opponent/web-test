function ra() {

    var randomIndex = Math.floor(Math.random() * 9);

    var element = document.getElementById("output");

    switch (randomIndex) {
        case 0 :
            element.innerHTML = "Non Terra Plus Ultra";
            break;
        case 1 :
            element.innerHTML = "Horizon";
            break;
        case 2 :
            element.innerHTML = "风景如画啊";
            break;
        case 3 :
            element.innerHTML = "裁雨留虹";
            break;
        case 4 :
            element.innerHTML = "斩尽芜杂";
            break;
        case 5 :
            element.innerHTML = "为了岩王帝君";
            break;
        case 6 :
            element.innerHTML = "惊天浪涛杀";
            break;
        case 7 :
            element.innerHTML = "你放屁!";
            break;
        case 8 :
            element.innerHTML = "闪电旋风劈";
            break;
    }

    var winningPrize = randomIndex;

    var imgElement = document.getElementById("outimg");

    var wheelItems = document.querySelectorAll('.wheel-item');

    wheelItems.forEach(function (wheelItem) {

        if (parseInt(wheelItem.dataset.t)-1 === winningPrize) {

            var imgSrc = wheelItem.querySelector('img').src;

            imgElement.src = imgSrc;
            imgElement.width = 180;
            imgElement.height = 300;

        }
    });
}




