function handleClick() {
  alert(`Hello .... I'm Ei Ei Kyaw`);
}

/**
 * passing a function (correct)
 * ----------
 * <button onClick={handleClick}></button>
 * <button onClick={() => alert('...')}>
 *
 * calling a function (incorrect)
 * ----------
 * <button onClick={handleClick()}></button>
 * <button onClick={alert('...')}>
 *
 */

export default function AddingEventHandler() {
  return <button onClick={handleClick}>Click Me!!!!</button>;
}
