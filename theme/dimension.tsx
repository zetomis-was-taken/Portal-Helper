export const getDimensionTier = (
  width: number,
): "small" | "medium" | "large" => {
  if (width < 768) {
    return "small";
  } else if (width >= 768 && width < 1024) {
    return "medium";
  }

  return "large";
};
