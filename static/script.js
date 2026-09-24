let currentStep = 1;

const instruction = document.getElementById("instruction");
const description = document.getElementById("description");
const button = document.getElementById("actionButton");

const stepNumber = document.getElementById("stepNumber");
const progress = document.getElementById("progress");

const packet = document.getElementById("packet");
const noodles = document.getElementById("noodles");
const water = document.getElementById("water");
const masala = document.getElementById("masala");

const spoon = document.getElementById("spoon");
const steam = document.getElementById("steam");


function nextStep() {

    if (currentStep === 1) {

        instruction.innerText = "Packet opened!";

        description.innerText =
            "Now put those noodles into the bowl.";

        button.innerText = "PUT NOODLES IN";

        packet.style.transform = "rotate(-15deg) translateY(-20px)";

        currentStep = 2;
    }

    else if (currentStep === 2) {

        noodles.style.opacity = "1";

        instruction.innerText = "Noodles acquired.";

        description.innerText =
            "Excellent. Now add some water.";

        button.innerText = "ADD WATER";

        currentStep = 3;
    }

    else if (currentStep === 3) {

        water.style.height = "55px";

        instruction.innerText = "Water added.";

        description.innerText =
            "Now stir everything together.";

        button.innerText = "STIR";

        currentStep = 4;
    }

    else if (currentStep === 4) {

        spoon.classList.add("stirring");

        instruction.innerText = "STIRRING...";

        description.innerText =
            "Please pretend this is extremely important.";

        button.innerText = "DONE STIRRING";

        setTimeout(() => {

            spoon.classList.remove("stirring");

        }, 2500);

        currentStep = 5;
    }

    else if (currentStep === 5) {

        instruction.innerText = "Cooking...";

        description.innerText =
            "Please wait. Maggie is having a moment.";

        button.disabled = true;

        steam.classList.remove("hidden");

        let seconds = 5;

        button.innerText = `COOKING ${seconds}s`;

        const timer = setInterval(() => {

            seconds--;

            button.innerText = `COOKING ${seconds}s`;

            if (seconds <= 0) {

                clearInterval(timer);

                button.disabled = false;

                button.innerText = "ADD MASALA";

                instruction.innerText =
                    "Almost there!";

                description.innerText =
                    "The most important step: MASALA.";

                currentStep = 6;
            }

        }, 1000);
    }

    else if (currentStep === 6) {

        masala.style.opacity = "1";

        instruction.innerText =
            "🎉 MAGGIE READY! 🎉";

        description.innerText =
            "Congratulations. You just made virtual Maggie.";

        button.innerText = "EAT IT 🍜";

        progress.style.width = "100%";

        currentStep = 7;
    }

    else {

        instruction.innerText =
            "🍜 You ate the virtual Maggie.";

        description.innerText =
            "Was it worth it? Absolutely not.";

        button.innerText = "PLAY AGAIN";

        button.onclick = restartGame;
    }


    updateProgress();
}


function updateProgress() {

    const percentage =
        ((currentStep - 1) / 6) * 100;

    progress.style.width =
        percentage + "%";

    stepNumber.innerText =
        `STEP ${Math.min(currentStep, 6)} OF 6`;
}


function restartGame() {

    currentStep = 1;

    noodles.style.opacity = "0";

    water.style.height = "0";

    masala.style.opacity = "0";

    packet.style.transform = "";

    spoon.classList.remove("stirring");

    steam.classList.add("hidden");

    button.disabled = false;

    button.onclick = nextStep;

    instruction.innerText =
        "Let's make some Maggie!";

    description.innerText =
        "First, open the Maggie packet.";

    button.innerText =
        "OPEN PACKET";

    progress.style.width = "0%";

    stepNumber.innerText =
        "STEP 1 OF 6";
}