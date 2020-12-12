export const fetchCategory = () => {
    return $.ajax({
        url: "/api/categories",
        method: "GET"
    })
}