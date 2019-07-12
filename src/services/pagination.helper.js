function getTotalPages(arrLength, displayTotal){
    const dividend = arrLength / displayTotal;
    return dividend > 1 ? Math.ceil(dividend) : 1;
}

function getDisplayedItems(index, items, displayTotal){
    const startIndex = index >= 0 ? index : 0;
    return items.slice(startIndex, startIndex + displayTotal);
}

function getIndex(page, displayTotal){
    return page * displayTotal - displayTotal - 1;
}


export {getTotalPages, getDisplayedItems, getIndex};