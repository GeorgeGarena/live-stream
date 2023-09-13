import ffmpeg from "fluent-ffmpeg";

export default {
  convertToHls: async (file) => {
    return new Promise((resolve) => {
      ffmpeg(file, { timeout: 432000 })
        .addOptions([
          "-profile:v baseline",
          "-level 3.0",
          "-s 640x360",
          "-start_number 0",
          "-hls_time 10",
          "-hls_list_size 0",
          "-f hls",
        ])
        .output("./source-m3u8/output.m3u8")
        .on("end", () => {
          console.log("finish");
          resolve(void 0);
        })
        .run();
    });
  },
};
