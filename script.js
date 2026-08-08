window.onload = function () {

    setTimeout(function () {

        document
            .getElementById("loading")
            .classList.remove("active");

        document
            .getElementById("operation")
            .classList.add("active");

    }, 1800);

};


function hideAll() {

    const screens =
        document.querySelectorAll(".screen");

    screens.forEach(function (screen) {

        screen.classList.remove("active");

    });

}


function showBriefing() {

    hideAll();

    document
        .getElementById("briefing")
        .classList.add("active");

}


function showRules() {

    hideAll();

    document
        .getElementById("rules")
        .classList.add("active");

}


function acceptMission() {

    hideAll();

    document
        .getElementById("clue")
        .classList.add("active");

}


function completeMission() {

    hideAll();

    document
        .getElementById("complete")
        .classList.add("active");

}