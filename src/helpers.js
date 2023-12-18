function choice(items) {
    const index = Math.floor(Math.random() * items.length);
    return items[index];
}

function remove(items, item) {
    const index = items.findIndex(thing => thing == item);
    if (index > -1) {
        items.splice(index, 1);
        return item;
    }
    return undefined;
}

export { choice, remove };