
// Helper function to get correct path for assets
const getAssetPath = (path: string) => {
  // If it's already an external URL, return as is
  if (path.startsWith('http')) return path;
  
  // For local development vs production (GitHub Pages)
  return path;
};

export const frontendSkills = [
  { name: 'Bootstrap', image: getAssetPath('/src/components/assets/bootstrap.png') },
  { name: 'CSS3', image: getAssetPath('/src/components/assets/css.png') },
  { name: 'Figma', image: getAssetPath('/src/components/assets/figma.png') },
  { name: 'Git', image: getAssetPath('/src/components/assets/git.png') },
  { name: 'HTML5', image: getAssetPath('/src/components/assets/html.png') },
  { name: 'JavaScript', image: getAssetPath('/src/components/assets/javascript.png') },
  { name: 'Next.js', image: getAssetPath('/src/components/assets/next.webp') },
  { name: 'React', image: getAssetPath('/src/components/assets/react.png') },
  { name: 'Redux', image: getAssetPath('/src/components/assets/redux.png') },
  { name: 'Sass', image: getAssetPath('/src/components/assets/sass.png') },
  { name: 'WordPress', image: getAssetPath('/src/components/assets/wordpress.png') },
];

export const backendSkills = [
  { name: 'Ruby', image: getAssetPath('/src/components/assets/ruby.png') },
  { name: 'Rails', image: getAssetPath('/src/components/assets/rails.png') },
];

export const designTools = [
  { name: 'Figma', image: getAssetPath('/src/components/assets/figma.png') },
  { name: 'Adobe Illustrator', image: getAssetPath('/src/components/assets/illustrator.png') },
  { name: 'Adobe Photoshop', image: getAssetPath('/src/components/assets/photoshop.png') },
];

export const skillDescriptions = {
  frontend: "Creating responsive, interactive websites with modern frontend technologies.",
  backend: "Building robust server-side applications and APIs with efficient database management.",
  design: "Creating visually appealing designs and user interfaces using professional design tools."
};
