const old_price_after_discount = (new_price: number, discount: number) => (new_price / (1 - discount / 100)).toFixed(0);

export default old_price_after_discount;