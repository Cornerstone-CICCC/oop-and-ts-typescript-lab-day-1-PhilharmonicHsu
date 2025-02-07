// 🍎 Create an Inventory System where items can be added, updated, and checked for stock.
// 1. Create a tuple type called ItemDetails which holds (string, number, boolean) representing itemName, quantity, and isAvailable.
// 2. Create a type alias called InventoryItem which contains: itemId (number), details (ItemDetails).
// 3. Create a function called addItem which adds an item to the inventory array. The function needs to return an InventoryItem object.
// 4. Create a function called updateStock which updates the quantity of an item. The return needs to be a string.
// 5. Create a function called checkStock which returns true if the item is available and false otherwise.

type ItemDetails = [string, number, boolean]

type InventoryItem = {
    itemId: number,
    details: ItemDetails
}

const inventory: InventoryItem[] = [];

function addItem(itemId: number, itemName: string, quantity: number, isAvailable: boolean): InventoryItem {
    const newInventoryItem: InventoryItem = {
        itemId,
        details: [itemName, quantity, isAvailable]
    }

    inventory.push(newInventoryItem);

    return newInventoryItem;
}

function updateStock(itemId: number, quantity: number): string {
    const targetInventoryItem = inventory.find(inventoryItem => inventoryItem.itemId === itemId);

    if (targetInventoryItem) {
        targetInventoryItem.details[1] = quantity;

        return `Stock updated for ${targetInventoryItem.details[0]}, new quantity: ${targetInventoryItem.details[1]}`
    }

    return "Undefinded Item";
}

function checkStock(itemId: number): boolean|string {
    const targetInventoryItem = inventory.find(inventoryItem => inventoryItem.itemId === itemId);

    if (targetInventoryItem) {
        return targetInventoryItem.details[2];
    }

    return 'Undefinded Item'
}

// Test cases (Create more if needed)
console.log(addItem(1, "Laptop", 5, true)) // { itemId: 1, details: ["Laptop", 5, true] }
console.log(updateStock(1, 3)) // "Stock updated for Laptop, new quantity: 3"
console.log(checkStock(1)) // true