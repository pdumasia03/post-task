import { useState, useEffect } from 'react'
import axios from 'axios'

import Table from '../../components/Table/Table'
import SearchInput from '../../components/SearchInput/SearchInput'
import { Post } from '../../types/types'

const baseUrl = `https://jsonplaceholder.typicode.com`
const Posts = () => {
  const [postData, setPostData] = useState<Post[]>([])
  const [searchValue, setSearchValue] = useState('')

  /**
   * Get all the posts data
   */
  const getUsers = async () => {
    try {
      const { data } = await axios.get(`${baseUrl}/posts`)
      setPostData(data)
    } catch (error) {
      console.error(error)
    }
  }
  /**
   * Add posts data
   */
  const handleAddPost = async (payload: Object) => {
    try {
      const { data } = await axios.post<Post[]>(
        `${baseUrl}/posts`,
        { payload },
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        },
      )
      setPostData(data)
    } catch (error) {
      console.error(error)
    }
  }
  /**
   * Delete posts data
   */
  const handleDeletePost = async (id: Number) => {
    try {
      await axios.delete<Post[]>(`${baseUrl}/posts/${id}`)
      setPostData(postData.filter((item) => item.id !== id))
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div>
      <div className="flex justify-center items-center mb-10">
        <SearchInput
          value={searchValue}
          handleSearch={setSearchValue}
        />
        <button className='bg-green-900 hover:bg-green-600 text-white px-4 py-2 rounded ml-2' >Add</button>
      </div>
      <Table
        postsData={postData.filter(({ title }) => title.includes(searchValue))}
        handleAddPost={handleAddPost}
        handleDeletePost={handleDeletePost}
      />
    </div>
  )
}

export default Posts
