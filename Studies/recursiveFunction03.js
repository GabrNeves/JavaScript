function printChildren(t) {
    // ????? -> loop in this situation is very complex
}

function printChildrenRecursive(t) {
    if (t.children.legth === 0) {
        return
    }
    t.children.forEach(child => {
        console.log(child.name);
        printChildrenRecursive(child);
    })
}

/*
printChildrenRecursive('John')
    printChildrenRecursive('Jim')
    return
    printChildrenRecursive('Zoe')
        printChildrenRecursive('Kyle')
        return
        printChildrenRecursive('Sophia')
        return
    return
return
*/


const tree = {
    name: 'John',
    children: [
        {
            name: 'Jim',
            children: []
        },
        {
            name: 'Zoe',
            children: [
                {name: 'Kyle', children: [] },
                {name: 'Sophia', children: [] }
            ]
        }
    ]
}

printChildrenRecursive(tree)
