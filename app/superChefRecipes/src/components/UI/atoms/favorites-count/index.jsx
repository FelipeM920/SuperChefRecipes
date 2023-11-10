import "./style.scss";
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

export default function FavoritesCount() {
  return (
    <section className="favorites-count">
      <BookmarkBorderOutlinedIcon color="primary"></BookmarkBorderOutlinedIcon>
      <span>273</span>
    </section>
  );
}
