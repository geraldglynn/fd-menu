import { fromJS } from "immutable"

export const getMenu = () => {
    return fetch('https://menus.flipdish.co/prod/16798/e6220da2-c34a-4ea2-bb51-a3e190fc5f08.json')
        .then(res => res.json())
        .then(json => fromJS(json))
}