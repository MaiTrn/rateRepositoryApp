export const round = (value, decimals = 1) => {
  return Math.round(value * 10 ** decimals) / 10 ** decimals;
};

const formatInThousands = (data) => {
  if (typeof data !== "number") {
    return undefined;
  }
  if (data < 1000) {
    return data.toLocaleString();
  }
  const inThousands = round(data / 1000);
  return `${inThousands.toLocaleString()}k`;
};

export default formatInThousands;
