import { signIn, useSession, signOut } from 'next-auth/react'
import GlobalStoreContext from '@/store/index'
import { useContext, useState } from 'react'

export default function CreateForm() {
  const { data: session, status } = useSession()
  const { onCreate } = useContext(GlobalStoreContext)

  const [title, setTitle] = useState<string>('')

  const onSubmit = (e) => {
    e.preventDefault()
    onCreate(title, () => setTitle(''))
  }

  return status === 'authenticated' ? (
    <form className="flex items-center space-x-4" onSubmit={onSubmit}>
      <img
        src={session.user.image}
        alt={session.user.name}
        width={40}
        className="rounded"
      />
      <input
        className="form-input"
        type="text"
        placeholder="Enter a new project or feature request &crarr;"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button className="button" type="button" onClick={() => signOut()}>
        Logout
      </button>
    </form>
  ) : (
    <div
      className="flex flex-col items-center bg-zinc-100 px-3 py-6 rounded
    dark:bg-zinc-800"
    >
      <p>Please login to request or vote for a new feature</p>
      <button className="button mt-4" type="button" onClick={() => signIn()}>
        Login
      </button>
    </div>
  )
}
