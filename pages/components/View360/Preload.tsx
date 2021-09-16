export default async function preloadImages(srcs) {
  console.log("preload entrie", srcs)
    function loadImage(src) {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = function() {
          resolve(img);
        };
        img.onerror = img.onabort = function() {
          reject(src);
        };
        img.src = src;
      });
    }
    const promises = srcs.map((image, index)=>{
      return loadImage(srcs[index])
    }) 
    return await Promise.all(promises);
  }