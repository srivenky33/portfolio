const images = import.meta.glob("../assets/**/*.png", { eager: true });

export const getImageUrl = (path) => {
  const imgPath = `../assets${path}`;
  if (images[imgPath]) {
    return images[imgPath].default;
  }
  console.error("Image not found:", imgPath);
  return "/assets/default.png"; // Fallback image
};
