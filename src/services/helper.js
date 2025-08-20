const IsChekedAllItems = (data1, data2) => {
    return data2.every(specUser =>
        data1.some(user => user.id === specUser.id))

}


export { IsChekedAllItems }