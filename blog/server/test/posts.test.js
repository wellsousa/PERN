const axios = require('axios')
const crypto = require('crypto')
const postService = require('../src/api/services/posts')

const generateRandomText = (num)=>{
    return crypto.randomBytes(num).toString('hex')
}

const request=(url, method, data)=>{
    return axios({url, method, data})
}

/*
    test.only('Should get posts', async ()=>{
        //executa apenas esta função em especifico
    })
*/
test('Should get posts', async ()=>{

    //given - dado que
    const post1 = await  postService.savePost({title: generateRandomText(10), content: generateRandomText(30)})
    const post2 = await postService.savePost({title: generateRandomText(10), content: generateRandomText(30)})
    const post3 = await postService.savePost({title: generateRandomText(10), content: generateRandomText(30)})

    //when - quando acontecer
    const res = await request('http://localhost:5001/posts','GET')
    
    const posts = res.data
    //then - entao
    expect(posts).toHaveLength(3)
    
    await postService.deletePost(post1.rows[0].id)
    await postService.deletePost(post2.rows[0].id)
    await postService.deletePost(post3.rows[0].id)
})

test('Should create a Post', async ()=>{

    const data = {"title": generateRandomText(10), "content": generateRandomText(30)}
    const res = await request('http://localhost:5001/posts','POST', data)

    const response = res.data 
    /*
        Verifca se o dado gravado no banco é o mesmo dado que foi enviado
    */
    expect(response[0].title).toBe(data.title)
    expect(response[0].content).toBe(data.content)

    await postService.deletePost(response[0].id)
})

test('Should update a post', async ()=>{
    const response = await postService.savePost({
        title: generateRandomText(10),
        content: generateRandomText(30)
    })

    let post = response.rows[0]
    post.title =  generateRandomText(10)
    post.content = generateRandomText(30)

    await request(`http://localhost:5001/posts/${post.id}`,'PUT', post)
    const updatedPost = await postService.getPost(post.id)

    console.log('updatedPost')
    console.log(updatedPost)
    expect(updatedPost.rows[0].title).toBe(post.title)
    expect(updatedPost.rows[0].content).toBe(post.content)

    await postService.deletePost(post.id)
})

test('Should delete a post', async ()=>{
    const response = await postService.savePost({
        title: generateRandomText(10),
        content: generateRandomText(30)
    })

    const post = response.rows[0]
    console.log(post)
    await request(`http://localhost:5001/posts/${post.id}`,'DELETE')

    const postDeleted = await postService.getPost(post.id)

    expect(postDeleted.rows[0]).toBeUndefined()

    console.log(postDeleted)
})