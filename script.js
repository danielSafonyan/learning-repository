const counterCreator = () => {
    let count = 0;
    return {
        counting: () => {
            console.log(count);
            count++;
        },
        currentCount: () => count,
    }
}

const counter = counterCreator();

