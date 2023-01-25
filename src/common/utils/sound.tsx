import correctSound from "../../assets/sounds/correct.mp3";
import errorSound from "../../assets/sounds/incorrect.mp3";

export default function playAudio(audioRecord: string) {
  let url;
  if (audioRecord === "correct") {
    url = correctSound;
  } else if (audioRecord === "error") {
    url = errorSound;
  }
  const audio = new Audio(url);
  audio.play();
}
