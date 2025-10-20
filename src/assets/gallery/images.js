const importImages = () => {
  const images = import.meta.glob("./*.{jpg,jpeg,png", { eager: true });
  return Object.values(images).map((img) => img.default);
};

export const galleryImages = importImages();
