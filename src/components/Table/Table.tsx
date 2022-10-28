import { useMemo } from 'react'
import { TableProps } from '../../types/types'

const Table = ({ postsData, handleDeletePost }: TableProps) => {
  const headers = useMemo(
    () => (
      <thead className="border-b">
        <tr className="bg-gray-100">
          <th className="text-left p-4 font-medium">Title</th>
          <th className="text-left p-4 font-medium">Body</th>
          <th className="text-left p-4 font-medium">Action</th>
        </tr>
      </thead>
    ),
    [],
  )

  const body = useMemo(
    () => (
      <tbody>
        {postsData.map(({ id, title, body }) => (
          <tr className="border-b hover:bg-gray-50" key={`post-${id}`}>
            <td className="p-4">{title}</td>
            <td className="p-4">{body}</td>
            <td>
              <button
                onClick={() => handleDeletePost(id)}
                className="text-red-800 hover:text-red-600	cursor-pointer"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    ),
    [handleDeletePost, postsData],
  )

  return (
    <>
      <table className="table-auto  w-full">
        {headers}
        {body}
      </table>
    </>
  )
}
export default Table
