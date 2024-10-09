import axios from "axios"

const stringToQuery = (_, item) => {
    if ( item === undefined ) return undefined
    return (item)
}

const numberToQuery =  (_, item) => {
    if ( item === undefined ) return undefined
    return (String(item))
}

const arrayToQuery =  (key, items) => {
    if ( items === undefined ) return undefined
    return (items.join(`&${key}=`))
    // return items
}

const pyExpToQuery = (_, item) => {
    if ( item === undefined ) return undefined
    return (encodeURIComponent(item))
}

const booleanToQuery = (_, item) => {
    if ( item === undefined ) return undefined
    return (String(item))
}

const objectListToQuery = (_, item) => {
    if ( item === undefined ) return undefined
    let text = "["
    item.forEach(
        (obj) => {
            text += "{"

            Object.keys(obj).forEach(
                (key) => {
                    text += `'${key}': '${obj[key]}',`
                }
            )
        
            text += '},'
        }
    )
    text += "]"
    console.log(text)

    return encodeURIComponent(text)
}

export const buildGet = (EndpointStructure) => {


    const typesToQuery = {
        "string": stringToQuery,
        "number": numberToQuery,
        "array": arrayToQuery,
        "pyExp": pyExpToQuery,
        "boolean": booleanToQuery,
        "objectList": objectListToQuery
    }

    const apiGet = async (params, stateSetter) => {
        const baseURL = EndpointStructure.domain + EndpointStructure.name + "/"
        const queryItems = []

        Object.keys(EndpointStructure.params).forEach(
            (paramKey) => {
                const callbackIndex = EndpointStructure.params[paramKey]
                const value = typesToQuery[callbackIndex](
                    paramKey,
                    params[paramKey]
                )
                if ( value !== undefined ) {
                    queryItems.push (`${paramKey}=${value}`)
                }
            }
        )

        const url = `${baseURL}?${queryItems.join("&")}`

        // const queryParams = {}

        // Object.keys(EndpointStructure.params).forEach(
        //     (key) => {
        //         if ( key === "search" && params[key] !== undefined ) {
        //             queryParams[key] = params[key].map(item => JSON.stringify(item))
        //         } else if (params[key] !== undefined ) {
        //             const callbackIndex = EndpointStructure.params[key]
        //             const value = typesToQuery[callbackIndex](
        //                 key,
        //                 params[key]
        //             )
        //             queryParams[key] = value
        //         }
        //     }
        // )

        const response = await axios.get(url, )
        stateSetter(response.data)
    }

    return apiGet
}
