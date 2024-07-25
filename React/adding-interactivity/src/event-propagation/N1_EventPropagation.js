/**
 *
 * If you click on either button, its 'onClick' will run first
 * Followed by the parent <div>'s onClick
 *
 */

export default function EventPropagation() {
  return (
    <dvi className="toolbar" onClick={() => alert("Clicked the toolbar .....")}>
      <button onClick={() => alert("Now playing .....")}>Play Movie</button>
      <button onClick={() => alert("Now uploading .....")}>Upload Image</button>
    </dvi>
  );
}
