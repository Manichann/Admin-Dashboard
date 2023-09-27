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
        image: '../birddd.jpg',
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
    {
        id: 'U003',
        username: 'Jay',
        image: 'https://i.pinimg.com/originals/53/56/c9/5356c943bb32103bae21e8e819ce776e.jpg',
        email: 'jay@gmail.com',
        password: '22222222',
        role: 'Programing'
    },
    {
        id: 'U004',
        username: 'Jake',
        image: 'https://i.pinimg.com/originals/31/c4/9c/31c49cac5cd6e4795ea35999806ba08c.jpg',
        email: 'jake@gmail.com',
        password: '22222222',
        role: 'Software Developer'
    },
    {
        id: 'U005',
        username: 'Sunghoon',
        image: 'https://i.pinimg.com/originals/f8/6f/65/f86f654bf00767b5c7d09e7446e0097f.jpg',
        email: 'sunghoon@gmail.com',
        password: '22222222',
        role: 'PR'
    },
    {
        id: 'U006',
        username: 'Sunoo',
        image: 'https://pbs.twimg.com/media/FkJYSJMaAAARjfA.jpg',
        email: 'sunoo@gmail.com',
        password: '22222222',
        role: 'PR'
    },
    {
        id: 'U007',
        username: 'Jungwon',
        image: 'https://th.bing.com/th/id/OIP.IcmcVk7uQJ5YifEF_JJXqAHaJG?pid=ImgDet&rs=1',
        email: 'jungwon@gmail.com',
        password: '22222222',
        role: 'Back-end Developer'
    },
    {
        id: 'U008',
        username: 'Niki',
        image: 'https://i.pinimg.com/originals/30/3e/55/303e552fa277141ae84d5c6cde54c7fc.jpg',
        email: 'niki@gmail.com',
        password: '22222222',
        role: 'IT Support'
    },
]

export function getUser(search?: string): User[]{
    const data = search
        ? users.filter((user) => user.username.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
        : users

    return data
}