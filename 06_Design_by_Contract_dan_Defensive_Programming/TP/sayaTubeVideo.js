class SayaTubeVideo {
  constructor(title) {
    if (!title || typeof title !== "string") {
      throw new Error("Judul harus berupa string yang valid!");
    }

    this.id = Math.floor(10000 + Math.random() * 90000);
    this.title = title;
    this.playCount = 0;
  }

  IncreasePlayCount(count) {
    if (typeof count !== "number" || count <= 0) {
      throw new Error("Jumlah play count harus berupa angka positif!");
    }
    this.playCount += count;
  }

  PrintVideoDetails() {
    console.log(`Video ID    : ${this.id}`);
    console.log(`Judul       : ${this.title}`);
    console.log(`Play Count  : ${this.playCount}`);
  }
}

const video1 = new SayaTubeVideo(
  "Tutorial Design By Contract – [Irpan_Praktikan]"
);
video1.IncreasePlayCount(5);
video1.PrintVideoDetails();
