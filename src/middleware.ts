//Without a defined matcher, applies auth to entire project
export {default} from "next-auth/middleware"

//Applies auth to only matching routes
export const config = {matcher:["/blog","/dashboard"]}