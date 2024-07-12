const getImage = (imageName: string) => {
    return new URL(`../assets/cardIMG/${imageName}`, import.meta.url).href;
};

export default getImage;