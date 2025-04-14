const SayaTubeVideo = require("./sayaTubeVideo");
const SayaTubeUser = require("./sayaTubeUser");

const user = new SayaTubeUser("Irfan Muria");

for (let i = 1; i <= 10; i++) {
  const video = new SayaTubeVideo(`Review Film Ke-${i} oleh Irfan Muria`);
  video.increasePlayCount(25000);
  user.addVideo(video);
}

new SayaTubeVideo("A".repeat(201));

new SayaTubeUser("X".repeat(101));

user.addVideo(null);

const failVideo = new SayaTubeVideo("Coba Play Count Besar");
failVideo.increasePlayCount(999999999);

const overflowVideo = new SayaTubeVideo("Simulasi Overflow");
for (let i = 0; i < 100; i++) {
  overflowVideo.increasePlayCount(25000000, true);
}
user.addVideo(overflowVideo);

console.log("\n=== Daftar Video Irfan Muria ===");
user.printAllVideoPlaycount();

console.log("\nTotal Semua Play Count:", user.getTotalVideoPlayCount());
