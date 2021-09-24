import tinycolor from "tinycolor2";

const getCorrectIndex = (num) => {
    return num;
};

const generateAvatarFromHash = (hash) => {
    const [r, g, b] = hash
        .substr(0, 3)
        .split("")
        .map(char => getCorrectIndex(char.charCodeAt(0)));


    return {
        color: tinycolor({ r: r, g: g, b: b}).lighten(10).saturate(10),
        colorLighten : tinycolor({ r: r, g: g, b: b}).lighten(30).saturate(30)
    };
}

export default generateAvatarFromHash;