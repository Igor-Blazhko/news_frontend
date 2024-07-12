export interface Posts {
    id: number,
    article: string,
    text: string,
    tags: Tag[],
    author: User,
}
export interface Tag{
    nametag:string,
}

export interface User{
    id:number,
    login:string,
    name:string,
    sername:string,
}

export interface Comment {
    id:number,
    text:string,
}