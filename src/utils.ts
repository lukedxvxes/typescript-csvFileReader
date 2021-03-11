export const dateStringToDate = (dateString: string): Date => {
    enum dateSections {
        year = 2,
        month = 1,
        day = 0,
    }

    const dateParts = dateString.split('/').map((val: string): number => {
        return parseInt(val);
    });

    return new Date(
        dateParts[dateSections.year],
        dateParts[dateSections.month] - 1,
        dateParts[dateSections.day]
    );
};
