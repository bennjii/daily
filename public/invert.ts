export default function invertHex(hex) {
    if(!hex) return;
    const hex_value = Number(`0x1${hex.replace("#", "")}`);

    console.log("VALUE:", Number(`0x${hex.replace("#", "")}`));
    console.log("WHITE:", Number(`0xFFFFFF`));
    console.log("BLACK:", Number(`0x000000`));
    const invert = (hex_value ^ 0xFFFFFF).toString(16).substring(1)


    
    return invert;
}