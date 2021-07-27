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
            ["--approval-color"]: "11, 69, 39"
        }
    },
    {
        name: "blurple",
        colors: {
            ["--primary-color"]: "157,114,168",
            ["--complementary-color"]: "20,10,27",
            ["--background-color"]: "23,11,31",
            ["--clock-color"]: "255, 255, 255",
            ["--approval-color"]: "26,7,38"
        }
    },
    {
        name: "night",
        colors: {
            ["--primary-color"]: "59, 59, 59",
            ["--complementary-color"]: "20,10,27",
            ["--background-color"]: "0, 0, 0",
            ["--clock-color"]: "0, 0, 0",
            ["--approval-color"]: "0, 0, 0"
        }
    },
    {
        name: "gay sex dungeon",
        colors: {
            ["--primary-color"]: "255, 0, 0",
            ["--complementary-color"]: "255, 255, 255",
            ["--background-color"]: "0, 0, 0",
            ["--clock-color"]: "0, 0, 0",
            ["--approval-color"]: "255, 0, 0"
        }
    }
];

export const saveTheme = (theme) => {
    console.log("Saving Theme...", theme);
    console.log("STRINGIFIED: ", JSON.stringify(theme));

    localStorage.setItem(`custom-${theme.name}`, JSON.stringify(theme));
    return true;
}

export const loadTheme = (name) => {
    const loaded_theme = JSON.parse(localStorage.getItem(`custom-${name}`));

    console.log(loaded_theme);

    if(loaded_theme) {
        const index = theme_list.findIndex(e => e.name == name)
        if(index !== -1) {
            theme_list.splice(index, 1, loaded_theme);
        }else {
            theme_list.push(loaded_theme);
        }

        return loaded_theme; 
    }
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