
export const countSubTotal = (price: number, number: number) => {
    const result = +((price * number).toFixed(2))
    console.log(result, typeof result);
    return result
}