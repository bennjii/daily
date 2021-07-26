export const theme_list = [
    {
        name: 'custom',
        colors: {
            ["--primary-color"]: "59, 59, 59",
            ["--complementary-color"]: "255, 255, 255",
            ["--background-color"]: "238, 235, 226",
            ["--clock-color"]: "255, 255, 255",
            ["--approval-color"]: "34, 109, 56"
        }
    },
    {
        name: 'default',
        colors: {
            ["--primary-color"]: "59, 59, 59",
            ["--complementary-color"]: "255, 255, 255",
            ["--background-color"]: "238, 235, 226",
            ["--clock-color"]: "255, 255, 255",
            ["--approval-color"]: "34, 109, 56"
        }
    },
    {
        name: "monochrome",
        colors: {
            ["--primary-color"]: "0, 0, 0",
            ["--complementary-color"]: "255, 255, 255",
            ["--background-color"]: "255, 255, 255",
            ["--clock-color"]: "255, 255, 255",
            ["--approval-color"]: "34, 109, 56"
        }
    },
    {
        name: "blu",
        colors: {
            ["--primary-color"]: "58, 66, 72",
            ["--complementary-color"]: "255, 255, 255",
            ["--background-color"]: "246, 249, 251",
            ["--clock-color"]: "255, 255, 255",
            ["--approval-color"]: "32, 79, 99"
        }
    },
    {
        name: "blackout",
        colors: {
            ["--primary-color"]: "255, 255, 255",
            ["--complementary-color"]: "0, 0, 0",
            ["--background-color"]: "0, 0, 0",
            ["--clock-color"]: "255, 255, 255",
            ["--approval-color"]: "34, 109, 56"
        }
    }
];

export const saveTheme = () => {
    console.log(theme_list);
}

export const hexToRGB = (hex) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function componentToHex(c) {
    const value = parseInt(c);

    var hex = value.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

export const RGBToHex = (rgb) => {
    const [r, g, b] = rgb.split(',');

    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export const getThemeColor = (theme_name, color) => {
    return theme_list.find(e => e.name == theme_name).colors[color];
}