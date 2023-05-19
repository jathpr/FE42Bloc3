import { setFavoritesPosts } from "../../Store/post"
import { useAppDispatch, useAppSelector } from "../../Store/store"

type Props = {
    postId: number,
}

export const AddToFavorites = ({ postId }: Props) => {
    const dispatch = useAppDispatch()

    return <div className=''>
        <button onClick={() => {
            return dispatch(setFavoritesPosts(postId))
        }}>Add to Favorites</button>
    </div>
}