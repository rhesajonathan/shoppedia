const defaultPath = 'https://fakestoreapi.com/'

export default async function request (endPoint) {
    let response = await fetch(`${defaultPath}${endPoint}`)
    let result = await response.json()
    return result
}