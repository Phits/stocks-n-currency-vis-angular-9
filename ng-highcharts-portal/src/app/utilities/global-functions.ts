export function formatChartData(timeSeries: any): any[] {
    const data = [];
    let stock: any;
    for (const ts in timeSeries) {
        if (timeSeries) {
            stock = timeSeries[ts];

            data.push([
                new Date(ts).getTime(),
                parseFloat(stock['1. open']),
                parseFloat(stock['2. high']),
                parseFloat(stock['3. low']),
                parseFloat(stock['4. close'])
            ]);
        }
    }
    return data.reverse();
}
