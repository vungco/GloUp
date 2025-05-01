function shortenAddr(address) {
  if (address) {
    const start = address.substring(0, 4 + 2);
    const end = address.substring(address.length - 4);

    return `${start}...${end}`;
  } else {
    return undefined;
  }
}

export { shortenAddr };
