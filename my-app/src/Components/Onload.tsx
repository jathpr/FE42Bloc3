import { useState } from "react"
import { sendPost } from "./Posts/posts"

export const Onload = () => {
    const [title, setTitle] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault
        sendPost({ title })
    }

    return (
        <>
            <form onSubmit={() => { handleSubmit }}>
                <label> Title
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </label>
            </form>
        </>
    )
}