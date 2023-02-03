let employee: { 
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} = { 
    id: 1, 
    name: 'Bryant', 
    retire: (date: Date) => {
        console.log(date)
    }
};
