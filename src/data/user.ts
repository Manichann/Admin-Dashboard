export interface User {
    id: string
    username: string
    image: string
    email: string
    password: string
    role: string
}

export const users: User[] = [
    {
        id: 'U001',
        username: 'Phongsavanh',
        image: '../birddy.jpg',
        email: 'phongsavanh@gmail.com',
        password: '11111111',
        role: 'Software Developer'
    },
    {
        id: 'U002',
        username: 'Heeseung',
        image: 'https://th.bing.com/th/id/OIP.CLf9yTXFb6S_7ywDa6gX0wHaLH?pid=ImgDet&w=197&h=295&c=7&dpr=1.5',
        email: 'heeseung@gmail.com',
        password: '22222222',
        role: 'Project Manager'
    },
]