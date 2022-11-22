export const DelayRandomly = (value) => {
    const delay = Math.random() * 800 + 100;
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(value);
        }, delay);
    });
}