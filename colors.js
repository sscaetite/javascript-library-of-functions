const getHexColor = (hex) => {
  const isValidHexColor =
    typeof hex === "string" &&
    hex.replace("#", "").length === 6 &&
    !isNaN(Number("0x" + hex));
  if (isValidHexColor) return "#" + hex;
  else return "#11ab6b";
};
