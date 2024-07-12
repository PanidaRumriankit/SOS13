const getImage = (imageName) => {
    return new URL(`../assets/cardIMG/${imageName}`, import.meta.url).href;
};

export default getImage;