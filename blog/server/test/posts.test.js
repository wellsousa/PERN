const axios = require('axios')
const crypto = require('crypto')
const postService = require('../src/api/services/posts')

const generateRandomText = (num)=>{
    return crypto.randomBytes(num).toString('hex')
}

const request=(url, method, data)=>{
    return axios({url, method, data})
}

test('Should get posts', async ()=>{

    //given - dado que
    const post1 = await  postService.savePost({title: generateRandomText(10), content: generateRandomText(30)})
    const post2 = await postService.savePost({title: generateRandomText(10), content: generateRandomText(30)})
    const post3 = await postService.savePost({title: generateRandomText(10), content: generateRandomText(30)})

    console.log(post1)
    //when - quando acontecer
    const res = await request('http://localhost:5001/posts','GET')
    
    const posts = res.data
    //then - entao
    expect(posts).toHaveLength(3)
    
    await postService.deletePost(post1.rows[0].id)
    await postService.deletePost(post2.rows[0].id)
    await postService.deletePost(post3.rows[0].id)
})