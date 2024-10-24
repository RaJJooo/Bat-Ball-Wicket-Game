document.addEventListener("DOMContentLoaded", () => {
  const img1 = document.querySelector("#img1");
  const img2 = document.querySelector("#img2");
  const img3 = document.querySelector("#img3");
  const playbtn = document.querySelector(".playButton");

  let playerturn = false;
  let playerchoice;
  let compchoice;

  img1.addEventListener("click", function () {
    playerchoice = "bat";
    alert("You have chosen Bat");
    document.querySelector("#btn1").style.backgroundColor = "white";
    document.querySelector("#playButtonid").style.backgroundColor =
      "rgb(81, 239, 19)";
    playerturn = true;
  });

  img2.addEventListener("click", function () {
    playerchoice = "ball";
    alert("You have chosen Ball");
    document.querySelector("#btn1").style.backgroundColor = "white";
    document.querySelector("#playButtonid").style.backgroundColor =
      "rgb(81, 239, 19)";
    playerturn = true;
  });

  img3.addEventListener("click", function () {
    playerchoice = "wicket";
    alert("You have chosen Wicket");
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
      alert("First Your Turn!");
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
      alert("You played: " + playerchoice);
      document.querySelector("#playButtonid").style.backgroundColor = "white";
      document.querySelector("#btn2").style.backgroundColor =
        "rgb(81, 239, 19)";

      setTimeout(() => {
        compplay();
        alert("Computer chose: " + compchoice);
        determineWinner();
        playerturn = false;
      }, 2000);
    }
  }

  function determineWinner() {
    let result = "";
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
