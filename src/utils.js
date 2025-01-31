const images = import.meta.glob("../assets/**/*.png", { eager: true });

export const getImageUrl = (path) => {
  return images[`../assets/${path}`]?.default || "";
};