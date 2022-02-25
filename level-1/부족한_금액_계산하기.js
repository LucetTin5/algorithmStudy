const solution = (price, money, count) => {
    let total_price = 0;
    while (count > 0) {
        total_price += price * count--;  
    }
    if (money > total_price) {
        return 0;
    }
    return total_price - money;
}
