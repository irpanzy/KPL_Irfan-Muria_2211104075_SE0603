const SayaTubeVideo = require("./sayaTubeVideo");
const SayaTubeUser = require("./sayaTubeUser");

function main() {
  const username = "Irfan Muria";
  const user = new SayaTubeUser(username);

  const judulFilm = [
    "Review Film Masa Lalu Tetap Pemenangnya oleh Irfan Muria",
    "Review Film Interstellar oleh Irfan Muria",
    "Review Film Inception oleh Irfan Muria",
    "Review Film Parasite oleh Irfan Muria",
    "Review Film The Social Network oleh Irfan Muria",
    "Review Film The Dark Knight oleh Irfan Muria",
    "Review Film Whiplash oleh Irfan Muria",
    "Review Film Your Name oleh Irfan Muria",
    "Review Film Everything Everywhere All At Once oleh Irfan Muria",
    "Review Film The Secret Life of Walter Mitty oleh Irfan Muria",
  ];

  for (let judul of judulFilm) {
    const video = new SayaTubeVideo(judul);
    video.increasePlayCount(Math.floor(Math.random() * 100000));
    user.addVideo(video);
  }

  console.log("=== Detail Video ===");
  user.uploadedVideos.forEach((video) => video.printVideoDetails());

  console.log("\n=== Statistik User ===");
  user.printAllVideoPlaycount();
  console.log(`Total Play Count: ${user.getTotalVideoPlayCount()}`);
}

main();
