document.addEventListener("DOMContentLoaded", () => {
  const img1 = document.querySelector("#img1");
  const img2 = document.querySelector("#img2");
  const img3 = document.querySelector("#img3");
  const playbtn = document.querySelector(".playButton");

  let playerturn = false;
  let playerchoice;
  let compchoice;

  let firsttext;

  img1.addEventListener("click", function () {
    playerchoice = "bat";
    firsttext.innerHTML = "You have chosen Bat";
    document.querySelector("#btn1").style.backgroundColor = "white";
    document.querySelector("#playButtonid").style.backgroundColor =
      "rgb(81, 239, 19)";
    playerturn = true;
  });

  img2.addEventListener("click", function () {
    playerchoice = "ball";
    firsttext.innerHTML = "You have chosen Ball";
    // alert("You have chosen Ball");
    document.querySelector("#btn1").style.backgroundColor = "white";
    document.querySelector("#playButtonid").style.backgroundColor =
      "rgb(81, 239, 19)";
    playerturn = true;
  });

  img3.addEventListener("click", function () {
    playerchoice = "wicket";
    firsttext.innerHTML = "You have chosen Wicket";
    document.querySelector("#btn1").style.backgroundColor = "white";
    document.querySelector("#playButtonid").style.backgroundColor =
      "rgb(81, 239, 19)";
    playerturn = true;
  });

  function compplay() {
    let choice = Math.random() * 3;
    if (choice >= 0 && choice <= 1) compchoice = "bat";
    else if (choice > 1 && choice <= 2) compchoice = "ball";
    else compchoice = "wicket";
  }

  playbtn.addEventListener("click", function () {
    if (playbtn.innerHTML === "PLAY AGAIN") resetGame();
    if (!playerturn) {
      firsttext = document.createElement("p");
      firsttext.innerHTML = "First Your Turn!";
      firsttext.style.background = "White";
      firsttext.style.marginTop = "10px";
      firsttext.style.fontSize = "20px";
      firsttext.style.fontFamily= "cursive";
      playbtn.after(firsttext);
      document.querySelector("#btn1").style.backgroundColor =
        "rgb(81, 239, 19)";
    } else {
      play();
    }
  });

  function resetGame() {
    document.querySelector("#img1").style.display = "inline";
    document.querySelector("#img2").style.display = "inline";
    document.querySelector("#img3").style.display = "inline";
    document.querySelector("#btn1").style.display = "inline";
    document.querySelector("#btn2").style.display = "inline";

    document.querySelector("#btn1").style.backgroundColor = "rgb(81, 239, 19)";
    document.querySelector("#btn2").style.backgroundColor = "white";
    document.querySelector("#playButtonid").style.backgroundColor = "white";

    document.querySelector("#sec1").style.display = "none";
    document.querySelector("#playButtonid").innerText = "PLAY";

    playerchoice = null;
    compchoice = null;
    playerturn = false;
  }

  function play() {
    if (playerturn) {
      firsttext.innerHTML = "You have chosen: " + playerchoice;
      document.querySelector("#playButtonid").style.backgroundColor = "white";
      document.querySelector("#btn2").style.backgroundColor =
        "rgb(81, 239, 19)";

      compplay();
      let comptext = document.createElement("p");
      firsttext.after(comptext);
      comptext.style.background = "White";
      comptext.style.fontSize = "20px";
      comptext.style.fontFamily= "cursive";
      comptext.innerHTML = "Computer chose: " + compchoice;
      playerturn = false;
      setTimeout(() => {
        setTimeout(determineWinner(), 1000);
      }, 2000);
    }
  }

  function determineWinner() {
    let result = "";
    if (playbtn.nextSibling) {
      firsttext.nextSibling.remove();
      playbtn.nextSibling.remove();
    }
    if (playerchoice === compchoice) {
      result = "It's a tie! 🙂";
    } else if (
      (playerchoice === "bat" && compchoice === "ball") ||
      (playerchoice === "ball" && compchoice === "wicket") ||
      (playerchoice === "wicket" && compchoice === "bat")
    ) {
      result = "Congrats!! You win 💯";
    } else {
      result = "You lose! 😞";
    }

    document.querySelector("#img1").style.display = "none";
    document.querySelector("#img2").style.display = "none";
    document.querySelector("#img3").style.display = "none";
    document.querySelector("#btn1").style.display = "none";
    document.querySelector("#btn2").style.display = "none";

    document.querySelector("#sec1").style.display = "block";
    document.querySelector("#playButtonid").innerText = "PLAY AGAIN";
    document.querySelector("#sec1").innerText = result;
  }
});
