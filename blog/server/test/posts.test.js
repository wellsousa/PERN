const axios = require('axios')

test('Should get posts', async ()=>{
    const res = await axios({
        url: 'http://localhost:5001/posts',
        method: 'GET',

    })
    console.log(res)
})