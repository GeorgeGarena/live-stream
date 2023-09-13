import ffmpegHelper from "./ffmpeg-helper.js";

(async () => {
  await ffmpegHelper.convertToHls("./source.mp4");
})();
