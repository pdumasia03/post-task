export type Post = {
  id: number
  userId: number
  title: string
  body: string
}
export type TableProps = {
  postsData: Post[]
  handleAddPost: (payload: Object) => void
  handleDeletePost: (id: Number) => void
}
export type SearchInputProps = {
  handleSearch: (value: string) => void
  value: string
}
