export const filterData = (data: any[], keyword: string) => {
    return data.filter((element: { title: string; author: any; }) => {
        return element.title.toLowerCase().includes(keyword) || element.author.toLowerCase().includes(keyword)
    })
}