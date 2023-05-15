export function formatPrice(price) {
  const formattedPrice = new Intl.NumberFormat("id-ID").format(price);
  return formattedPrice;
}

export function applyDiscount(originalPrice, discountPercentage) {
  const discountAmount = originalPrice * (discountPercentage / 100);
  const discountedPrice = originalPrice - discountAmount;
  return discountedPrice;
}

export function copyToClipboard(text) {
  const temp = document.createElement("textarea");
  temp.value = text;
  document.body.appendChild(temp);
  temp.select();
  document.execCommand("copy");
  document.body.removeChild(temp);
}
