import { ADD_SONG, REMOVE_SONG } from "./SongActionTypes";

const initialState = {
  songs: [
    {
      id: "1",
      title: "Winter",
      category: "classical",
      author: "Vivaldi",
    },
  ],
};

const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SONG:
      return {
        ...state,
        songs: [...state.songs, action.payload],
      };
    case REMOVE_SONG:
      let songs_ = [...state.songs].filter(each => each.id !== action.payload);
      return {
        ...state,
        songs: songs_,
      };
    default:
      return state;
  }
};

export default songReducer;
