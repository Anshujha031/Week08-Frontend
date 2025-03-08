function generateBirthMonths() {
    const birthMonths = [];
    for (let i = 0; i < 50; i++) {
        const month = Math.floor(Math.random() * 12) + 1;
        birthMonths.push(month);
    }
    return birthMonths;
}

function groupByMonth(birthMonths) {
    const grouped = {};
    birthMonths.forEach((month, index) => {
        if (!grouped[month]) {
            grouped[month] = [];
        }
        grouped[month].push(`Individual ${index + 1}`);
    });
    return grouped;
}

function printGroupedByMonth(grouped) {
    for (const month in grouped) {
        console.log(`Month ${month}: ${grouped[month].join(', ')}`);
    }
}

const birthMonths = generateBirthMonths();
const groupedByMonth = groupByMonth(birthMonths);
printGroupedByMonth(groupedByMonth);