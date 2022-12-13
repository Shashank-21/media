import { useRemoveAlbumMutation } from "../store";
import Button from "./Button";
import { GoTrashcan } from "react-icons/go";
import ExpandablePanel from "./ExpandablePanel";
import PhotosList from "./PhotosList";

function AlbumsListItem({ album }) {
  const [removeAlbum, removeAlbumResults] = useRemoveAlbumMutation();

  const handleRemoveAlbum = () => {
    removeAlbum(album);
  };
  const header = (
    <>
      <Button
        onClick={handleRemoveAlbum}
        loading={removeAlbumResults.isLoading}
        danger
        outline
        className="mr-3"
      >
        <GoTrashcan />
      </Button>
      {album.title}
    </>
  );
  return (
    <ExpandablePanel key={album.id} header={header} className="bg-purple-50">
      <PhotosList album={album} />
    </ExpandablePanel>
  );
}

export default AlbumsListItem;
