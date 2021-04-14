export default function invertHex(hex) {
    if(!hex) return;
    const invert = (Number(`0x1${hex.replace("#", "")}`) ^ 0xFFFFFF).toString(16).substring(1)
    
    return invert;
}