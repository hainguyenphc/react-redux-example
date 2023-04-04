import { useDispatch, useSelector } from "react-redux";
import { addSong, removeSong } from "../redux/song/SongActions";
// import { addSong, removeSong } from "../actions/SongAction";

export default function SongList() {
  const dispatch = useDispatch();
  // This works
  // const state = useSelector((state) => state);
  // This works too
  const song = useSelector(state => state.song);
  return (
    <div>
      <ul>
        {/* {state.song.songs.map(each => <li key={each.id}>{each.title} by {each.author}</li>)} */}
        {song.songs.map(each => <li key={each.id}>{each.title} by {each.author}</li>)}
      </ul>
      <div>
        <button onClick={() => { dispatch(addSong({ id: "2", title: "Am I wrong?", category: "Hiphop", author: "Nico ft. Vinz" })) }}>Add Song</button>
        <button onClick={() => { dispatch(removeSong("2")) }}>Remove Song</button>
      </div>
    </div>
  );
}
